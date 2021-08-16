import React from "react";

const Button = ({screenBg, onChangeBackGround}) => {
  const btnBg = screenBg === "#aaaaaa" ? "#ff0000" : "#aaaaaa";
  return (
    <button
      onClick={onChangeBackGround}
      className="button"
      style={{ backgroundColor: `${btnBg}` }}
    >
      CHANGE COLOR
    </button>
  );
};

export default Button;
