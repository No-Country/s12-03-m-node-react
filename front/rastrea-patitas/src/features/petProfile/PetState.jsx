import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import ChangePetState from "./ChangePetState";

function PetState({ editProfile }) {
  const [selectedRadio, setSelectedRadio] = useState("En casa");
  const [showChangePetState, setShowChangePetState] = useState(false);

  const handlerClose = () => {
    //Esta funcion me permite cerrar la card de cambio de estado y ademas volver el estado a En casa si no se publica la perdida
    // Cambiar el valor seleccionado al hacer clic en el botón
    setSelectedRadio(selectedRadio === "En casa" ? "Perdido" : "En casa");
    setShowChangePetState(false);
  };

  const handlerOpen = () => {
    setSelectedRadio(selectedRadio === "Perdido" ? "En casa" : "Perdido");
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
        <Radio value="En casa">En casa</Radio>
        <Radio onClick={() => handlerOpen()} value="Perdido">
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
