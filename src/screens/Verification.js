import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createUser, gernerateotp } from "./services/userService";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaCheckCircle, FaRedo } from "react-icons/fa";

function Verification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);

  const nowotp = useSelector((state) => state.courses.otp);
  const firstdata = useSelector((state) => state.courses.signupdata);

  useEffect(() => {
    if (!firstdata?.email) {
      navigate("/signup");
    }
  }, [firstdata?.email, navigate]);

  useEffect(() => {
    if (resendTimer > 0 && !canResend) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
  }, [resendTimer, canResend]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!code.trim()) {
      toast.error("Please enter OTP!", { position: "top-center", autoClose: 3000 });
      setIsLoading(false);
      return;
    }

    if (code?.toString() !== nowotp.otp.toString()) {
      toast.error("Invalid OTP!", { position: "top-center", autoClose: 3000 });
      setIsLoading(false);
      return;
    }

    try {
      let data = {
        "email": firstdata.email,
        "password": firstdata.password,
      }

      let apiresponse = await createUser(data);

      if (apiresponse && apiresponse.status) {
        toast.success("Signup successful! Please login.", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        navigate('/');
      } else {
        setError(apiresponse?.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!canResend) return;

    try {
      const res = await gernerateotp(firstdata.email);
      if (res.status) {
        toast.success("OTP sent successfully to your email", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        setCanResend(false);
        setResendTimer(59);
      } else {
        toast.error("Failed to send OTP", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Error sending OTP", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      console.log(error);
    }
  }

  return (
    <div className="verify-container">
      <div className="verify-card">
        {/* Header */}
        <div className="verify-header">
          <h1>Verify Your Email</h1>
          <p>Enter the 4-digit code sent to your email</p>
        </div>

        {/* Email Info */}
        <div className="email-info">
          <FaEnvelope className="email-icon" style={{color:"#000000"}} />
          <div>
            <p className="email-label">Code sent to:</p>
            <p className="email-address">{firstdata?.email || "user@example.com"}</p>
          </div>
        </div>

        {/* OTP Input */}
        <div className="otp-wrapper">
          <div className="otp-label">
            <FaLock className="lock-icon"  style={{color:"#000000"}} />
            <span  style={{color:"#000000"}}>Enter verification code</span>
          </div>

          <div className="otp-inputs">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className={`otp-box ${code[index] ? "filled" : ""} ${index === code.length ? "active" : ""}`}
                onClick={() => document.querySelector(".otp-hidden-input")?.focus()}
              >
                {code[index] || ""}
              </div>
            ))}
            <input
              type="text"
              className="otp-hidden-input"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
              maxLength="4"
              autoFocus
            />
          </div>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Timer */}
        <div className="timer">
          <span>Code expires in: </span>
          <span className="timer-count">{resendTimer}s</span>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button
            className={`verify-btn ${isLoading ? "loading" : ""} ${code.length === 4 ? "active" : ""}`}
            onClick={handleSubmit}
            disabled={isLoading || code.length !== 4}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Verifying...
              </>
            ) : (
              <>
                <FaCheckCircle />
                Verify Account
              </>
            )}
          </button>

          <button
            className={`resend-btn ${!canResend ? "disabled" : ""}`}
            onClick={handleSignup}
            disabled={!canResend}
          >
            <FaRedo />
            {canResend ? "Resend Code" : `Resend in ${resendTimer}s`}
          </button>

          <button className="back-link" onClick={() => navigate("/signup")}>
            ← Back to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verification;