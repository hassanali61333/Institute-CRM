import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../screens/Showattendance.css";
import { useSelector } from "react-redux";
import { getaattendance } from "../screens/services/userService";
import { json } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Myattendance() {
  const [attendance, setAttendance] = useState([]);
  const [filteredAttendance, setFilteredAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
   
let id= localStorage.getItem("reultform")

const newid=id? JSON.parse(id): null;
console.log(newid)

  const helo = useSelector((state) => state.courses.user);
const user = helo?.id ?? newid;


const att=localStorage.getItem("reultform")
const newatt=JSON.parse(att)
console.log(newatt)

 const attendanceid=useSelector((state)=> state.courses.submissionid) ?? newid;
console.log(attendanceid);






  useEffect(() => {
    if (!user) return;

    const fetchAttendance = async () => {
      setLoading(true);
      try {
        const resp = await getaattendance(attendanceid);
        console.log(resp);
        
        if (resp?.status) {
          setAttendance(resp.data);
          setFilteredAttendance(resp.data); 
        }
      } catch (err) {
        console.error("Error fetching attendance:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [user,attendanceid]);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      return;
    }

    if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  useEffect(() => {
    if (!startDate || !endDate) return;

    const filtered = attendance.filter((item) => {
      const itemDate = new Date(item.created_at);
      itemDate.setHours(0, 0, 0, 0);

      const start = new Date(startDate);
      const end = new Date(endDate);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);

      return itemDate >= start && itemDate <= end;
    });

    setFilteredAttendance(filtered);
  }, [startDate, endDate, attendance]);

  const resetFilter = () => {
    setStartDate(null);
    setEndDate(null);
    setFilteredAttendance(attendance);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="attendance-container">
        <Sidebar/>
        <div className="attendance-header">
          <h1>Attendance Records</h1>
          <p>Loading your attendance data...</p>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (filteredAttendance.length === 0) {
    return (
      <div className="attendance-container">
        <div className="attendance-header">
          <h1>Attendance Records</h1>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button className="calendar-btn" onClick={() => setShowCalendar(!showCalendar)}>
            Attendance by date
            </button>

            {(startDate || endDate) && (
              <button className="calendar-btn" onClick={resetFilter}  style={{padding:'5px',borderRadius:'5px',background:'black'}} >
                ❌ Clear
              </button>
            )}
          </div>
        </div>

        {showCalendar && (
          <Calendar onClickDay={handleDateClick} />
        )}

        <div className="no-attendance">
          <div className="no-attendance-icon">📊</div>
          <h3>No Attendance Records Found</h3>
        </div>
      </div>
    );
  }

 
  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h1>Attendance Records</h1>
        <p>Total Records: {filteredAttendance.length}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button className="calendar-btn" onClick={() => setShowCalendar(!showCalendar)}>
            📅 Filter by Date
          </button>

          {(startDate || endDate) && (
            <button className="calendar-btn" onClick={resetFilter}>
              ❌ Clear
            </button>
          )}
        </div>

        {startDate && endDate && (
          <p style={{ marginTop: "10px" }}>
            Showing attendance from{" "}
            <strong>{formatDate(startDate)}</strong> to{" "}
            <strong>{formatDate(endDate)}</strong>
          </p>
        )}
      </div>

      {showCalendar && (
        <div style={{ marginBottom: "20px" }}>
          <Calendar onClickDay={handleDateClick} />
        </div>
      )}

      <div className="attendance-grid">
        {filteredAttendance.map((item, index) => (
          <div className="attendance-card" key={index}>
            <div className="card-header">
              <h3>Record #{index + 1}</h3>
              <div className="attendance-date">
                {formatDate(item.created_at)}
              </div>
            </div>

            <div className="card-body">
              <div className="info-row">
                <span className="info-label">Attendance ID</span>
                <span className="info-value">{item.id}</span>
              </div>

              <div className="info-row">
                <span className="info-label">User ID</span>
                <span className="info-value">{item.uid}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Day</span>
                <span className="info-value">{item.day}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Time</span>
                <span className="info-value">
                  {item.time || formatTime(item.created_at)}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">Location</span>
                <span className="info-value">
                  📍 {item.lat}, {item.lng}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myattendance;
