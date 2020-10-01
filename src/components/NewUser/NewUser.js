import React from "react";
import style from "./NewUser.module.css";

import Backdrop from "../Backdrop/Backdrop";

const NewUser = (props) => {
  return (
    <>
      <Backdrop show={props.showNewUser} clicked={props.close} />
      <form
        onSubmit={props.submitted}
        className={style.Card}
        style={{
          transform: props.showNewUser ? "translateX(0)" : "translateX(-100vh)",
          opacity: props.showNewUser ? "1" : "0",
        }}
      >
        <div className={style.NewUserContainer}>
          <h2>Create an account:</h2>
          <div>
            <input
              type="email"
              name="newEmail"
              id="newEmail"
              placeholder="enter email"
              className={style.NewUser}
            />
          </div>
          <div>
            <input
              type="password"
              name="newPwd"
              id="newPwd"
              placeholder="enter password"
              className={style.NewUser}
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

export default NewUser;