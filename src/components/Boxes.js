import "./Boxes.css"

function Boxes(props) 

{
  
    return (

        <>
           <div className="box-comp" >
             
  <img 
        src={props.src} 
        alt={props.heading} 
        style={{ width: "65%", height: "130px", objectFit: "cover",borderRadius:'50%' }} 
      />
<div>
    <h4 style={{ margin: "0px" }}>{props.heading}</h4>
<p style={{ margin: "0px" }}>{props.text}</p>
</div>


            

           </div>

        </>
      );
}

export default Boxes;