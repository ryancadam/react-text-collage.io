import React from "react";
import style from "./Toolbar.module.css";

import Login from "../Login/login";

const Toolbar = (props) => {
  return (
    <div className={style.Toolbar}>
      <div>New User</div>
      <button onClick={props.click}>Log in</button>
      <Login show={props.show}/>
      <div>My Collages</div>
    </div>
  );
};

export default Toolbar;