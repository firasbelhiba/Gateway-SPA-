import React, { Fragment } from "react";
import "./Css/Postimage.css";

const Postimage = ({ image }) => {
  return (
    <Fragment>
      {image.length === 1 ? (
        <img src={image[0]} style={divStyle} />
      ) : (
        <Fragment>
          <div id="preview-post-image">
            <img src={image[0]} />
          </div>
          <div id="thumbnail-container-post-image">
            {image.map((i) => (
              <img
                className="thumbnail-post-image"
                src={i}
                onmouseover="upDate(this)"
                onmouseout="unDo()"
              />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const divStyle = {
  display: "block",
  marginleft: "auto",
  marginright: "auto",
  padding: "10px",
  width: "100%",
};

export default Postimage;
