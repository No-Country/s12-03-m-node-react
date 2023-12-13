import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import ChangePetState from "./ChangePetState";


function PetState({ editProfile }) {
  const [selectedRadio, setSelectedRadio] = useState("En casa");
  const [showPetCard, setShowPetCard] = useState(false);

 
  return (
    <div>
      <p className="mx-4 text-letra font-bold text-sm">
        Estado actual de tu mascota
      </p>
      <RadioGroup
        isDisabled={!editProfile}
        className=" mx-6 mt-3"
        defaultValue={selectedRadio}
       
      >
        <Radio value="En casa">En casa</Radio>
        <Radio onClick={() => console.log("radio")} value="Perdido">Perdido</Radio>
      </RadioGroup>
      <ChangePetState  petName={'Señor Mostachito'}/>
    </div>
  );
}

export default PetState;
