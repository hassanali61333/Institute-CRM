function Banner() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1000"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src={require('../images/banner1.png')}
            className="d-block w-100"
            style={{ height: "80vh", objectFit: "cover" }}
            alt="Banner 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={require('../images/banner2.png')}
            className="d-block w-100"
            style={{ height: "80vh", objectFit: "cover" }}
            alt="Banner 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={require('../images/banner1.png')}
            className="d-block w-100"
            style={{ height: "80vh", objectFit: "cover" }}
            alt="Banner 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
