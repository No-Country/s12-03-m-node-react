import React from "react";
import AcordionPet from "./AcordionPet";
import { RadioGroup, Radio } from "@nextui-org/react";

function PetState({editProfile}) {
  return (
    <div className=" border-b border-solid border-moradoMain mb-4">
      <p className="mx-4 text-letra font-bold text-sm">
        Estado actual de tu mascota
      </p>
      <RadioGroup  isDisabled={!editProfile} className=" mx-6 mt-3" defaultValue="En casa" >
        <Radio  value="En casa">En casa</Radio>
        <Radio value="Perdido">Perdido</Radio>
        
      </RadioGroup>
      <AcordionPet
        type={"gato"}
        sex={"macho"}
        eyes={"Ojos claros"}
        hair={"Pelo corto"}
        color={"Bicolor"}
      />
    </div>
  );
}

export default PetState;
