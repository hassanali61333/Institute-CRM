// src/screens/Userslip.jsx
import React, { useState, useEffect } from "react";
import { getsinglefeeslip } from "./services/userService"; // 👈 adjust path
import "./Usersslip.css";
import { useSelector } from "react-redux";

function Userslip() {
  const reduxUser = useSelector((state) => state.courses.user);

  // Local user state with localStorage fallback
  const [user, setUser] = useState(reduxUser || null);
  const [feeSlip, setFeeSlip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // Reload-safe: check localStorage if Redux empty
  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("userdata");
      if (savedUser && savedUser !== "undefined") {
        setUser(JSON.parse(savedUser));
      }
    } else {
      localStorage.setItem("userdata", JSON.stringify(user));
    }
  }, [user, reduxUser]);

  const userId = user?.id;

  useEffect(() => {
    const fetchSlip = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const res = await getsinglefeeslip(userId);
        console.log(res);

        if (res.data && res.data.length > 0) {
          setFeeSlip(res.data[0]);
        } else {
          setFeeSlip(null);
        }
      } catch (err) {
        console.error("Error fetching fee slip:", err);
        setFeeSlip(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSlip();
  }, [userId]);

  // ❌ OLD BUG: `if (!feeSlip) return <p>No slip</p>` — this was hiding the sidebar
  // ✅ FIX: only show "no slip" inside the page body, sidebar stays visible

  return (
    <div className="userslip-page">
      {/* 🚫 REMOVED <Sidebar /> from here — it lives in App.js now */}

      {loading ? (
        <p className="no-slip">Loading...</p>
      ) : !feeSlip ? (
        <p className="no-slip">No fee slip found</p>
      ) : (
        <div className="userslip-card">
          <h2 className="userslip-title">Your Fee Slip</h2>

          <div className="slip-info">
            <div className="info-box">
              <span>Slip ID</span>
              <p>{feeSlip.id}</p>
            </div>

            <div className="info-box">
              <span>User ID</span>
              <p>{feeSlip.uid}</p>
            </div>

            <div className="info-box">
              <span>Total Amount</span>
              <p className="amount">Rs {feeSlip.total}</p>
            </div>

            <div className="info-box">
              <span>Received Installments</span>
              <p className="received">{feeSlip.recived}</p>
            </div>
          </div>

          {feeSlip.img && feeSlip.img.length > 0 && (
            <div className="uploaded-section">
              <h4>Uploaded Slips</h4>

              <div className="slip-images">
                {feeSlip.img.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={`https://azearn.com/fitapi/${imgUrl}`}
                    alt={`Fee slip ${i + 1}`}
                    onClick={() =>
                      setSelectedImage(`https://azearn.com/fitapi/${imgUrl}`)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {selectedImage && (
            <div
              className="image-modal"
              onClick={() => setSelectedImage(null)}
            >
              <img src={selectedImage} alt="Full View" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Userslip;