import { useState } from "react";
import { sendNotification } from "./services/userService";
import { addstudent } from "./services/userService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setsubmissionid } from "../store/Coursesslice";
import { toast,Bounce } from "react-toastify";

function Admission() {
const dispatch=useDispatch()

const data = localStorage.getItem("userdata");

const parsedData =
  data && data !== "undefined"
    ? JSON.parse(data)
    : null;

// ✅ id yahan se lo
const newdata = parsedData?.id ?? null;

console.log("LocalStorage ID:", newdata);

const use = useSelector((state) => state.courses.user);

const userid = use?.id ?? newdata;

console.log("Redux User:", use);


     const compressWithCanvas = (file, quality = 0.6) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 1024;
        const scale = Math.min(maxWidth / img.width, 1);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            const compressedFile = new File([blob], file.name, {
              type: "image/jpeg",
            });

            console.log(
              "Original:",
              (file.size / 1024).toFixed(0) + "KB",
              "Compressed:",
              (compressedFile.size / 1024).toFixed(0) + "KB"
            );

            resolve(compressedFile);
          },
          "image/jpeg",
          quality
        );
      };
    };
  });
};


  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("2025-12-16");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cnic, setCnic] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [duration, setDuration] = useState("");
  const [classTime, setClassTime] = useState("");

  const [photo, setPhoto] = useState(null);
  const [cnicFront, setCnicFront] = useState(null);
  const [cnicBack, setCnicBack] = useState(null);
  const [bform, setBform] = useState(null);
  const [loading,setloading]=useState(false)
  


  const courselists= useSelector((state)=> state.courses.coursesdata)



const handleCourseChange = (course) => {
  if (selectedCourses.includes(course)) {
    const updatedCourses = selectedCourses.filter(
      (c) => c !== course
    );
    setSelectedCourses(updatedCourses);
  } else {
    const updatedCourses = [...selectedCourses, course];
    setSelectedCourses(updatedCourses);
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();


const id = use.id ?? null;


  localStorage.setItem("reultform", JSON.stringify(id));



  
const requiredFields = [
  { value: studentName, label: "Student Name" },
  { value: fatherName, label: "Father Name" },
  { value: birthDate, label: "Birth Date" },
  { value: enrollmentDate, label: "Enrollment Date" },
  { value: gender, label: "Gender" },
  { value: nationality, label: "Nationality" },
  { value: phone, label: "Phone Number" },
  { value: cnic, label: "CNIC / B-Form" },
  { value: division, label: "Division" },
  { value: district, label: "District" },
  { value: address, label: "Address" },
  { value: selectedCourses.length, label: "At least one Course" },
  { value: duration, label: "Course Duration" },
  { value: classTime, label: "Class Time" },
];

for (let field of requiredFields) {
  if (!field.value) {
        toast.warning(`Please fill up: ${field.label}`, {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    return;
  }
} 

  if (!photo) {
        toast.warning("Please upload pasport size photos", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    return;
  }


    if (!cnicFront) {
        toast.warning("Please upload cnicfront image", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    return;
  }

      if (!cnicBack) {
        toast.warning("Please upload cnicback image", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    return;
  }


 


  const formData = new FormData();
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
  formData.append("uid", use.id);
  if (photo) formData.append("photo", photo);
  if (cnicFront) formData.append("cnic_front", cnicFront);
  if (cnicBack) formData.append("cnic_back", cnicBack);
  if (bform) formData.append("bayform", bform);
for (let [key, value] of formData.entries()) {
  console.log(key, value);
}


setloading(true)

  try {
    const fromresp = await addstudent(formData);
dispatch(setsubmissionid(use.id));

    console.log(fromresp)
    if (!fromresp.data?.status) {

       toast.warning(fromresp.data?.message || "Form submission failed", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
   dispatch(setsubmissionid(userid));

      return;

    }

 const mess = {
  title: "New Admission",
  message: `${studentName} is added`
};

const notif = await sendNotification(mess);

if (notif.data.status) {
     toast.success("Notification sent", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
}

      toast.success(fromresp.data.message, {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });



  } catch (error) {

     toast.error("Server error — check console", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
    console.log(error)
  }
  finally{
    setloading(false)
  }

};

  console.log(nationality)
  console.log(district)



  const filteredCourses = courselists.filter((course) => 
    course.bgheading.toLowerCase().includes(search.toLowerCase())
  );


  

  const formatCNIC = (value) => {
  const digits = value.replace(/\D/g, "");

  let formatted = digits;

  if (digits.length > 5 && digits.length <= 12) {
    formatted = `${digits.slice(0, 5)}-${digits.slice(5)}`;
  } 
  if (digits.length > 12) {
    formatted = `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  }

  return formatted;
};


const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "");

  let formatted = digits;

  if (digits.length > 4) {
    formatted = `${digits.slice(0, 4)}-${digits.slice(4, 11)}`;
  }

  return formatted;
};
  return (

    <>
    
    <div className="admission-div">

        <h1>Admission Form</h1>
      <form className="student-form" onSubmit={handleSubmit}>

        <h2>👤 Personal Information / ذاتی معلومات</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Student Name /طالب علم کا نام *</label>
            <input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Student Name" />
          </div>
          <div className="form-group">
            <label>Father Name * /والد کا نام</label>
            <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Birth Date * /تاریخ پیدائش</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} placeholder="Birth Date" />
          </div>
          <div className="form-group">
            <label>Enrollment Date *  / داخلہ کی تاریخ</label>
            <input type="date" value={enrollmentDate} onChange={(e) => setEnrollmentDate(e.target.value)} placeholder="Enrollment Date" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender * / جنس</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}  placeholder="Gender">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nationality *  /  قومیت</label>
            <input value={nationality} onChange={(e) => setNationality(e.target.value)}  placeholder="Nationality"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *  /فون نمبر</label>
            <input value={phone}  onChange={(e) => setPhone(formatPhone(e.target.value))}
  placeholder="03XX-XXXXXXX"
  maxLength={12}
/>
          </div>

          <div className="form-group"> <label>CNIC */ شناختی کارڈ / ب فارم نمبر</label> <input value={cnic} onChange={(e) => setCnic(formatCNIC(e.target.value))}   placeholder="12345-1234567-1" maxLength={15} /> </div>

        </div>


          <div className="form-row">
          <div className="form-group">
            <label>Divison */ڈویژن</label>
            <input value={division} onChange={(e) => setDivision(e.target.value)} placeholder="Divison" />
          </div>
          <div className="form-group">
            <label>District * / ضلع </label>
            <input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="District" />
          </div>
        </div>

        <div className="form-group">
          <label>Address /پتہ</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        </div>

        <div className="course-section">
          <h2>📚 Course Selection /  کورس منتخب کریں</h2>

          <input
            className="course-search"
            placeholder="Search course"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="course-list">
            {filteredCourses.map((course, i) => (
              <label key={i} className="course-item">
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
              <label>Course Duration / کورس کا دورانیہ</label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Select</option>
                <option>1 Months</option>
                <option>2 Months</option>
                <option>3 Months</option>

                <option>6 Months</option>
              </select>
            </div>

            <div className="form-group">
              <label>Class Time /کلاس کا وقت</label>
              <select value={classTime} onChange={(e) => setClassTime(e.target.value)}>
                <option value="">Select</option>
                <option>Morning</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
        </div>

        <div className="documents-section">
          <h2>📎📎 Upload Documents  / دستاویزات اپ لوڈ کریں</h2>
         
         
        <div className="documents-section">
  <h2>📎 Upload Documents</h2>

  <div className="doc-input-box">
    <h3>Passport Size Photo / پاسپورٹ سائز تصویر</h3>
<input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    const compressed = await compressWithCanvas(file, 0.6);
    setPhoto(compressed);
  }}
/>

  </div>

  <h2>Option 1: CNIC / شناختی کارڈ</h2>

  <div className="doc-input-box">
    <h3>CNIC Front / شناختی کارڈ سامنے</h3>
<input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    const compressed = await compressWithCanvas(file, 0.6);
    setCnicFront(compressed);
  }}
/>

  </div>

  <div className="doc-input-box">
    <h3>CNIC Back / شناختی کارڈ پچھلا حصہ</h3>
<input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    const compressed = await compressWithCanvas(file, 0.6);
    setCnicBack(compressed);
  }}
/>

  </div>

  <h2>Option 2: B-Form / ب فارم</h2>

  <div className="doc-input-box">
    <div style={{display:'flex',justifyContent:"space-between"
    }}>
    <h3>B-Form / ب فارم</h3>
<h3>Optional</h3>
    </div>
  <input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    const compressed = await compressWithCanvas(file, 0.6);
    setBform(compressed);
  }}
/>

  </div>
</div>
<h2>
📝 Declaration / اعلان</h2> 
<div style={{display:'flex',width:'100%'}}>
  <div>
<p>I hereby declare that I will obey all the rules and regulations of the Institute and will be fully responsible for violating them</p>
<p>میں اس بات کا اقرار کرتا ہوں کہ میں ادارے کے تمام قواعد و ضوابط کی پابندی کروں گا اور کسی خلاف ورزی کی صورت میں مکمل طور پر ذمہ دار ہوں گا۔</p>

  </div>



</div>    
        </div>
        <div className="account-details">
          <h3>🏦 Account Details</h3>
          <p><strong>Bank:</strong> Al Habib Bank</p>
          <p><strong>Account #:</strong> 55130081008270012</p>
          <p><strong>Name:</strong> Future in Technology</p>
          <h5>Easypaisa/JazzCash</h5>
          <p><strong>Account NO:</strong> 0317-6817702</p>
          <p><strong>Name:</strong> : Muhammad Abdull Reham Qureshi</p>


        </div>

     <div className="form-actions">
          <button type="submit"  > {loading ? "waiting...":"🚀 Submit"}</button>
          <button type="reset">🧹 Clear</button>
        </div>
   
      </form>
    </div>
    </>
  );
}

export default Admission;
