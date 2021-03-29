import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section class="services">
      <div class="container">
        <div class="video">
          <iframe
            class="video-iframe"
            src="https://www.youtube.com/embed/jzCwiu22C_c"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="blog">
              <img src="assets/images/blog.png" alt="image" />
              <h2>Our Q&A</h2>
              <a href="#">View Q&A</a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="blog">
              <img src="assets/images/career.png" alt="image" />
              <h2>Career Opportunites</h2>
              <a href="#">Join Our Team</a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="blog">
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
