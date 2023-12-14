import React, { useState } from "react";
import ColorAtigrado from "./iconCheckbox/ColorAtigrado";
import ColorByN from "./iconCheckbox/ColorByN";
import ColorConManchas from "./iconCheckbox/ColorConManchas";
import ColorGeneral from "./iconCheckbox/ColorGeneral";
import { PiCircleDuotone } from "react-icons/pi";
//<PiCircleDuotone />

function CheckboxColor({ typeIcon, isSelected }) {
  const coloresComunes = [
    { color: "Gris", fill: "#000000" },
    { color: "Negro", fill: "#949494" },
    { color: "Marrón", fill: "#C17560" },
    { color: "Naranjo", fill: "#FF9A6C" },
    { color: "Amarillo", fill: "#ECE4A1" },
    { color: "Blanco", fill: "#FFFFFF" },
  ];
  const coloresEspeciales = ["Bicolor", "Atigrado", "Con manchas"];
  const color = coloresComunes.find((e) => e.color === typeIcon);
  const colorEspecial = coloresEspeciales.find((e) => e === typeIcon);
  const [manejador, setManejador] = useState(colorEspecial);
  
  function hw() {
    if (manejador === "Bicolor") {
      return <ColorByN isSelected={isSelected} />;
    }
    if (manejador === "Atigrado") {
      return <ColorAtigrado isSelected={isSelected} />;
    } else {
      return <ColorConManchas isSelected={isSelected} />;
    }
  }

  return (
    <div className="flex flex-col  items-center">
      {color && <ColorGeneral isSelected={isSelected} fill={color.fill!==false? color.fill:undefined} />}
      {colorEspecial && hw()}
      <h1>{typeIcon}</h1>
    </div>
  );
}
export default CheckboxColor;
