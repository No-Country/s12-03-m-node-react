import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Button } from "@nextui-org/button";

function HeaderBlog({title, link}) {
  const Navigate = useNavigate();
  return (
    <div className=" flex flex-row text-lg font-semibold py-2 bg-white justify-center items-center">
      <Button
        onClick={() => Navigate(`/${link}`)}
        isIconOnly
        className=" bg-white m-[-13px]"
      >
        <IoArrowBackSharp className="text-xl" />
      </Button>
      <h6 className="text-center w-11/12 ">{title}</h6>
    </div>
  );
}

export default HeaderBlog;
