import React from "react";

const Carousel = () => {
  return (
    <div className="Carousel-container">
    <div className="d-flex justify-content-center">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: "80vw",
          boxShadow: `
            0px 4px 12px 2px rgba(171, 76, 152, 0.8),
            0px 5px 16px 3px rgba(54, 75, 222, 0.8)
          `,
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/800x400?text=First+Slide"
              className="d-block w-100"
              alt="First Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Second+Slide"
              className="d-block w-100"
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Third+Slide"
              className="d-block w-100"
              alt="Third Slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "transparent",
            }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "transparent",
            }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
