import React, { useState } from "react";
import Collage from "./components/collageText/collage";

import "./App.css";

import SrcTxt from "./components/srcTxt/srcTxt";

const App = () => {
  const [txt1, setTxt1] = useState([]);
  const [txt2, setTxt2] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    setTxt1([])
    setTxt2([])
    let newTxt1 = e.target.userTxt1.value;
    let newTxt2 = e.target.userTxt2.value;
    for (let x = 0; x < newTxt1.length - 31; x += 31) {
      setTxt1((txt1) => [...txt1, newTxt1.slice(x, x + 31)]);
    }
    for (let x = 0; x < newTxt2.length - 31; x += 31) {
      setTxt2((txt2) => [...txt2, newTxt2.slice(x, x + 31)]);
    }
  };

  return (
    <div>
      <h1>howdy</h1>
      <SrcTxt submitted={SubmitHandler} />
      <Collage cutup1={txt1} cutup2={txt2} />
    </div>
  );
};

export default App;
