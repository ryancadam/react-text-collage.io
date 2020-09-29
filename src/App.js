import React, { useState } from "react";
import style from "./App.module.css";

import Collage from "./components/collageText/collage";
import SrcTxt from "./components/srcTxt/srcTxt";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
  const [txt1, setTxt1] = useState([]);
  const [txt2, setTxt2] = useState([]);
  const [showCollage, setShowCollage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    setTxt1([]);
    setTxt2([]);
    let newTxt1 = e.target.userTxt1.value;
    let newTxt2 = e.target.userTxt2.value;
    for (let x = 0; x < newTxt1.length - 31; x += 31) {
      setTxt1((txt1) => [...txt1, newTxt1.slice(x, x + 31)]);
    }
    for (let x = 0; x < newTxt2.length - 31; x += 31) {
      setTxt2((txt2) => [...txt2, newTxt2.slice(x, x + 31)]);
    }
    setShowCollage(true);
  };

  const CloseCollageHandler = () => {
    setShowCollage(false);
  };

  const LoginHandler = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Toolbar show={showLogin} click={LoginHandler} />
      <div className={style.App}>
        <div style={{ fontSize: "22px" }}>Create a Text Collage!</div>
        <p>Tip - try combining a poem with a news article.</p>
        <SrcTxt submitted={SubmitHandler} />
        <Collage
          show={showCollage}
          closed={CloseCollageHandler}
          cutup1={txt1}
          cutup2={txt2}
        />
      </div>
    </>
  );
};

export default App;
