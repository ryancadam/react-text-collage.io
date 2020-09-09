import React from "react";

import style from "./srcTxt.module.css";

const SrcTxt = (props) => {
  return (
    <form onSubmit={props.submitted}>
      <textarea
        className={style.Src}
        name="userTxt1"
        id="userTxt1"
        placeholder="Copy/paste or type text here"
        rows="10"
        cols="30"
        maxLength="400"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SrcTxt;
