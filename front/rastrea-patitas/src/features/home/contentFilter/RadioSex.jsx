import React, { useState } from "react";
import imagen from "../../../assets/images/pet1.png";
import CheckboxColor from "./CheckboxColor";
import NoLoSe from "./iconCheckbox/NoLoSe";
import Hembra from "./iconCheckbox/Hembra";
import Macho from "./iconCheckbox/Macho";

function RadioSex({ register, element, type, typeIcon }) {
  const [hover, setHover]= useState(false)
  return (
    <>
      <div className="relative flex justify-center items-center">
        <input
          type="radio"
          name=""
          id={element}
          value={element}
          {...register(type)}
          className="absolute z-0 flex justify-center items-center "
          
        />
        <label htmlFor={element} className=" z-0 " onMouseOver={()=> setHover(true)} onMouseOut={()=> setHover(false)} >
          {/* <section className="w-full flex gap-4 justify-center "> </section>*/}
          {typeIcon === "IconNoLoSe" && <NoLoSe hover={hover} />}
          {typeIcon === "IconHembra" && <Hembra hover={hover} />}
          {typeIcon === "IconMacho" && <Macho hover={hover} />}
        </label>
      </div>
    </>
  );
}
export default RadioSex;
