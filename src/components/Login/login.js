import React from "react";
import style from "./Login.module.css";

import Backdrop from "../Backdrop/Backdrop";

const Login = (props) => {
  return (
    <>
      <Backdrop show={props.showLogin} clicked={props.close} />
      <form
        onSubmit={props.submitted}
        className={style.Card}
        style={{
          transform: props.showLogin ? "translateX(0)" : "translateX(-100vh)",
          opacity: props.showLogin ? "1" : "0",
        }}
      >
        <div className={style.LoginContainer}>
          <h2>Welcome back!</h2>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
              className={style.Login}
            />
          </div>
          <div>
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="enter password"
              className={style.Login}
            />
          </div>
        </div>
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
