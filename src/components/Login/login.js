import React from "react";
import style from "./login.module.css";

import Backdrop from "../Backdrop/Backdrop";

const Login = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <form
        onSubmit={props.submitted}
        className={style.Card}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <input />
        <div className={style.BtnContainer}>
          <button className={style.Btn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
