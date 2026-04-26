import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "./services/userService";
import { useDispatch } from "react-redux";
import { adduser, studentattendence, setgap, setsubmissionid, setformid } from "../store/Coursesslice";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { getFirebaseToken } from "../fire";
import { tokenapi } from "./services/userService";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDistanceInMeters = async (lat, lng) => {
    try {
      const oklat = 33.63173326427382;
      const oklng = 73.07371015129668;
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371;
      const dLat = toRad(oklat - lat);
      const dLng = toRad(oklng - lng);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat)) * Math.cos(toRad(oklat)) * Math.sin(dLng / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distanceMeters = R * c * 1000;
      

      console.log("Distance from Islamabad (meters):", distanceMeters.toFixed(0));

      if (distanceMeters < 150) {
        dispatch(setgap(distanceMeters));
        localStorage.setItem("attendancedistance",JSON.stringify(distanceMeters))
        dispatch(studentattendence(true));
      } else {
        dispatch(studentattendence(false));
      }

      return distanceMeters;
    } catch (err) {
      console.log("Distance error:", err);
    }
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation supported nahi");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        getDistanceInMeters(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log("Location error:", error.message);
      }
    );
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warning("Please enter both email and password!", {
        position: "top-center",
        autoClose: 4000,
        transition: Bounce,
      });
      return;
    }

    setIsLoading(true);
    try {
      const apiResponse = await LoginApi({ email, password });

      if (apiResponse.data.status) {

        dispatch(adduser(apiResponse.data.user));
      dispatch(setsubmissionid(apiResponse.data.reultform?.uid ?? null));
await localStorage.setItem("userdata",JSON.stringify(apiResponse.data.user))
await localStorage.setItem("reultform",JSON.stringify(apiResponse.data.reultform?.uid))


console.log(apiResponse);

        getUserLocation();
      const newToken = await getFirebaseToken();
      console.log("Firebase token:", newToken);

      if (apiResponse.data.user.token !== newToken) {
        try {
          const tokenResp = await tokenapi(apiResponse.data.user.id, newToken);
        
          console.log("Token updated:", tokenResp.data);
        } catch (err) {
          console.error("Token update failed:", err);
        }
      } else {
        console.log("Token same, no update needed");
      }




        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        navigate("/home");

      } 
      
      else {
        toast.error("Invalid email or password!", {
          position: "top-center",
          autoClose: 5000,
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };
  useEffect(()=>{
    checkLogin()
  },[])
const checkLogin = async () => {
  let userdata = localStorage.getItem("userdata");

  if (userdata) {
    let data = JSON.parse(userdata);

    let reultform = localStorage.getItem("reultform");
    let relutdata = reultform && reultform !== "undefined"
      ? JSON.parse(reultform)
      : null;

    dispatch(adduser(data));
    dispatch(setsubmissionid(relutdata));
    navigate("/home");
  }
};

  return (
    <>

      <div className="login-container">
        <div class="video-container">
<p onClick={()=> navigate("https://youtu.be/AUSWNrXKoV4?si=u5Pd6ZbwaLyl99X6")}>How to use it? click on link.  👈</p>
</div>
        <h1 className="welcome-title">
          Welcome to <span className="highlight">FIT Institute</span>
        </h1>

        <div className="login-section">
          <div className="login-card">
            <div className="login-header">
              <h2>Login to Your Account</h2>
            </div>

            <div className="login-form">
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="login-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="login-input"
                />
              </div>

              <div className="forgot-password">
                <a  className="forgot-link">
                  Forgot your password?
                </a>
              </div>

          <button
  className="login-button"
  onClick={handleLogin}
  disabled={isLoading}
>
  {isLoading ? (
    <span className="login-spinner"></span>
  ) : (
    "Login to Account"
  )}
</button>


              <div className="signup-prompt">
                <p>Don't have an account?</p>
                <button
                  className="signup-button"
                  onClick={() => navigate("/signup")}
                >
                  Create Account
                </button>
              </div>

              <div className="institute-info">
                <p className="info-text">FIT Institute Student Portal</p>
                <p className="info-subtext">
                  Secure login for registered students only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
}

export default Login;
