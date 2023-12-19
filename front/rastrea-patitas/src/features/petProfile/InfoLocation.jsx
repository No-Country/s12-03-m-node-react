/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

function InfoLocation({ ubicacion }) {
  return (
    <div className=" flex px-3 border-t border-b border-solid border-moradoMain my-3 p-4">
      <MdOutlineLocationOn className=" text-moradoMain   w-6  h-6 mr-3 font-medium" />
      <p className="text-sm font-normal text-letra ">
        {" "}
        {ubicacion}{" "}
      </p>
    </div>
  );
}

export default InfoLocation;
