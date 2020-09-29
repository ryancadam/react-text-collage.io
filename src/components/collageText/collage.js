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
// Our sacred task, our righteous duty and our solemn pledge is to carry forward the noble legacy of the brave souls who gave their lives for us 19 years ago,” Mr. Trump said. At another point, he added, “The only thing that stood between the enemy and a deadly strike at the heart of American democracy was the courage and resolve of 40 men and women — the amazing passengers and crew of Flight 93.” Mr. Biden and his wife, Jill, attended the National September 11 Memorial & Museum’s commemoration ceremony in Lower Manhattan, standing with Gov. Andrew M. Cuomo of New York for much of the time. Then the Bidens traveled to Shanksville, where Mr. Biden laid a wreath of white flowers at the Flight 93 National Memorial and met family members of some of those who died. (Mr. Trump, during his morning visit there, also laid a wreath of white flowers in front of the wall of names, but Europeans can gripe about having to do business with the Russian state and Russian planners may complain about being beholden to the European market, but geography conspires against them. The gas is where it is. The rivers run where they must. And the relationship between Germany and Russia is about more than grubby transactions over energy.
