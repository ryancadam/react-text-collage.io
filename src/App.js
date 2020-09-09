import React, { useState } from "react";

import "./App.css";

import SrcTxt from "./components/srcTxt/srcTxt";

const App = () => {
  
  const [txt1, setTxt1] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log(e.target.userTxt1.value)
  };

  return (
    <div>
      <h1>Howdy</h1>
      <SrcTxt submitted={SubmitHandler} />
    </div>
  );
};

export default App;
