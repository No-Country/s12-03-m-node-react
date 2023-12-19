/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

function QrCode({ qr }) {
  return (
    <div>
      <div className="flex flex-row md:items-center">
        <p className="mx-4 text-letra font-bold text-sm md:text-3xl md:pt-4 md:ml-10">
          Código QR generado
        </p>

        <div className="md:pt-3 md:flex md:items-center  ">
          {" "}
          {/* Añadida la clase md:flex y md:items-center para centrar verticalmente */}
          <Tooltip className="" content="I am a tooltip">
            <Button isIconOnly={true} className="bg-white m-[-12px] md:m-0  ">
              <BsFillInfoCircleFill className="text-celesteAcento text-sm md:w-9 md:h-9" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <hr className="hidden md:block mx-9 "/>

      <div className=" w-full flex justify-center my-5">
        <img src={qr} alt="image not found" className="  w-48 h-48  md:w-52 md:h-52" />
      </div>
    </div>
  );
}

export default QrCode;
