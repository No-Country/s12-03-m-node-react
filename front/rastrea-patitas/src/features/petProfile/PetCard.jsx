import { Button } from "@nextui-org/button";
import React from "react";

function PetCard({ state, img }) {
  const buttonClasses =
    state === "perdido"
      ? " bg-moradoMain text-white"
      : "bg-celesteAcento text-black";
  return (
    <div className="relative w-full h">
      <div className="absolute inset-0 flex items-start justify-end mt-4 mr-4">
        <Button className={` text-lg font-bold ${buttonClasses}`}>{state}</Button>
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
