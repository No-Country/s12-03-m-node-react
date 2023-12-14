import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { SlHome } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";
import { useLocation, Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

function HeaderBlog({ title, link }) {
  const Navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {/*pantallas pequeñas */}
      <div className=" flex flex-row text-lg font-semibold py-2  bg-white justify-center items-center md:hidden">
        <Button
          onClick={() => Navigate(`/${link}`)}
          isIconOnly
          className=" bg-white m-[-13px]"
        >
          <IoArrowBackSharp className="text-xl" />
        </Button>
        <h6 className="text-center w-11/12 ">{title}</h6>
      </div>

      {/*pantallas medianas y grandes */}
      <div className=" hidden md:flex justify-start items-center ml-[-16px]">
        <Button
          onClick={() => Navigate(`/${link}`)}
          className=" bg-white text-letra text-base"
        >
          {" "}
          <SlHome className=" text-moradoMain h-5 w-5" /> Inicio
        </Button>
        <FaChevronRight />

        <Button
          onClick={() => Navigate(`/blog`)}
          className=" bg-white text-letra text-base"
        >
          {" "}
          <RiArticleLine className=" text-moradoMain h-5 w-5" /> Blog
        </Button>

        {location.pathname === "/post" && (
          <div className=" flex justify-center items-center">
            <FaChevronRight />
            <p className=" bg-white text-letra text-lg flex">
              <MdPets className=" text-moradoMain h-6 w-6 mx-4" /> Consejos para
              cuidar a tu mascota perdida
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderBlog;
