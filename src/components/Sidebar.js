// src/components/Sidebar.jsx
import { useEffect, useState } from "react";
import logo from "../images/fitlogo.enc";
import {
  FaBars,
  FaHome,
  FaBook,
  FaUser,
  FaUserCheck,
  FaUserGraduate,
  FaCloudUploadAlt,
  FaEye,
  FaArrowLeft,
  FaSyncAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, setsubmissionid } from "../store/Coursesslice";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state) => state.courses.user);
  const submissionid = useSelector((state) => state.courses.submissionid);

  const [toggle, setToggle] = useState(() => window.innerWidth >= 800);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 800);

  // 🔁 Fallback: load user from localStorage if Redux empty
  useEffect(() => {
    if (!user) {
      const stored = localStorage.getItem("userdata");
      if (stored && stored !== "undefined" && stored !== "null") {
        try {
          dispatch(adduser(JSON.parse(stored)));
        } catch {}
      }

      const raw = localStorage.getItem("reultform");
      if (raw && raw !== "undefined" && raw !== "null") {
        try {
          dispatch(setsubmissionid(JSON.parse(raw)));
        } catch {}
      }
    }
  }, [user, dispatch]);

  // 📱 Handle resize — auto-open on desktop, auto-close on mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 800;
      setIsMobile(mobile);
      setToggle(!mobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🚪 Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) setToggle(false);
  }, [location.pathname, isMobile]);

  // 🧱 Don't render sidebar if no user
  if (!user) return null;

  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) setToggle(false); // auto-close on mobile
  };

  return (
    <>
      {/* 📱 Mobile top bar — hamburger + logo */}
      {isMobile && !toggle && (
        <div className="mobile-topbar">
          <FaBars
            className="hamburger-btn"
            size={26}
            onClick={() => setToggle(true)}
          />
          <span className="mobile-topbar-title">FIT Institute</span>
        </div>
      )}

      {/* 🌑 Overlay backdrop (mobile only) */}
      {isMobile && toggle && (
        <div className="sidebar-overlay" onClick={() => setToggle(false)} />
      )}

      {/* 📚 Sidebar itself */}
      <div
        className={`side-bar ${toggle ? "show" : "hide"} ${
          isMobile ? "mobile" : "desktop"
        }`}
      >
        {/* Close button — mobile only */}
        {isMobile && (
          <button
            className="remove-btn"
            onClick={() => setToggle(false)}
            aria-label="Close sidebar"
          >
            <FaArrowLeft size={22} color="white" />
          </button>
        )}

        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="links">
          <ul>
            {/* COMMON */}
            <li
              onClick={() => handleNavigate("/home")}
              style={{
                color: location.pathname === "/home" ? "black" : "white",
              }}
            >
              <FaHome style={{ color: "black" }} /> Home
            </li>

            <li
              onClick={() => handleNavigate("/courses")}
              style={{
                color: location.pathname === "/courses" ? "black" : "white",
              }}
            >
              <FaBook style={{ color: "black" }} /> Courses
            </li>

            {/* ADMIN ONLY */}
            {user.role === "admin" && (
              <>
                <li
                  onClick={() => handleNavigate("/studentlist")}
                  style={{
                    color:
                      location.pathname === "/studentlist" ? "black" : "white",
                  }}
                >
                  <FaUserGraduate style={{ color: "black" }} /> All Students
                </li>

                <li
                  onClick={() => handleNavigate("/addcourses")}
                  style={{
                    color:
                      location.pathname === "/addcourses" ? "black" : "white",
                  }}
                >
                  <FaUserGraduate style={{ color: "black" }} /> Add Courses
                </li>
              </>
            )}

            {/* NON-ADMIN ONLY */}
            {user.role !== "admin" && submissionid && (
              <>
                <li
                  onClick={() => handleNavigate(`/feeslips/${user.id}`)}
                  style={{
                    color:
                      location.pathname === `/feeslips/${user.id}`
                        ? "black"
                        : "white",
                  }}
                >
                  <FaCloudUploadAlt style={{ color: "black" }} /> Upload Feeslip
                </li>

                <li
                  onClick={() => handleNavigate(`/usersslip/${user.id}`)}
                  style={{
                    color:
                      location.pathname === `/usersslip/${user.id}`
                        ? "black"
                        : "white",
                  }}
                >
                  <FaEye style={{ color: "black" }} /> My Fee Slip
                </li>

                <li
                  onClick={() => handleNavigate("/profile")}
                  style={{
                    color:
                      location.pathname === "/profile" ? "black" : "white",
                  }}
                >
                  <FaUser style={{ color: "black" }} /> Profile
                </li>

                <li
                  onClick={() => handleNavigate("/myattendance")}
                  style={{
                    color:
                      location.pathname === "/myattendance"
                        ? "black"
                        : "white",
                  }}
                >
                  <FaUserCheck style={{ color: "black" }} /> My Attendance
                </li>

                <li
                  onClick={() => handleNavigate("/userformupdate")}
                  style={{
                    color:
                      location.pathname === "/userformupdate"
                        ? "black"
                        : "white",
                  }}
                >
                  <FaSyncAlt style={{ color: "black" }} /> UserFormupdate
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;