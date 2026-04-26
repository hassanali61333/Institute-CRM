import "./App.css";
import { Routes, Route,Navigate, useLocation } from "react-router-dom";

import Home from "./screens/Home";
import Courses from "./screens/Courses";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Detail from "./screens/Detail";
import Admissionfarm from "./screens/Admissionfarm";
import Postsdetail from "./screens/Postdetail";
import StudentList from "./screens/Userlist";
import Feeslip from "./screens/Feeslip";

import { FaWhatsapp } from "react-icons/fa";

import "./components/Sidebar.css";
import "./screens/Courses.css";
import "./screens/Profile.css";
import "./screens/Detail.css";
import "./screens/Admissionfarm.css";
import "./screens/Postdetail.css";
import "./screens/Usersslip.css"
import AllFeeSlips from "./screens/Allfeeslip";
import Usersslip from "./screens/Usersslip";
import Showattendance from "./screens/Showattendance";
import Updateform from "./screens/Updateform";
import Userformupdate from "./screens/Userformupdate";
import Myattendance from "./screens/Myattendance";
import Adminupload from "./screens/Adminupload"
import Sidebar from "./components/Sidebar";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Verification from "./screens/Verification";
import "./screens/Verification.css";
import Addcourses from "./screens/Addcourses";

function App() {
  
const Location=useLocation()


const hidesidebar =[
  "/admissionfarm",
  "/update-student",
  "/userformupdate",
]




const bar = !hidesidebar.includes(Location.pathname)
  return (
    <>
          <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        limit={3}
        theme="colored"
      />
    {
      bar &&  
     < Sidebar/>
      
    }
 <div className="wattsappbtn">
  <a 
    href="https://wa.me/923445701828" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "green", fontSize: "30px" }}
  >
     <FaWhatsapp /> 
  </a>
</div>
     <Routes>

  <Route path="/" element={<Login />} />

  <Route path="/home" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
<Route path="/profile" element={<Profile />} />

  <Route path="/signup" element={<Signup />} />

  <Route path="/detail" element={<Detail />} />
  <Route path="/admissionfarm" element={<Admissionfarm />} />
  <Route path="/postsdetail" element={<Postsdetail />} />

  <Route path="/studentlist" element={<StudentList />} />
  <Route path="/feeslips/:id" element={<Feeslip />} />

  <Route path="/allfeeslips" element={<AllFeeSlips />} />
  <Route path="/usersslip/:id" element={<Usersslip />} /> 
  <Route path="/showattendance" element={<Showattendance/>} />
<Route path="/update-student" element={<Updateform />} />
<Route path="/userformupdate" element={<Userformupdate />} />
<Route path="/myattendance" element={<Myattendance />} />
<Route path="/adminupload" element={<Adminupload />} />
<Route path="/verification" element={<Verification />} />
<Route path="/addcourses" element={<Addcourses />} />




   <Route path="*" element={<Navigate to="/" replace />} />

</Routes>

    </>
  );
}

export default App;
