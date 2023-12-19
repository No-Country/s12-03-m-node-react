import React, { useState } from "react";
import imagen from "../../../assets/images/pet1.png";
import CheckboxColor from "./CheckboxColor";
function RadioColor({ register, element }) {
  const [valid, setValid] = useState(false);

  return (
    <>
      
        <input
          type="radio"
          name=""
          id={element}
          value={element}
          onChangeCapture={()=>setValid(true)}
          {...register("main_color", {
            onChange: (e) => e.target.value && setValid(true),
          })}
          className="absolute z-0 flex justify-center items-center hidden "
        />
        <label htmlFor={element} className=" z-0 ">
          <CheckboxColor typeIcon={element} isSelected={valid} />
        </label>
   
    </>
  );
}
export default RadioColor;
