import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "./services/userService";
import "./Signup.css"; 
import { toast,Bounce } from "react-toastify";
import {gernerateotp} from "./services/userService"
import { useDispatch } from "react-redux";
import { setotp, setsignupdata } from "../store/Coursesslice";
import { findByLabelText } from "@testing-library/dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
 
  const handleSignup = async () => {
    setError("");

    if (!email) {
       toast.warning("Please enter your email", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });

      return;
    } else if (!password) {
      
         toast.warning("Please enter a password", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      return;
    }



         let data = {
        "email": email,
        "password": password,
      }





      dispatch(setsignupdata(data))

    setIsLoading(true);
  try{
         const res= await gernerateotp(email)
 console.log(res)
         if(res.data.message == "OTP sent successfully"){ 
        
              toast.info( res.data.message, {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });

        
dispatch(setotp(res.data))
navigate("/verification")

         }
         else{
          
              toast.error( " eamil already exist", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        return
         }
  }
  catch (error){
    toast.error("error check cosnole", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
console.log(error)
  }
 finally{
  setIsLoading(false)
 }  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <>


   <div className="signup-container">
<div class="video-container">
<p onClick={()=> navigate("https://youtu.be/AUSWNrXKoV4?si=u5Pd6ZbwaLyl99X6")}>How to use it? click on link.  👈</p>
</div>


        
        <div className="signup-section">
        <h1 className="welcome-title">Join <span className="highlight">FIT Institute</span></h1>

          <div className="signup-card">
            <div className="signup-header">
              <h2>Create Your Account</h2>
              <p>Fill in your details to get started</p>
            </div>

     

            <div className="signup-form">
              <div className="input-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="optional"
                  value={firstname}
                  onChange={e => setfirstname(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="signup-input"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="fathername">Father's Name</label>
                <input
                  id="fathername"
                  type="text"
                  placeholder="optional"
                  value={lastname}
                  onChange={e => setlastname(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="signup-input"
                />
              </div>

            
              
          

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="signup-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="signup-input"
                />
             
              </div>

            <button
  className="signup-submit-button"
  onClick={handleSignup}
  disabled={isLoading}
>
  {isLoading ? (
    <span className="btn-loading">
      <span className="spinner"></span>
    </span>
  ) : (
    "Create Account"
  )}
</button>

              <div className="login-prompt">
                <p>Already have an account?</p>
                <button 
                  className="login-button"
                  onClick={() => navigate('/')}
                >
                  Login to Account
                </button>
              </div>

              <div className="institute-info">
                <p className="info-text">FIT Institute Student Portal</p>
                <p className="info-subtext">Secure registration for eligible students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;