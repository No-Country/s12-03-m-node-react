import React from "react";
import cat2 from "../../assets/filterModalIcons/tooltipIcons/cat2.svg";

function SpecialFeature() {
  return (
    <>
      <ul className="w-48">
        Características especiales:
        <li className="my-6">
          <img src={cat2} alt="Gato de Características especiales" />
        </li>
        <li>
          Resalta lo que hace que tu mascota sea única. ¿Tiene alguna marca
          distintiva, un patrón especial o alguna característica física
          particular que la haga especial? Estos detalles pueden ayudar en su
          búsqueda.
        </li>
      </ul>
    </>
  );
}
export default SpecialFeature;
