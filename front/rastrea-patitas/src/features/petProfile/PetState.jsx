import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import ChangePetState from "./ChangePetState";

function PetState({ editProfile, state }) {
  const [selectedRadio, setSelectedRadio] = useState(state);
  const [showChangePetState, setShowChangePetState] = useState(false);

  const handlerClose = () => {
    //Esta funcion me permite cerrar la card de cambio de estado y ademas volver el estado a En casa si no se publica la perdida
    // Cambiar el valor seleccionado al hacer clic en el botón
    setSelectedRadio(selectedRadio === "en casa" ? "perdido" : "en casa");
    setShowChangePetState(false);
  };

  const handlerOpen = () => {
    setSelectedRadio(selectedRadio === "perdido" ? "en casa" : "perdido");
    setShowChangePetState(true);
  };

  return (
    <div>
      <p className="mx-4 text-letra font-semibold text-sm md:text-3xl md:pl-6 md:mt-5">
        Estado actual de tu mascota
      </p>
      <hr className="hidden md:block mx-8" />
      <RadioGroup
        isDisabled={
          !editProfile || showChangePetState
        } /*esta bloqueadoi cuando no se esdita el perfil o cuando se muestra la card de cambio de estado */
        className=" mx-6 mt-3"
        value={selectedRadio}
        onChange={setSelectedRadio}
      >
        <Radio className="md:mt-4" value="en casa">
          <p className="  md:text-lg text-[#6B7A85] font-semibold">En casa</p>
        </Radio>
        <Radio className="md:mt-1" onClick={() => handlerOpen()} value="perdido">
          <p className="md:text-lg text-[#6B7A85] font-semibold">Perdido</p>
        </Radio>
      </RadioGroup>
      {showChangePetState && (
        <ChangePetState
          petName={"Señor Mostahito"}
          handlerClose={handlerClose}
        />
      )}{" "}
      {/* para ver La card de cambio de estado */}
    </div>
  );
}

export default PetState;
