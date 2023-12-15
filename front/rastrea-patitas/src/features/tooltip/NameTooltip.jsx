import React from "react";
import dogAndOwner from "../../assets/filterModalIcons/tooltipIcons/dogAndOwner.svg";

function NameTooltip() {
  return (
    <>
      <ul className="w-48">
        Nombre:
        <li className="my-6">
          <img src={dogAndOwner} alt="Gato de Características especiales" />
        </li>
        <li>
          Si la mascota que encontraste estaba usando un collar, por favor
          proporciona su nombre aquí. En caso contrario, déjalo como 'Nombre
          desconocido'".
        </li>
      </ul>
    </>
  );
}
export default NameTooltip;
