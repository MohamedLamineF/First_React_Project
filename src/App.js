import React, { useState } from "react";
import Button from "./Button"
import "./App.css";

const App = () => {
  const [screenBg, setScreenBg] = useState("#aaaaaa");
  
  const handleChangeBackGround = () => {
    setScreenBg(screenBg === "#aaaaaa" ? "#ff0000" : "#aaaaaa")
  }

  return (
    <div className="App" style={{ backgroundColor: `${screenBg}`, height: "100%" }}>
      <h2 className="colorName">{screenBg}</h2>
      <Button onChangeBackGround = {handleChangeBackGround} screenBg={screenBg}/>
    </div>
  );
};

export default App;
