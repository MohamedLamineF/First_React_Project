import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [hex, setHex] = useState("#aaaaaa");
  const [btn, setbtn] = useState("#ff0000");
  
  var secondColor = () => {
    secondColor = "#aaaaaa";
    if (hex !== "#ff0000") {
      secondColor = "#ff0000";
    }
    
    let secondColor2 = "#ff0000";
    if (btn !== "#aaaaaa") {
      secondColor2 = "#aaaaaa";
    }
    
    setHex(secondColor);
    setbtn(secondColor2);
  };

  return (
    <div className="App" style={{ backgroundColor: `${hex}`, height: "100%" }}>
      <h2 className="colorName">{hex}</h2>
      <button onClick={secondColor} className="button" style={{backgroundColor: `${btn}`}}>
        CHANGE COLOR
      </button>
    </div>
  );
};

export default App;
