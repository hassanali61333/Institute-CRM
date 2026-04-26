import { useState } from 'react';
import Boxes from '../components/Boxes.js';
import '../screens/Courses.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setcourseid,adduser} from "../store/Coursesslice.js"
import { coursesapi } from './services/userService.js';
import { delcourse } from './services/userService.js';
import { useEffect } from "react";
import { original } from '@reduxjs/toolkit';

function Courses() {
    const dispatch =useDispatch()
    const navigate = useNavigate();

    const [courses,setcourses]=useState([])


const loginuser = useSelector((state) => state.courses.user);


// useEffect(() => {
//     const userdata = localStorage.getItem("userdata");

//     if (!loginuser && !userdata) {
//         navigate("/login");
//     } else if (!loginuser && userdata) {
//         const data = JSON.parse(userdata);
//         dispatch(adduser(data));
//         if (window.location.pathname === "/courses") {
//                 navigate("/courses");
//         } 
//     }
// }, [loginuser, dispatch, navigate]);

const cours= async()=>{
    try{
const response = await  coursesapi()

    if(response.status)
    {

        setcourses(response.data.data)
        console.log(response.data.data);
        
        console.log(courses);

        
    }
}
catch (error) {
    console.log(error);
    
}
}


useEffect(()=>{
    cours()
},[])





    const [searchTerm, setSearchTerm] = useState('');

const filteredCourses = courses.filter(course => 

    (course.category || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(course.discountFee || "").includes(searchTerm)
  
);


    console.log("Image path:", courses.image);

    const handledetailbtn= (id)=>{
navigate("/detail")
dispatch(setcourseid(id))
localStorage.setItem("setcourseid",JSON.stringify(id))
    }

    const handledelcourse =async(id)=>{
        try{
            const respons = await  delcourse(id)
if(respons.status)
{
    window.confirm("Are you sure to deleted this course")

}
        }
        catch (error){
            console.log("error",error);
            
        }
    }


    return (
        <>
           
            <div className='courses-div'>
                <div className='courses'>
                    <h1>
                        Our <span style={{ color: 'linear-gradient(135deg, #ff7b25 0%, #e5692c 100%)' }}>Courses</span>
                    </h1>

                    {/* Search Input */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search courses with name & price "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                   

                    <div className='box-wrap'>
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <div key={course.id} className="box-container">
                                    {
                                        loginuser.role == "admin" &&
                                         <div className='delbtn'>
<button className='delcourse' onClick={()=>handledelcourse(course.id)} >  🗑️</button>
                    </div>
                                    }
                                    <Boxes   src={`https://futureittechnology.com/${course.image}`} heading={course.title} text={course.technologies.map((item,index)=>
<li key={index}>{item}</li>
                                    )} />
   



                                    <div className="hover-buttons">
                                        <div style={{display:"flex",gap:'20px'}}>
                                        <button onClick={  ()=>handledetailbtn(course.id)}>Detail</button>
                                        <button onClick={() => navigate("/admissionfarm")}>Admission</button>
                                        </div>
                          
                                    </div>
                                                  <div>
                         <p className='fixprice' >
  {`${course.discountFee}/-PKR` || "Price not available"}
</p>
                  </div>

                                </div>
                            ))
                        ) : (
                            <p style={{ marginTop: '20px', color: 'gray' }}>No courses found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
