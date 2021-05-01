import React from "react";

import "./Css/Imageitems.css";

const Image_item = ({ link }) => {
  return (
    <div>
      <a class="card-image">
        <img src={link} alt="placeholder" />
      </a>
    </div>
  );
};

export default Image_item;
