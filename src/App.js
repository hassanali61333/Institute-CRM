// src/App.js
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Screens
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
import AllFeeSlips from "./screens/Allfeeslip";
import Usersslip from "./screens/Usersslip";
import Showattendance from "./screens/Showattendance";
import Updateform from "./screens/Updateform";
import Userformupdate from "./screens/Userformupdate";
import Myattendance from "./screens/Myattendance";
import Adminupload from "./screens/Adminupload";
import Verification from "./screens/Verification";
import Addcourses from "./screens/Addcourses";

// Component + icons
import Sidebar from "./components/Sidebar";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CSS
import "./components/Sidebar.css";
import "./screens/Courses.css";
import "./screens/Profile.css";
import "./screens/Detail.css";
import "./screens/Admissionfarm.css";
import "./screens/Postdetail.css";
import "./screens/Usersslip.css";
import "./screens/Verification.css";

// 🔒 Protected layout with RESPONSIVE sidebar offset
function ProtectedLayout() {
  const loginuser = useSelector((state) => state.courses.user);

  // Fallback: localStorage user
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("userdata") : null;
  const storedUser =
    stored && stored !== "undefined" && stored !== "null"
      ? JSON.parse(stored)
      : null;

  const users = loginuser ?? storedUser;

  // 📱 Track viewport
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 800 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!users) return <Navigate to="/" replace />;

  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
      <Sidebar />

      <div
        className="app-content"
        style={{
          flex: 1,
          marginLeft: isMobile ? "0" : "250px",     // ✅ responsive
          paddingTop: isMobile ? "60px" : "0",      // ✅ mobile topbar space
          transition: "margin-left 0.3s ease, padding-top 0.3s ease",
          width: "100%",
          minWidth: 0,                              // ✅ prevent flex overflow
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

// Helper: WhatsApp button hidden on auth pages
function FloatingWhatsApp() {
  const location = useLocation();
  const authRoutes = ["/", "/login", "/signup"];
  if (authRoutes.includes(location.pathname)) return null;

  return (
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
  );
}

function App() {
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

      <FloatingWhatsApp />

      <Routes>
        {/* ---------- PUBLIC (NO SIDEBAR) ---------- */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ---------- PROTECTED (WITH SIDEBAR) ---------- */}
        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/admissionfarm" element={<Admissionfarm />} />
          <Route path="/postsdetail" element={<Postsdetail />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/feeslips/:id" element={<Feeslip />} />
          <Route path="/allfeeslips" element={<AllFeeSlips />} />
          <Route path="/usersslip/:id" element={<Usersslip />} />
          <Route path="/showattendance" element={<Showattendance />} />
          <Route path="/update-student" element={<Updateform />} />
          <Route path="/userformupdate" element={<Userformupdate />} />
          <Route path="/myattendance" element={<Myattendance />} />
          <Route path="/adminupload" element={<Adminupload />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/addcourses" element={<Addcourses />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;