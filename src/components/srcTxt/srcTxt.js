import React from "react";

import style from "./srcTxt.module.css";

const SrcTxt = (props) => {
  return (
    <form onSubmit={props.submitted}>
      <div className={style.Src}>
        <textarea
          className={style.Text}
          name="userTxt1"
          id="userTxt1"
          placeholder="Copy/paste or type text here. For best results, fill the box!"
          rows="15"
          cols="30"
          maxLength="1000"
        ></textarea>
        <textarea
          className={style.Text}
          name="userTxt2"
          id="userTxt2"
          placeholder="Copy/paste or type text here. For best results, fill the box!"
          rows="15"
          cols="30"
          maxLength="1000"
        ></textarea>
      </div>
      <div className={style.BtnContainer}>
        <button className={style.Btn} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SrcTxt;
