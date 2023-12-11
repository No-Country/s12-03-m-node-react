import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

function infoLocation({ubicacion}) {
  return (
    <div className=" flex px-3 ">
      <MdOutlineLocationOn className=" text-moradoMain   w-6  h-6 mr-3" />
      <p className="text-sm font-normal text-letra ">
        {" "}
        Ubicacion / sector {ubicacion}{" "}
      </p>
    </div>
  );
}

export default infoLocation;
