import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import ChangePetState from "./ChangePetState";

function PetState({ editProfile,state }) {
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
    setShowChangePetState(true)
  }

  return (
    <div>
      <p className="mx-4 text-letra font-bold text-sm">
        Estado actual de tu mascota
      </p>
      <RadioGroup
        isDisabled={!editProfile || showChangePetState} /*esta bloqueadoi cuando no se esdita el perfil o cuando se muestra la card de cambio de estado */
        className=" mx-6 mt-3"
        value={selectedRadio}
        onChange={setSelectedRadio}
      >
        <Radio value="en casa">En casa</Radio>
        <Radio onClick={() => handlerOpen()} value="perdido">
          Perdido
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
