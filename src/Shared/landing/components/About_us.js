import React from "react";

const About_us = () => {
  return (
    <section className="banner">
      <div className="bannerimage">
        <img src="assets/images/about.png" alt="image" />
      </div>
      <div className="bennertext">
        <div className="innertitle">
          <h2>
            World's largest collaborative social network
            <br />
          </h2>
          <p>
            We connect over 3 Million employers and freelancers globally from
            over 237
            <br />
            countries, regions, and territories
          </p>
        </div>
      </div>
      <span className="banner-title">About us</span>
    </section>
  );
};

export default About_us;
