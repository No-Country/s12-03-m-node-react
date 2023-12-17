/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Button } from "@nextui-org/button";

function NavProfile({ name }) {
  const Navigate = useNavigate();
  return (
    <div className=" flex flex-row text-lg font-semibold py-2  bg-white justify-center items-center md:hidden">
      <Button
        onClick={() => Navigate(-1)}
        isIconOnly
        className=" bg-white "
      >
        <IoArrowBackSharp className="text-xl" />
      </Button>
      <h6 className="text-center w-11/12 ">{name}</h6>
    </div>
  );
}

export default NavProfile;
