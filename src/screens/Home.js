import { FaBell, FaEnvelope } from "react-icons/fa";
import homelogo from "../images/homelago.png";
import "./Home.css";
import { user } from "../store/Coursesslice";
import { setcourseid } from "../store/Coursesslice";
import { Component, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { markedattendece } from "../screens/services/userService";
import app from "../images/appimg.jpg";
import graphic from "../images/graphicimg.jpg";
import webis from "../images/webimg.jpg";
import { toast,Bounce } from "react-toastify";
import Feeslip from "./Feeslip";
function Home() {
const [nowgap,setnowgap]=useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gap = useSelector((state) => state.courses.gap) ?? nowgap;
console.log(gap);



const userdata=localStorage.getItem("userdata")
const news=userdata? JSON.parse(userdata): null;
 const loginuser = useSelector((state) => state.courses.user) ;
const users= loginuser ?? news;
  const submissionid = useSelector((state) => state.courses.submissionid);
console.log("loaclstorage id", news?.id)
console.log("redux id", loginuser?.id)


  const [search, setSearch] = useState("");

  // 🔥 Yahan sari routes ka data rakho
  const pages = [
    { name: "Courses", path: "/courses" },
    { name: "Feeslip", path: `/feeslips/${users.id}` },
    { name: "My feeslip", path: `/usersslip/${users.id}` },


    { name: "Profile", path: "/profile" },
    { name: "My Attendance", path: "/myattendance" },
    { name: "Update Form", path: "/userformupdate" },
    { name: "Admission Form", path: "/admissionfarm" },


  ];

  // 🔎 Filter logic
  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );


 

useEffect(()=>{
  const to=localStorage.getItem("attendancedistance")
 setnowgap(to ? JSON.parse(to) : null)
},[gap])

console.log(nowgap)

  const [attendanceData, setAttendanceData] = useState([]);
  const [showData, setShowData] = useState(false);

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
    const asked = localStorage.getItem("locationAsked");
    if (!asked) {
      toast.info("Plaese open your location", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      localStorage.setItem("locationAsked", "true");
    }
  }, []);

  // Attendance marking
  const handleAttendance = async () => {
    if (!loginuser || loginuser.role === "admin") return alert("Attendance is not for admin");

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
          console.log("Full response:", res);
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

  // Logout
  const handleLogout = () => {
    dispatch(user(null));
    localStorage.removeItem("userdata");
    localStorage.removeItem("reultform");
    localStorage.removeItem("locationAsked");
    localStorage.removeItem("attendancedistance")
    navigate("/");
  };

  // Attendance button condition
  const canMarkAttendance = gap !== null && !isNaN(Number(gap)) && Number(gap) < 150;


    const handecardbtn =()=>{
      navigate("/detail")
      dispatch(setcourseid(5))
    }

    
     const handecardbtn2 =()=>{
      navigate("/detail")
      dispatch(setcourseid(2))
    }

     const handecardbtn3 =()=>{
      navigate("/detail")
      dispatch(setcourseid(3))
    }


    
  return (
    <>
    
      <div className="home-page">
        {/* Header */}
        <div className="head">
        
         <div className="head-icon" style={{ position: "relative", width: "250px" }}>
  <input
    placeholder="search screens"
    onChange={(e) => setSearch(e.target.value)}
    style={{ width: "100%", padding: "8px" }}
  />

  {search && filteredPages.length > 0 && (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "absolute", // float below input
        top: "100%",          // right under input
        left: 0,
        width: "100%",        // same width as input
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        maxHeight: "200px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      {filteredPages.map((page, index) => (
        <li
          key={index}
          onClick={() => navigate(page.path)}
          style={{
            cursor: "pointer",
            padding: "8px",
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
              { submissionid &&
          loginuser?.role !== "admin" &&
          gap !== null &&
          Number(gap) < 150 ? (
            <button onClick={handleAttendance}>Mark Attendance</button>
          ) : (
            <p style={{ color: "black" }}>
              {loginuser?.role !== "admin"
                ? submissionid ? `Cannot mark attendance. Distance too far`: "Attendance ❌ register first"
                : "Admin Panel"}
            </p>
          )}
          </div>
  <div className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
         
        </div>



        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <h1>Excellence in FIT Computer Institute</h1>
            <p>
              Join Rawalpindi's premier institute for cutting-edge fitness
              technology training. We combine computer science with fitness
              innovation to create industry-ready professionals.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/courses")}
            >
              Explore Our Courses
            </button>
          </div>
        </section>

        {/* Quality Section */}
        <section className="quality-section container">
          <h2 className="section-title">Why Choose FIT Computer Institute?</h2>
          <div className="quality-grid">
            <div className="quality-card">
              <h3>Certified Excellence</h3>
              <p>
                Internationally recognized certifications and partnerships with
                leading FIT technology organizations.
              </p>
            </div>
            <div className="quality-card">
              <h3>Expert Faculty</h3>
              <p>
                Learn from industry professionals with years of experience in
                both FIT and computer technology.
              </p>
            </div>
            <div className="quality-card">
              <h3>Modern Labs</h3>
              <p>
                State-of-the-art computer labs equipped with the latest fitness
                tracking and analysis software.
              </p>
            </div>
            <div className="quality-card">
              <h3>Career Focused</h3>
              <p>
                100% placement assistance with partnerships in fitness tech
                companies and gym franchises.
              </p>
            </div>
            <div className="quality-card">
              <h3>Industry Partnerships</h3>
              <p>
                Collaborations with leading fitness brands and technology
                companies for real-world exposure.
              </p>
            </div>
            <div className="quality-card">
              <h3>Holistic Development</h3>
              <p>
                Beyond technical skills, we focus on communication, leadership,
                and entrepreneurial abilities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="courses-section container">
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
                <button
                  className="cta-button"
                  onClick={handecardbtn}
                >
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
                <button
                  className="cta-button"
                                   onClick={handecardbtn2}

                >
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
                  Focus on colors, typography, icons, and overall aesthetics
                  that look good and are easy to use.
                </p>
                <button
                  className="cta-button"
                  onClick={handecardbtn3}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section container">
          <h2>Ready to Transform Your Career?</h2>
          <p>
            Join Rawalpindi's leading institute for fit computer institute and
            become part of the fit technology revolution.
          </p>
          <button className="cta-button" onClick={() => navigate("/courses")}>
            Explore All Courses
          </button>
        </section>
      </div>
    </>
  );
}

export default Home;
