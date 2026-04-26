import React from "react";


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Navbar() {
  return (
    <>
    <div className="container-fluid header">
      <div className=" top-banner">
        
        <div className="animated-text">
          <h5>✨ Track Your Order Easily</h5>
          <h5>⚡ Fast Delivery Across UK</h5>
          <h5>✨ Sign up to get weekly offers & exclusive deals!</h5>
        </div>
      </div>  

      <div className="top-heading">
        <h5>+92 300 1234567 &nbsp;&nbsp; sales@mobideals.uk</h5>
      </div>
  </div>

     
  <div class="container-fluid navbar">
    <div class="navbar-brand"> 
      <img src={require('../images/logo.png')} width={100}  height={120}/>
      <ul>
        <li>Home</li>
        <li>Catalog</li>

      </ul>
    </div>
    <form class="input">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Login</button>
    </form>
  </div>

      
    
    </>
  );
}

export default Navbar;
