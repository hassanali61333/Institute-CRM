function Contact() {
  return (
    <>
      <div className="container-fluid section-one">
        <div className="container contact-content">
          <div className="contact-heading ">
            <h1>Get in Touch</h1>
            <h6>
              Have questions about our products? Need technical support? Our
              team is here to help <br></br>  you find the perfect mobile device.
            </h6>
          </div>

          {/* Row with 10px gap */}
          <div className="row g-10 contact-row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-box">
                <i className="fa-solid fa-phone"></i>
                <h4>CALL US</h4>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri 9AM-6PM</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-box">
                <i className="fa-solid fa-envelope"></i>
                <h4>EMAIL US</h4>
                <p>support@example.com</p>
                <p>We’ll get back within 24 hours</p>
              </div>
            </div>
          </div>
        </div>



        <div className="container section-two-content">
          <h3>Need Technical Support?</h3>
          <h6>Our expert technicians are ready to help you with setup, <br></br>
            troubleshoo ting, and repairs.</h6>
<button>Live Chat Support</button>
        </div>
      </div>

    </>
  );
}

export default Contact;
