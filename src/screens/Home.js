// src/screens/Home.jsx
import { FaBell, FaEnvelope } from "react-icons/fa";
import homelogo from "../images/homelago.png";
import "./Home.css";
import { user, setcourseid } from "../store/Coursesslice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { markedattendece } from "./services/userService";
import app from "../images/appimg.jpg";
import graphic from "../images/graphicimg.jpg";
import webis from "../images/webimg.jpg";
import { toast, Bounce } from "react-toastify";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowgap, setnowgap] = useState(null);
  const [search, setSearch] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);
  const [showData, setShowData] = useState(false);

  const gap = useSelector((state) => state.courses.gap) ?? nowgap;
  const loginuser = useSelector((state) => state.courses.user);
  const submissionid = useSelector((state) => state.courses.submissionid);

  const userdata = localStorage.getItem("userdata");
  const news = userdata ? JSON.parse(userdata) : null;
  const users = loginuser ?? news;

  console.log("gap:", gap);
  console.log("localstorage id:", news?.id);
  console.log("redux id:", loginuser?.id);

  // ---------- EFFECTS (top level) ----------
  useEffect(() => {
    if (!loginuser) {
      const storedUser = localStorage.getItem("userdata");
      if (storedUser && storedUser !== "undefined") {
        dispatch(user(JSON.parse(storedUser)));
      } else {
        navigate("/login");
      }
    }
  }, [loginuser, dispatch, navigate]);

  useEffect(() => {
    const to = localStorage.getItem("attendancedistance");
    setnowgap(to ? JSON.parse(to) : null);
  }, [gap]);

  useEffect(() => {
    const asked = localStorage.getItem("locationAsked");
    if (!asked) {
      toast.info("Please open your location", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      localStorage.setItem("locationAsked", "true");
    }
  }, []);

  // ---------- GATE ----------
  if (!users) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontWeight: 600,
          fontSize: "1.2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  // ---------- PAGES FOR SEARCH ----------
  const pages = [
    { name: "Courses", path: "/courses" },
    { name: "Feeslip", path: `/feeslips/${users.id}` },
    { name: "My feeslip", path: `/usersslip/${users.id}` },
    { name: "Profile", path: "/profile" },
    { name: "My Attendance", path: "/myattendance" },
    { name: "Update Form", path: "/userformupdate" },
    { name: "Admission Form", path: "/admissionfarm" },
  ];

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  // ---------- HANDLERS ----------
  const handleAttendance = async () => {
    if (!loginuser || loginuser.role === "admin")
      return alert("Attendance is not for admin");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        try {
          const res = await markedattendece(loginuser.id, lat, lng);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 3000,
            transition: Bounce,
          });
          setAttendanceData(res.data || []);
          setShowData(true);
        } catch (err) {
          console.error(err);
          toast.error("Error marking attendance. Try again!", {
            position: "top-center",
            autoClose: 3000,
            transition: Bounce,
          });
        }
      },
      (err) => {
        console.error("Location error:", err.message);
        toast.error("Please allow location to mark attendance.", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    );
  };

  const handleLogout = () => {
    dispatch(user(null));
    localStorage.removeItem("userdata");
    localStorage.removeItem("reultform");
    localStorage.removeItem("locationAsked");
    localStorage.removeItem("attendancedistance");
    navigate("/");
  };

  const handecardbtn = () => {
    navigate("/detail");
    dispatch(setcourseid(5));
  };

  const handecardbtn2 = () => {
    navigate("/detail");
    dispatch(setcourseid(2));
  };

  const handecardbtn3 = () => {
    navigate("/detail");
    dispatch(setcourseid(3));
  };

  // ---------- RENDER ----------
  return (
    <div className="home-page">
      {/* 🚫 No <Sidebar /> — it's rendered in App.js */}

      {/* HEADER */}
      <div className="head" style={{ width: "80%", maxWidth: "1000px",}}>
        <div
          className="head-icon"
          style={{ position: "relative",margin:"20px", width: "80%", maxWidth: "200px",height:"25px" }}
        >
          <input
            placeholder="Search screens"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && filteredPages.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000,
                borderRadius: "8px",
              }}
            >
              {filteredPages.map((page, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(page.path);
                    setSearch("");
                  }}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {page.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="attendance-btn">
          {submissionid &&
          loginuser?.role !== "admin" &&
          gap !== null &&
          Number(gap) < 150 ? (
            <button onClick={handleAttendance}>Mark Attendance</button>
          ) : (
            <p>
              {loginuser?.role !== "admin"
                ? submissionid
                  ? "Cannot mark attendance. Distance too far"
                  : "Attendance ❌ register first"
                : "Admin Panel"}
            </p>
          )}
        </div>

        <div className="logout-btn">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Excellence in FIT Computer Institute</h1>
          <p>
            Join Rawalpindi's premier institute for cutting-edge fitness
            technology training. We combine computer science with fitness
            innovation to create industry-ready professionals.
          </p>
          <button className="cta-button" onClick={() => navigate("/courses")}>
            Explore Our Courses
          </button>
        </div>
      </section>

      {/* QUALITY */}
      <section className="quality-section">
        <h2 className="section-title">Why Choose FIT Computer Institute?</h2>
        <div className="quality-grid">
          {[
            {
              t: "Certified Excellence",
              d: "Internationally recognized certifications and partnerships with leading FIT technology organizations.",
            },
            {
              t: "Expert Faculty",
              d: "Learn from industry professionals with years of experience in both FIT and computer technology.",
            },
            {
              t: "Modern Labs",
              d: "State-of-the-art computer labs equipped with the latest fitness tracking and analysis software.",
            },
            {
              t: "Career Focused",
              d: "100% placement assistance with partnerships in fitness tech companies and gym franchises.",
            },
            {
              t: "Industry Partnerships",
              d: "Collaborations with leading fitness brands and technology companies for real-world exposure.",
            },
            {
              t: "Holistic Development",
              d: "Beyond technical skills, we focus on communication, leadership, and entrepreneurial abilities.",
            },
          ].map((c, i) => (
            <div className="quality-card" key={i}>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="courses-section">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-preview">
          <div className="course-card">
            <div className="course-image">
              <img src={app} alt="Fit App" />
            </div>
            <div className="course-info">
              <h3>FIT App Development</h3>
              <p>
                Learn to create mobile applications for fitness tracking,
                workout planning, and health monitoring.
              </p>
              <button className="cta-button" onClick={handecardbtn}>
                Learn More
              </button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image">
              <img src={webis} alt="Fit Web" />
            </div>
            <div className="course-info">
              <h3>FIT Web Development</h3>
              <p>
                Master athlete performance to building data-driven web
                applications with APIs, databases, and interactive dashboards.
              </p>
              <button className="cta-button" onClick={handecardbtn2}>
                Learn More
              </button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image">
              <img src={graphic} alt="Graphic Design" />
            </div>
            <div className="course-info">
              <h3>FIT Graphic Designing</h3>
              <p>
                Focus on colors, typography, icons, and overall aesthetics that
                look good and are easy to use.
              </p>
              <button className="cta-button" onClick={handecardbtn3}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Transform Your Career?</h2>
        <p>
          Join Rawalpindi's leading institute for FIT computer institute and
          become part of the fit technology revolution.
        </p>
        <button className="cta-button" onClick={() => navigate("/courses")}>
          Explore All Courses
        </button>
      </section>
    </div>
  );
}

export default Home;