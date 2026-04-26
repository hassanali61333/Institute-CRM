import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getuser } from "./services/userService";
import "./Profile.css";

function Profile() {
   const reduxUser = useSelector((state) => state.courses.user);
  const [user, setUser] = useState(reduxUser || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState({
    studentName: "",
    fatherName: "",
    enrollmentDate: "",
    nationality: "",
    phone: "",
    address: "",
    cnic: "",
    duration: "",
    email: "",
    studentId: "",
    courseName: "",
    dob: "",
    gender: "",
    photo: "",
    course:""
  });

  const [photoPreview, setPhotoPreview] = useState("");

  // Reload-safe: get user from localStorage if Redux is empty
  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("userdata");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setError("User not logged in");
        setLoading(false);
      }
    } else {
      // Save Redux user to localStorage
      localStorage.setItem("userdata", JSON.stringify(user));
    }
  }, [user, reduxUser]);

  // Fetch student profile
  useEffect(() => {
    // ✅ safe check
    if (!user) return;

    const fetchStudent = async () => {
      try {
        const res = await getuser();
        console.log(res)
        const student = res?.data?.data?.find(
          (stu) => String(stu.uid) === String(user.id)
        );

        if (!student) {
          setError("Student not found");
          setLoading(false);
          return;
        }

        setProfile({
          studentName: student.name || "",
          fatherName: student.father_name || "",
          enrollmentDate: student.enrollment || "",
          nationality: student.nationality || "",
          phone: student.phone || "",
          address: student.address || "",
          cnic: student.cnic || "",
          duration: student.duration || "",
          email: student.email || user.email || "",
          studentId: student.id || user.id || "",
          courseName: student.course || "Not specified",
          dob: student.birthdate || "Not specified",
          gender: student.gender || "Not specified"
        });

        setPhotoPreview(student.photo
          ? `https://azearn.com/fitapi/uploads/${student.photo}`
          : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        );

      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [user]);  // ✅ dependency: user, not user.id

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
    console.log("New photo selected:", file);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>{error}</div>;
  

  return (
    <>
      
      <div className="profile-container">
        <div className="profile-header">
          <h1>Student Profile</h1>
        </div>

        <div className="profile-content">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-card-header">
              <div className="profile-picture-section">
                <div className="profile-picture-wrapper">
                  <img
                    src={photoPreview}
                    alt="Profile"
                    className="profile-picture"
                  />
                  <div className="profile-picture-overlay">
                    <label htmlFor="photo-upload" className="upload-label">
                      <span className="upload-icon">📷</span>
                      <span>Change Photo</span>
                    </label>
                  </div>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    hidden
                  />
                </div>
                <div className="profile-basic-info">
                  <h2 className="profile-name">Name : {profile.studentName}</h2>
                  <p className="profile-course">Course :{profile.courseName}</p>
                </div>
              </div>
            </div>

            <div className="profile-details">
              <div className="details-grid">
                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">👨‍🎓</span>
                    Student Name
                  </div>
                  <div className="detail-value">{profile.studentName}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">👨‍👦</span>
                    Father's Name
                  </div>
                  <div className="detail-value">{profile.fatherName}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">📅</span>
                    Enrollment Date
                  </div>
                  <div className="detail-value">{formatDate(profile.enrollmentDate)}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">📍</span>
                    Nationality
                  </div>
                  <div className="detail-value">{profile.nationality}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">📱</span>
                    Phone Number
                  </div>
                  <div className="detail-value">{profile.phone}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">🆔</span>
                    CNIC / B-Form
                  </div>
                  <div className="detail-value">{profile.cnic}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">📧</span>
                    Email Address
                  </div>
                  <div className="detail-value">{profile.email}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">🎓</span>
                    Course Duration
                  </div>
                  <div className="detail-value">{profile.duration}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">🎂</span>
                    Date of Birth
                  </div>
                  <div className="detail-value">{profile.dob}</div>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <span className="detail-icon">⚧️</span>
                    Gender
                  </div>
                  <div className="detail-value">{profile.gender}</div>
                </div>
              </div>

              <div className="address-section">
                <div className="detail-label">
                  <span className="detail-icon">🏠</span>
                  Address
                </div>
                <div className="address-value">
                  {profile.address}
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
}

export default Profile;