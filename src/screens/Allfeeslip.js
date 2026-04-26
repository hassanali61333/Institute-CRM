import React, { useState, useEffect } from "react";
import { getsinglefeeslip, deleteslip } from "../screens/services/userService";
import "../screens/Usersslip.css";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

function AllFeeSlips() {
  // Get formid from Redux or localStorage
  const data = localStorage.getItem("formid");
  const savedFormId = data && data !== "undefined" ? JSON.parse(data) : null;
  const formid = useSelector((state) => state.courses.formid) ?? savedFormId;

  const [feeSlip, setFeeSlip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlip = async () => {
      if (!formid) {
        setFeeSlip(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await getsinglefeeslip(formid);

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
  }, [formid]);

  // 🔥 Delete slip function
  const delslip = async () => {
    if (!feeSlip) return;

  

    setLoading(true);
    try {
      const resp = await deleteslip(feeSlip.id);

      if (resp.data.status) {
        alert("Deleted successfully ✅");
        toast.success("Deleted successfully ✅",{
          position:"top-center",
          autoClose:3000,
          transition:Bounce
        })
        setFeeSlip(null);           
        localStorage.removeItem("formid"); 
      } else {
        alert(resp.data.message || "Error deleting slip ❌");
        toast.warning(resp.data.message || "Error deleting slip ❌",{
          position:'top-center',
          autoClose:3000,
          transition:Bounce

        })
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌ Check console");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="no-slip">Waiting for slip...</p>;
  if (!feeSlip) return <p className="no-slip">No fee slip found</p>;

  return (
    <div className="userslip-page">
      <div className="userslip-card">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={delslip}> 🗑️</button>
        </div>

        <h2 className="userslip-title">Your Fee Slip</h2>

        <div className="slip-info">
          <div className="info-box">
            <span>Slip ID</span>
            <p>{feeSlip?.id ?? "-"}</p>
          </div>
          <div className="info-box">
            <span>User ID</span>
            <p>{feeSlip?.uid ?? "-"}</p>
          </div>
          <div className="info-box">
            <span>Total Amount</span>
            <p className="amount">Rs {feeSlip?.total ?? "-"}</p>
          </div>
          <div className="info-box">
            <span>Received Installments</span>
            <p className="received">{feeSlip?.recived ?? "-"}</p>
          </div>
        </div>

        {feeSlip.img?.length > 0 && (
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
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full View" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllFeeSlips;
