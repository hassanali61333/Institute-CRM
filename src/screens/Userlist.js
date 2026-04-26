import { useEffect, useState } from "react";
import { getuser, delstudent } from "./services/userService";
import "./Userlist.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setsubmissionid ,setformid} from "../store/Coursesslice"
import { toast,Bounce } from "react-toastify";
function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [fullImage, setFullImage] = useState(null); 
  const [loading,setloading]=useState(false)
  const navigate=useNavigate()
const dispatch=useDispatch()

   
  useEffect(() => {
    const fetchStudents = async () => {
      setloading(true)
      try {
        const res = await getuser();
      
        
        if (res.data.data.length > 0) {
          setStudents(res.data.data || []);
          
        }
        // console.log(res)
      } catch (err) {
        console.error(err);
      }
      finally{
        setloading(false)
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      const res = await delstudent(id);
      if (res.data.status) {
        setStudents(prev => prev.filter(stu => stu.id !== id));
            toast.error(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
      } else {
            toast.error(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
      }
    } catch (error) {
      console.error(error);
          toast.error("Delete failed", {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Bounce,
                  });
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredStudents)
  const handleupdate=(student)=>{
    setSelectedStudent(student)
    dispatch(setformid(student.uid))
  }


  const handleformbtn =(id)=>{

      dispatch(setformid(id));
    
 localStorage.setItem("formid", JSON.stringify(id));

    navigate("/update-student")
  }


  const handleslipbtn=(id)=>{
    navigate("/allfeeslips")
    dispatch(setformid(id))

  }

  const uploadslipbbtn=(id)=>{
    navigate("/adminupload")
    dispatch(setformid(id))

  }

  const  handleattendance =(id)=>{

  dispatch(setformid(id));
 localStorage.setItem("formid", JSON.stringify(id));

  navigate("/showattendance");
    
  }

  return (
    <>
      <div className="student-container">
        <h2>All Students</h2>

        <div className="search-input">
          <input
            placeholder="Search student by name or course"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
{
loading? (
  <div> <h2>waiting for students.........</h2> </div>
):
        <div className="student-grid">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div
                key={student.id}
                className="student-box"
                onClick={() => handleupdate(student)}
              >
                <span
                  className="delete-icon"
                  onClick={(e) => handleDelete(student.id, e)}
                >
                  🗑️
                </span>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>{
                  console.log(student.course)
                }
              </div>
            ))
          ) : (
            <p>No students found please wait</p>
          )}
        </div>
}


        {/* Student Details Modal */}
        {selectedStudent && (
          <div className="modal-overlay" onClick={() => setSelectedStudent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
<button onClick={() => handleformbtn(selectedStudent.uid)} style={{padding:'5px 20px',background:'green',marginLeft:'5px',borderRadius:'5px'}} >
  Edit
</button>
<button onClick={()=>handleattendance(selectedStudent.uid)}  style={{padding:'5px 20px',background:'brown',marginLeft:'5px',borderRadius:'5px',color:'white'}} >Attendance</button>

<button  className="slipbtn" onClick={()=> handleslipbtn(selectedStudent.uid)}>feeslip</button>
<button  className="uploadbtn" onClick={()=> uploadslipbbtn(selectedStudent.uid)}>uplaod slip</button>

              <button className="close-btn" onClick={() => setSelectedStudent(null)}>X</button>

              <h4><strong>Student Name:</strong> {selectedStudent.name}</h4>
              <p><strong>Father Name:</strong> {selectedStudent.father_name}</p>
              <p><strong>Birthdate:</strong> {selectedStudent.birthdate}</p>
              <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              <p><strong>Address:</strong> {selectedStudent.address}</p>
              <p><strong>Course:</strong> {selectedStudent.course}</p>
              <p><strong>Duration:</strong> {selectedStudent.duration}</p>
              <p><strong>Class Time:</strong> {selectedStudent.classtime}</p>
                      <h4>Document Images</h4>

              <div style={{ display: "flex",  gap: "20px" }}>
                   {selectedStudent.photo && (
                    <img
                      src={`https://azearn.com/fitapi/uploads/${selectedStudent.photo}`}
                      style={{ width: 100, height: 100, cursor: "pointer" }}
                      onClick={() => setFullImage(`https://azearn.com/fitapi/uploads/${selectedStudent.photo}`)}
                      alt="photo"
                    />
                  )} 
                  {selectedStudent.bayform && (
                    <img
                      src={`https://azearn.com/fitapi/uploads/${selectedStudent.bayform}`}
                      style={{ width: 100, height: 100, cursor: "pointer" }}
                      onClick={() => setFullImage(`https://azearn.com/fitapi/uploads/${selectedStudent.bayform}`)}
                      alt="bayform"
                    />
                  )}
                  {selectedStudent.cnic_back && (
                    <img
                      src={`https://azearn.com/fitapi/uploads/${selectedStudent.cnic_back}`}
                      style={{ width: 100, height: 100, cursor: "pointer" }}
                      onClick={() => setFullImage(`https://azearn.com/fitapi/uploads/${selectedStudent.cnic_back}`)}
                      alt="cnic_back"
                    />
                  )}
                  {selectedStudent.cnic_front && (
                    <img
                      src={`https://azearn.com/fitapi/uploads/${selectedStudent.cnic_front}`}
                      style={{ width: 100, height: 100, cursor: "pointer" }}
                      onClick={() => setFullImage(`https://azearn.com/fitapi/uploads/${selectedStudent.cnic_front}`)}
                      alt="cnic_front"
                    />
                  )}
                </div>
            </div>
          </div>
        )}

        {/* Full-size Image Modal */}
        {fullImage && (
          <div
            className="full-image-modal"
            onClick={() => setFullImage(null)}
          >
            <img src={fullImage} alt="Full Size" />
          </div>
        )}
      </div>
    </>
  );
}

export default StudentList;
