import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="video">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/jzCwiu22C_c"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="assets/images/blog.png" alt="image" />
              <h2>Our Q&A</h2>
              <Link to="/q_and_a">View Q&A</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="assets/images/career.png" alt="image" />
              <h2>Career Opportunites</h2>
              <Link to="/jobs">Join Our Team</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="assets/images/forum.png" alt="image" />
              <h2>Help Forum</h2>
              <Link to="/forum">Visit Help Forum</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
