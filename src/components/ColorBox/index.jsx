import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ColorBox.scss"

ColorBox.propTypes = {};

function ColorBox() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const colors = ["deeppink", "green", "blue", "white"];

  const [color, setColor] = useState(() => {
    const currentColor = localStorage.getItem('box-color') || 'deeppink';
    console.log(currentColor);
    return currentColor
  });

  function handleBoxClick() {
    const newColor = colors[Math.floor(Math.random() * (3 - 0 + 1) ) + 0] ;

    setColor(newColor);

    localStorage.setItem('box-color', newColor);
  };

  return (
    <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxClick}>
      
    </div>
  );
}

export default ColorBox;
