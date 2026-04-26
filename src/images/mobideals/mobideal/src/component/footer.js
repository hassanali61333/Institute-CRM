function Header() {
    return ( 
        <>
    <footer className="container-fluid  footer">
        <div className="container footer-wrap">
            <div className="row" >
            <div className="col-md-3 column">
                 <img className=" " src={require('../images/newlogo.png')} width={150} height={150} />

                <p>Your trusted destination for the latest smartphones and mobile 
                    accessories. Quality products, competitive prices, and exceptional service.</p>
            </div>
            <div className='col-md-3 column '>
                <h5>Quick Links</h5>
                                 <ul>
                              <a href='#'> <li>Shop All Products</li></a>
                                 <a href='#'> <li>iPhone</li></a>    
                                </ul>
            </div>   

              <div className='col-md-3   column'>
                <h5>Customer Service</h5>
                                 <ul>
                                    <a href='#'> <li>Contact Us</li></a>
                                     <a href='#'>   <li>Returns & Exchanges</li></a>
                                   <a href='#'>  <li>Reviews</li></a>
                                    

                                </ul>
            </div>  

             <div className='col-md-3    column'>
                <h5>Contact</h5>
                                 <ul>
                                      <li> <i class="fa-solid fa-phone"></i> +92 300 1234567</li>
                                      <li> <i class="fa-solid fa-envelope"></i> sales@mobideals.uk</li>

                                </ul>
                                <div className='icons'> 
                                <i class="fa-brands fa-square-instagram"></i>
                                 <i class="fa-brands fa-tiktok"></i>

                                </div>
            </div> 
          
            

            
      


 
  </div>
</div> 
<hr className='line'></hr>

<p className='location'>© 2025 MobiDeals. All rights reserved.FIT Computer institute</p>
    </footer>
        </>
     );
}

export default Header;