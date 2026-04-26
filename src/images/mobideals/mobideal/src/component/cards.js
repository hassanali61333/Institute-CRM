function Card() {
  return (
    <>

    <div className="container-fluid">
        <div className='container'>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 g-4 ">
          <div className="card">
            <img src={require('../images/sample1.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Iphone</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6  g-4">
          <div className="card">
            <img src={require('../images/sample2.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Macbook</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 g-4">
          <div className="card">
            <img src={require('../images/sample3.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Andriod smartphones</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 g-4 ">
          <div className="card">
            <img src={require('../images/sample4.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Airpods</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 g-4 ">
          <div className="card">
            <img src={require('../images/sample5.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Phone Cases</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6  g-4">
          <div className="card">
            <img src={require('../images/sample6.png')} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Screen Protector</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className='container-fluid '>
      <div className='container Verified-Refurbished '>
        <div className='info'>
            <h1>What is Verified Refurbished?</h1>
        <h5>How we ensure quality for you.</h5>
        <ul className='mt-5'>
          <li> <i class="lucide lucide-check-circle" style={{ color: "green" }}
></i> Comprehensive 25-point inspection</li>
          <li> <i class="lucide lucide-badge-check" style={{ color: "green" }}
></i> Backed by our Quality Assurance Promise</li>
          <li> <i class="lucide lucide-shield" style={{ color: "green" }}
></i> Certified and trusted refurbishers</li>
          <li> <i class="lucide lucide-flask-conical" style={{ color: "green" }}
></i> Advanced testing in our Innovation Lab</li>
          <li> <i class="lucide lucide-credit-card" style={{ color: "green" }}
></i> Free warranty with every order</li>
          <li> <i class="lucide lucide-calendar-days" style={{ color: "green" }}
></i>  30-day easy return policy</li>
          
        </ul>
        </div>
       
      </div>
    </div>
    </>
  );
}

export default Card;

