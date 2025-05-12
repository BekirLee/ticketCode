import React from "react";

const Hero = () => {
  return (
    <div className="heroBg">
      {/* <div className="row"> */}
      <div className="heroTitle col-lg-6">
        <span>65% Off</span>
        <h2>New Plant</h2>
        <p>Pronia, With 100% Natural, Organic & Plant Shop.</p>
        <div className="btn-wrap">Discover now</div>
      </div>
      <div className="heroPhoto col-lg-6 col-md-8">
        <img
          src="https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png"
          alt=""
        />
      </div>
    </div>
    // </div>
  );
};

export default Hero;
