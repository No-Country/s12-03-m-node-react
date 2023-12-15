import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import medidasAnimales from "../../assets/filterModalIcons/tooltipIcons/medidasAnimales.svg";
function AgeAndSize({ labelTitle, data }) {
  return (
    <>
      <ul className="w-48">
        {labelTitle === "Edad"
          ? "Edades de referencia:"
          : "Medidas de referencia:"}
        {labelTitle === "Tamaño" && (
          <li className="my-6">
            <img src={medidasAnimales} alt="Medidas de animales" />
          </li>
        )}
        {data && (
          <li className="mt-2 border-[0.1rem] border-moradoMain border-b-0">
            {data.map((element) => (
              <ul key={element} className="flex justify-between border-b-[0.1rem] border-moradoMain p-1 ">
                <li>{element.ageReference || element.sizeReference}</li>
                <li>{element.age || element.size}</li>
              </ul>
            ))}
          </li>
        )}
      </ul>
    </>
  );
}
export default AgeAndSize;
