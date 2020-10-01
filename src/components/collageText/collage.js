import React from "react";
import style from "./collage.module.css";

import Backdrop from "../Backdrop/Backdrop";

const Collage = (props) => {
  // combining inputs
  let joined = props.cutup1.concat(props.cutup2);
  // shuffling them
  let shuffled = joined
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  //making 'lines' by pairing every two elements in shuffled array
  let collageTxt = [];
  for (let x = 0; x < shuffled.length; x += 2) {
    let line = shuffled[x].concat(" ", shuffled[x + 1], " ");
    collageTxt.push(line);
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <div
        className={style.Card}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <p className={style.Collage}>{collageTxt}</p>
      </div>
    </>
  );
};

export default Collage;

