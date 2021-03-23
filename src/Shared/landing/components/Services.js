import React from 'react'

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
                            <h2>Our Blog</h2>
                            <a href="#">View Blog</a>
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
                            <a href="#">Visit Help Forum</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services
