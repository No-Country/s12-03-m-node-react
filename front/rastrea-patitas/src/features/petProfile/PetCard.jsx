import { Button } from "@nextui-org/button";
import React from "react";

function PetCard({ state, img, editProfile }) {
  const buttonClasses =
    state === "perdido"
      ? " bg-moradoMain text-white"
      : "bg-celesteAcento text-black";
  return (
    <div className="relative w-full h">
      <div className="absolute inset-0 flex items-start justify-end mt-4 mr-4">
        <Button className={` text-lg font-bold ${buttonClasses}`}>
          {state}
        </Button>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center mt-4 mr-4">
        {editProfile && (
          <>
            <Button
              color="primary"
              variant="bordered"
              className="border-moradoMain text-letra font-medium w-36   bg-white m-2"
            >
              Cambiar foto
            </Button>
            <Button
              color="primary"
              variant="bordered"
              className="border-moradoMain text-letra font-medium w-36  bg-white  m-2"
            >
              Agregar mas fotos
            </Button>
          </>
        )}
      </div>
      <img
        src={img}
        alt="img not found"
        className="w-full h-[340px] object-cover"
      />
    </div>
  );
}

export default PetCard;