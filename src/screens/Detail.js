import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import fitpic from '../images/branchimg.jpeg'
import {setcourseid} from "../store/Coursesslice"

function Detail() {
  const navigate = useNavigate()
 
   let data =localStorage.getItem("setcourseid")
   let nowdata= data? JSON.parse(data):null;
   console.log(nowdata)
   
  const pp=useSelector((state)=> state.courses.setcourseid)
const courseid = pp??nowdata;
  const coursesdata = useSelector((state => state.courses.coursesdata))
  const course = coursesdata.find(c => c.id === Number(courseid))
console.log(coursesdata)
console.log("nowdata type:", typeof nowdata);  
console.log("course id type:", typeof coursesdata[0].id); 
  if (!course) return <p>NOT Avilable</p>
  const gotoform = () => {
    navigate('/admissionfarm')
  } 



  return (
    <>
      <div className="detail-div">
        <div className="detail-wrap">

          <div className="bg-img">
            <h1> {course.bgheading}</h1>
          </div>
          <div className="content-div">
            <div className="detail-content">
              {
                course.courseheading.map((item, index) => (
                  index === 0 ? <h1>{item}</h1> :
                    <p key={index}> {item}</p>
                ))
              }
              <table border=".5" cellpadding="10" cellspacing="0">
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Fee in Installments</th>
                    <th>Fee in Lumsum</th>
                  </tr>
                </thead>
                <tbody >
                  {
                    course.feedetail.map((item, index) => (
                      <tr key={index}>
                        <td>{item.coursetitle}</td>
                        <td>{item.courseinstallment}</td>
                        <td>{item.coursefee}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="branch-detail">
              <div className="bracnch-text">
                <h5 className="learn">What u will learn?</h5>
                {
                  course.detailParagraphs.map((item, index) => (

                    index === 0 ? <h5  className="para">{item}</h5> :
                      <p >{item}</p>
                  ))
                }
                <ol>
                  {course.learnSections.map((section, index) => (
                    <div key={index}>
                      <li className="course-tittle">{section.title}</li>
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} > {item} </li>
                        ))
                        }</ul>

                    </div>
                  ))}
                </ol>
              </div>
              <div className="branch-images">
                 < img src={fitpic} /> 
<div className="course-info">
                  <h3 className="course-inf">Course Information</h3>
                  <ul>
                    <li>Lectures:  <span style={{ paddingLeft: "40px" }}>20+</span> </li>
                    <li>Quizzes:   <span style={{ paddingLeft: "44px" }}>5+</span></li>
                    <li>Duration:   <span style={{ paddingLeft: "37px" }}>6 Months+</span> </li>
                    <li>Students:   <span style={{ paddingLeft: "37px" }}>43+</span> </li>
                    <li>Assessments:   <span style={{ paddingLeft: "11px" }}>Yes+</span></li>
                  </ul>
                </div>

                <div className="course-fee">

                  <button className="fee">{course.feebtn}</button>
                  <button className="buy" onClick={gotoform} >{course.buybtn}</button>





                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Detail;