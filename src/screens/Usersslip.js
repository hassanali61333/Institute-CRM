import React, { useState, useEffect } from "react";
import { getsinglefeeslip } from "../screens/services/userService";
import "../screens/Usersslip.css";
import { useSelector } from "react-redux";

function Userslip() {

  const reduxUser = useSelector((state) => state.courses.user);
  
  // Local user state with localStorage fallback
  const [user, setUser] = useState(reduxUser || null);

  const [feeSlip, setFeeSlip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Reload-safe: check localStorage if Redux empty
  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("userdata");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } else {
      localStorage.setItem("userdata", JSON.stringify(user));
    }
  }, [user, reduxUser]);

  const userId = user?.id; // ✅ safe access

  useEffect(() => {
    const fetchSlip = async () => {
      if (!userId) return;

      try {
        const res = await getsinglefeeslip(userId);
        console.log(res);

        if (res.data && res.data.length > 0) {
          setFeeSlip(res.data[0]);
        }
      } catch (err) {
        console.error("Error fetching fee slip:", err);
      }
    };

    fetchSlip();
  }, [userId]);

  if (!feeSlip) return <p className="no-slip">No fee slip found</p>;

  return (
    <>
      <div className="userslip-page">
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
      </div>
    </>
  );
}

export default Userslip;
