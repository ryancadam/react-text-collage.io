import React, { useState } from "react";
import style from "./Toolbar.module.css";

import Login from "../Login/Login";
import NewUser from "../NewUser/NewUser";

const Toolbar = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
  };

  const LoginHandler = () => {
    setShowLogin(true);
  };

  const NewUserSubmitHandler = (e) => {
    e.preventDefault();
  };

  const NewUserHandler = () => {
    setShowNewUser(true);
  };

  const CloseHandler = () => {
    setShowLogin(false);
    setShowNewUser(false);
  };

  return (
    <div className={style.Toolbar}>
      <button
        className={style.Btn}
        onClick={NewUserHandler}
      >
        New user
      </button>
      <NewUser
        showNewUser={showNewUser}
        close={CloseHandler}
        submitted={NewUserSubmitHandler}
      />
      <button
        className={style.Btn}
        onClick={LoginHandler}
      >
        Log in
      </button>
      <Login
        showLogin={showLogin}
        close={CloseHandler}
        submitted={LoginSubmitHandler}
      />
      <div>My Collages</div>
    </div>
  );
};

export default Toolbar;
