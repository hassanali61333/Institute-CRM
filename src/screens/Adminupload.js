import React, { useState } from "react";
import { useSelector } from "react-redux";
import { uploadFeeslip } from "./services/userService";
import "./Feeslip.css";
import { useEffect } from "react";
import { toast ,Bounce} from "react-toastify";
function Adminupload() {
  const user = useSelector((state) => state.courses.user);
  const [file, setFile] = useState(null);
  const [total, setTotal] = useState("");
  const [received, setReceived] = useState("");
  const [loading, setLoading] = useState(false);


let data = localStorage.getItem("formid");
let savedFormId = data && data !== "undefined" ? JSON.parse(data) : null;
const formid = useSelector(state => state.courses.setformid) ?? savedFormId;


useEffect(() => {
  if (formid) localStorage.setItem("formid", JSON.stringify(formid));
}, [formid]);

  


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }; 

  const handleUpload = async () => {
    if (!user?.id) {
       toast.info("Please login first!", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      return;
    }

    if (!file) {
         toast.info("Please select a file!", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      return;
    }

    if (!total || !received) {
           toast.warning("Please fill Total and Received fields!", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("uid", formid);
    formData.append("image", file);
    formData.append("total", total);
    formData.append("recived", received);

    try {
      const response = await uploadFeeslip(formData);
      console.log(response);
      

      if (response?.data?.status) {
                toast.warning("Feeslip uploaded successfully ✅", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        setFile(null);
        setTotal("");
        setReceived("");
      } else {
                 toast.warning(response?.data?.message || "Upload failed", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error(error);
              toast.warning("Server error! Check console.", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="feeslip-wrapper">
        <div className="feeslip-card">
          <h3 style={{ textAlign: "center", color: "#e53e3e" }}>
            Please login first
          </h3>
        </div>
      </div>
    );
  }

  return (
<>   
    <div className="feeslip-wrapper">
      <div className="feeslip-card">
        <h1>Upload Your Feeslip</h1>
        <p>Please upload a clear image of your feeslip (JPG, PNG, etc.)</p>

        <div className="input-group">
          <label>Total Amount:</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="Enter total amount"
          />
        </div>

        <div className="input-group">
          <label>Total Installment:</label>
          <input
            type="number"
            value={received}
            onChange={(e) => setReceived(e.target.value)}
            placeholder="Total Installment"
          />
        </div>

        <label className={`file-label ${file ? "has-file" : ""}`}>
          {file ? `📄 ${file.name}` : "📎 Choose a file or drag & drop"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? " Uploading..." : "📤 Upload Feeslip"}
        </button>
      </div>
    </div>
    </>
  );
}

export default Adminupload;
