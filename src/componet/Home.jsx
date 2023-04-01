import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark  border-0 ">
        <img src="/assets/nocturne.jpg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-contet-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">SPRING SUMMER 2023</h5>
          <p className="card-text lead fs-2" style={{marginLeft :'60px',marginTop:'10px'}}>
            READY-TO-WEAR
          </p>
          <p className="card-text fs-2 " style={{color: 'black', marginLeft :'80px'}}>
            <small>SHOP NOW</small>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
