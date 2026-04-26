import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updateStudent, getuser } from "./services/userService";
import "./Updateform.css";
import { toast,Bounce } from "react-toastify";
function Userformupdate() {

  const data = localStorage.getItem("userdata")
  const newdata=(JSON.parse(data))
  const reduxid = useSelector((state) => state.courses.user)
  const userID = reduxid?.id?? newdata.id;
  const courselists = useSelector((state) => state.courses.coursesdata);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cnic, setCnic] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [duration, setDuration] = useState("");
  const [classTime, setClassTime] = useState("");

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [cnicFront, setCnicFront] = useState(null);
  const [cnicFrontPreview, setCnicFrontPreview] = useState("");
  const [cnicBack, setCnicBack] = useState(null);
  const [cnicBackPreview, setCnicBackPreview] = useState("");
  const [bform, setBform] = useState(null);
  const [bformPreview, setBformPreview] = useState("");
  const [declaration, setDeclaration] = useState(false);





  useEffect(() => {
    const fetchStudent = async () => {
      if (!userID) {
        setError("Please login first");
        setLoading(false);
        return;
      }

      try {
        const res = await getuser(userID);

        if (!res.data?.data) {
          setError("Student not found");
          setLoading(false);
          return;
        }

        const data = res.data.data.find(
          (stu) => String(stu.uid) === String(userID)
        );

        if (!data) {
          setError("Your student record was not found");
          setLoading(false);
          return;
        }

        // 🔴 SAVE STUDENT ID
        setStudentId(data.id);

        setStudentName(data.name || "");
        setFatherName(data.father_name || "");
        setBirthDate(data.birthdate || "");
        setEnrollmentDate(data.enrollment || "");
        setGender(data.gender || "");
        setDivision(data.division || "");
        setDistrict(data.district || "");
        setNationality(data.nationality || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
        setCnic(data.cnic || "");
        setSelectedCourses(data.course ? data.course.split(",") : []);
        setDuration(data.duration || "");
        setClassTime(data.classtime || "");

        setPhotoPreview(data.photo ? `https://azearn.com/fitapi/uploads/${data.photo}` : "");
        setCnicFrontPreview(data.cnic_front ? `https://azearn.com/fitapi/uploads/${data.cnic_front}` : "");
        setCnicBackPreview(data.cnic_back ? `https://azearn.com/fitapi/uploads/${data.cnic_back}` : "");
        setBformPreview(data.bayform ? `https://azearn.com/fitapi/uploads/${data.bayform}` : "");

        setDeclaration(true);
      } catch (err) {
        console.error(err);
        setError("Failed to load your info");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [userID]);

  // ================= UPDATE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentId) {
             toast.warning("Student ID missing", {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
      return;
    }



    const formData = new FormData();

    // 🔴 REQUIRED BY BACKEND
    formData.append("id", studentId);
    formData.append("uid", userID);

    formData.append("name", studentName);
    formData.append("father_name", fatherName);
    formData.append("birthdate", birthDate);
    formData.append("enrollment", enrollmentDate);
    formData.append("gender", gender);
    formData.append("division", division);
    formData.append("district", district);
    formData.append("nationality", nationality);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("cnic", cnic);
    formData.append("course", selectedCourses.join(","));
    formData.append("duration", duration);
    formData.append("classtime", classTime);

    if (photo) formData.append("photo", photo);
    if (cnicFront) formData.append("cnic_front", cnicFront);
    if (cnicBack) formData.append("cnic_back", cnicBack);
    if (bform) formData.append("bayform", bform);

    try {
      const res = await updateStudent(formData);
      console.log(res.data);

      if (!res.data.status) {
               toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
        return;
      }

             toast.success("Updated Successfully ✅", {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
    } catch (err) {
      console.error(err);
             toast.error("Server Error", {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
    }
  };

  const handleCourseChange = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="admission-div">
      <h1>Update Your Info</h1>
      <form className="student-form" onSubmit={handleSubmit}>

        <h2>👤 Personal Information</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Student Name *</label>
            <input value={studentName} onChange={(e) => setStudentName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Father Name *</label>
            <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Birth Date *</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Enrollment Date *</label>
            <input type="date" value={enrollmentDate} onChange={(e) => setEnrollmentDate(e.target.value)} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender *</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nationality *</label>
            <input value={nationality} onChange={(e) => setNationality(e.target.value)} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label>CNIC / B-Form *</label>
            <input value={cnic} onChange={(e) => setCnic(e.target.value)} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Division *</label>
            <input value={division} onChange={(e) => setDivision(e.target.value)} />
          </div>
          <div className="form-group">
            <label>District *</label>
            <input value={district} onChange={(e) => setDistrict(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        {/* Courses */}
        <div className="course-section">
          <h2>📚 Course Selection</h2>
          <div className="course-list">
            {courselists.map((course) => (
              <label key={course.id} className="course-item">
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course.bgheading)}
                  onChange={() => handleCourseChange(course.bgheading)}
                />
                <span>{course.bgheading}</span>
              </label>
            ))}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Course Duration</label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Select</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Class Time</label>
              <select value={classTime} onChange={(e) => setClassTime(e.target.value)}>
                <option value="">Select</option>
                <option>Morning</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
        </div>

        {/* Document Uploads */}
        <div className="documents-section">
          <h2>📎 Upload Documents</h2>

        <div className="doc-input-box">
  <h3>Passport Photo</h3>

  {photoPreview && (
    <img src={photoPreview} alt="photo" width={100} />
  )}

  <input
    type="file"
    onChange={(e) => {
      setPhoto(e.target.files[0]);
      setPhotoPreview(URL.createObjectURL(e.target.files[0]));
    }}
  />
</div>


       <div className="doc-input-box">
  <h3>CNIC Front</h3>

  {cnicFrontPreview && (
    <img src={cnicFrontPreview} alt="cnic_front" width={100} />
  )}

  <input
    type="file"
    onChange={(e) => {
      setCnicFront(e.target.files[0]);
      setCnicFrontPreview(URL.createObjectURL(e.target.files[0]));
    }}
  />
</div>


          <div className="doc-input-box">
            <h3>CNIC Back</h3>
            {cnicBackPreview && <img src={cnicBackPreview} alt="cnic_back" width={100} />}
            <input type="file" onChange={(e) => { setCnicBack(e.target.files[0]); setCnicBackPreview(URL.createObjectURL(e.target.files[0])); }} />
          </div>

          <div className="doc-input-box">
            <h3>B-Form</h3>
            {bformPreview && <img src={bformPreview} alt="bform" width={100} />}
            <input type="file" onChange={(e) => { setBform(e.target.files[0]); setBformPreview(URL.createObjectURL(e.target.files[0])); }} />
          </div>
        </div>

    

        <div className="form-actions">
          <button type="submit">Update Info</button>
        </div>
      </form>
    </div>
  );
}

export default Userformupdate;
