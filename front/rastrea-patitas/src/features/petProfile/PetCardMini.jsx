import { Button } from "@nextui-org/button";
import React from "react";

function PetCardMini({  petData }) {
  const buttonClasses =
    petData.status === "perdido"
      ? " bg-moradoMain text-white"
      : "bg-celesteAcento text-black";

  return (
    <div className="relative w-full md:h-[585px]">
      <div className="absolute inset-0 flex items-start justify-end mt-4 mr-4">
        <Button className={`text-lg font-bold ${buttonClasses}`}>
          {petData.status}
        </Button>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center mt-4 mr-4">
      
          
            <Button
              color="primary"
              variant="bordered"
              className="border-moradoMain text-letra font-medium w-36 bg-white m-2"
            >
              Cambiar foto
            </Button>
            <Button
              color="primary"
              variant="bordered"
              className="border-moradoMain text-letra font-medium w-36 bg-white m-2"
            >
              Agregar mas fotos
            </Button>
          
        
      </div>

      <div className="w-360 h-340 mx-auto">
        <img
          src={petData.pet_id.pet_img[0]?.url}
          alt="img not found"
          className="w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default PetCardMini;
