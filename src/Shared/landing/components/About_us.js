import React from "react";
import { Link } from "react-router-dom";

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
            <div className="col-lg-12 no-pdd mt-3">
              <div className="blog">
                <Link to="/signup">Join our community | Sign up</Link>
              </div>
            </div>
          </p>
        </div>
      </div>
      <span className="banner-title">About us</span>
    </section>
  );
};

export default About_us;
