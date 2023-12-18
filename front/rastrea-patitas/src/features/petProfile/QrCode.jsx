import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
// import qr from "./images/qrCode.svg";

function QrCode({qr}) {
  return (
    <div>
      <div className=" flex flex-row">
        {" "}
        <p className="mx-4 text-letra font-bold text-sm">Código QR generado </p>
        <Tooltip content="I am a tooltip">
          <Button isIconOnly={true} className=" bg-white m-[-12px]">
            <BsFillInfoCircleFill className=" text-celesteAcento text-sm" />
          </Button>
        </Tooltip>
      </div>

      <div className=" w-full flex justify-center my-5">
        <img src={qr} alt="image not found" className="  w-48 h-48" />
      </div>
    </div>
  );
}

export default QrCode;
