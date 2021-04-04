import React from "react";
import "./Css/Carousel.css";

function Carousel() {
  return (
    <div>
      <div className="containerb">
        <div className="carousel">
          <input type="radio" id="carousel-1" name="carousel[]" checked />
          <input type="radio" id="carousel-2" name="carousel[]" />
          <input type="radio" id="carousel-3" name="carousel[]" />
          <input type="radio" id="carousel-4" name="carousel[]" />
          <input type="radio" id="carousel-5" name="carousel[]" />
          <ul className="carousel__items">
            <li className="carousel__item">
              <img
                src="//lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG"
                alt=""
              />
            </li>
            <li className="carousel__item">
              <img
                src="//lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg"
                alt=""
              />
            </li>
            <li className="carousel__item">
              <img
                src="//lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg"
                alt=""
              />
            </li>
            <li className="carousel__item">
              <img
                src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg"
                alt=""
              />
            </li>
            <li className="carousel__item">
              <img
                src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg"
                alt=""
              />
            </li>
          </ul>
          <div className="carousel__prev">
            <label htmlFor="carousel-1"></label>
            <label htmlFor="carousel-2"></label>
            <label htmlFor="carousel-3"></label>
            <label htmlFor="carousel-4"></label>
            <label htmlFor="carousel-5"></label>
          </div>
          <div className="carousel__next">
            <label htmlFor="carousel-1"></label>
            <label htmlFor="carousel-2"></label>
            <label htmlFor="carousel-3"></label>
            <label htmlFor="carousel-4"></label>
            <label htmlFor="carousel-5"></label>
          </div>
          <div className="carousel__nav">
            <label htmlFor="carousel-1"></label>
            <label htmlFor="carousel-2"></label>
            <label htmlFor="carousel-3"></label>
            <label htmlFor="carousel-4"></label>
            <label htmlFor="carousel-5"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
