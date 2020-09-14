import React from "react";
import style from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div className={style.Toolbar}>
      <div>New User</div>
      <div>Log in</div>
      <div>My Collages</div>
    </div>
  );
};

export default Toolbar;