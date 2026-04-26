import { useEffect, useState } from "react";
import logo from "../images/fitlogo.enc";
import { 
  FaBars, FaHome, FaBook, FaUser, FaUserCheck , 
  FaUserGraduate, FaCloudUploadAlt, FaEye, FaArrowLeft,
  FaSyncAlt 
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, setsubmissionid } from "../store/Coursesslice";


function Sidebar() {
  const dispatch=useDispatch()
 const location=useLocation()

    const navigate = useNavigate();

 const checkLogin = () => {
    const userdata = localStorage.getItem("userdata");
    if (userdata) {
      const data = JSON.parse(userdata);

      let relutdata = null;
      try {
        const raw = localStorage.getItem("reultform");
        if (raw && raw !== "undefined") relutdata = JSON.parse(raw);
      } catch {
        relutdata = null;
      }

      // Redux update
      dispatch(adduser(data));
      dispatch(setsubmissionid(relutdata));
    }
  };

  useEffect(() => {
    checkLogin();
  }, []); 
useEffect(()=>{

},[])
// let app =null;
// let appe =null

//     const user = useSelector(state => state.courses.user);
// console.log(user);
//     const submissionid=useSelector((state)=> state.courses.submissionid) ?? app
//  console.log(submissionid)

// useEffect(()=>{
  
//  app=localStorage.getItem("reultform")
// const appe= app? JSON.parse(app):null
// console.log(appe);


// },[submissionid])

const user = useSelector(state => state.courses.user);
console.log(9);

  const submissionid=useSelector((state)=> state.courses.submissionid) 

  
 

    const [toggle, setToggle] = useState(true);
    const [removeBtn, setRemoveBtn] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setToggle(false);
                setRemoveBtn(true);
            } else {
                setToggle(true);
                setRemoveBtn(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!user) return null;

    return (
        <>
            {toggle ? (
                <div className={`side-bar ${toggle ? 'show' : ''}`}>
                    {removeBtn && <button className="remove-btn" onClick={() => setToggle(false)}>  <FaArrowLeft size={30} color="white" /> </button>}

                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="links">
<ul>
  {/* COMMON LINKS (ADMIN + USER) */}
  <li
    onClick={() => navigate("/home")}
    style={{ color: location.pathname === "/home" ? "black" : "white" }}
  >
    <FaHome style={{ color: "black" }} /> Home
  </li>

  <li
    onClick={() => navigate("/courses")}
    style={{ color: location.pathname === "/courses" ? "black" : "white" }}
  >
    <FaBook style={{ color: "black" }} /> Courses
  </li>

  {/* ADMIN ONLY */}
  {user.role === "admin" && (
    <>
    <li onClick={() => navigate("/studentlist")} 
    style={{ color: location.pathname === "/studentlist" ? "black" : "white" }}
    >
      <FaUserGraduate style={{ color: "black" }} /> All Students
    </li>

        <li onClick={() => navigate("/addcourses")} 
    style={{ color: location.pathname === "/addcourses" ? "black" : "white" }}
    >
      <FaUserGraduate style={{ color: "black" }} /> Add Courses
    </li>
    </>
  )}

  {/* NON-ADMIN ONLY */}
  {user.role !== "admin" && submissionid && (
    <>
      <li onClick={() => navigate(`/feeslips/${user.id}`)} 
    style={{ color: location.pathname === `/feeslips/${user.id}` ? "black" : "white" }}
        >
        <FaCloudUploadAlt style={{ color: "black" }} /> Upload Feeslip
      </li>

      <li onClick={() => navigate(`/usersslip/${user.id}`)}
    style={{ color: location.pathname === `/usersslip/${user.id}` ? "black" : "white" }}
        >
        <FaEye style={{ color: "black" }} /> My Fee Slip
      </li>

      <li onClick={() => navigate("/profile")}
    style={{ color: location.pathname === "/profile" ? "black" : "white" }}
        >
        <FaUser style={{ color: "black" }} /> Profile
      </li>

      <li onClick={() => navigate("/myattendance")}
    style={{ color: location.pathname === "/myattendance" ? "black" : "white" }}
        >
        <FaUserCheck  style={{ color: "black" }} /> My Attendance
      </li>

      <li onClick={() => navigate("/userformupdate")}
    style={{ color: location.pathname === "/userformupdate" ? "black" : "white" }}
        >
        <FaSyncAlt  style={{ color: "black" }} /> UserFormupdate
      </li>
    </>
  )}
</ul>
                    </div>
                </div>
            ) : (
                <FaBars className="show-btn" size={40} onClick={() => setToggle(prev => !prev)} />
            )}
        </>
    );
}

export default Sidebar;
