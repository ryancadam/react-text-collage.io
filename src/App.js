import React, { useState } from "react";
import Collage from "./components/collageText/collage";

import "./App.css";

import SrcTxt from "./components/srcTxt/srcTxt";

const App = () => {
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    setTxt1(e.target.userTxt1.value);
    setTxt2(e.target.userTxt2.value);
  };
  return (
    <div>
      <h1>Howdy</h1>
      <SrcTxt submitted={SubmitHandler} />
      <Collage source1={txt1} source2={txt2} />
    </div>
  );
};

export default App;
