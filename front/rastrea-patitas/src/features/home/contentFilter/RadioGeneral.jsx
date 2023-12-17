import React, { useState } from "react";
import imagen from "../../../assets/images/pet1.png";
import CheckboxColor from "./CheckboxColor";
function RadioGeneral({ register, element, type,  }) {
  const [selected, setSelected] = useState(false);
  const handlerSelected = (e) =>    e.target.value && (setSelected(!selected));
  return (
    <>
      <div className=" flex  ">
        <input
          type="radio"
          name=""
          id={element}
          value={element}
          
          {...register(type,{onChange:handlerSelected})}
         className="RadioGeneral hidden"
        />
        <label htmlFor={element} className="px-3 border-solid rounded-xl border-1 border-moradoMain hover:bg-moradoActivo hover:border-moradoActivo">{element}</label>
      </div>
    </>
  );
}
export default RadioGeneral;
