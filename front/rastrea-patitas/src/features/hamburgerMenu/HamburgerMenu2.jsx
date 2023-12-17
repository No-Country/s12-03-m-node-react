/* eslint-disable no-unused-vars */
import { RiUserAddFill, RiUserFill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Link,
} from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import homeIcon from "../../assets/home.svg";

import PataIconNav from "../../assets/pata.svg";
import QrIconNav from "../../assets/qrIcon.svg";
import ConfigIconNav from "../../assets/configIcon.svg";
import LogoutIconNav from "../../assets/logoutIcon.svg";
import { IoAddCircle } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi2";
import { useNavigate } from "react-router";
import ModalAdvertisement from "./ModalAdvertisement";

function HambugerMenu2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<RxHamburgerMenu size={24} />}
        />
      </NavbarContent>
      <NavbarMenu className=" w-48 md:w-1/4 px-0 ">
        <NavbarMenuItem className=" flex gap-4  items-center pl-2  ">
          <Link
            className="flex gap-4"
            href="#"
            size="lg"
            onClick={() => navigate("/login")}
          >
            <RiUserFill size={24} color="#4D4295" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start md:text-base">
              {" "}
              <p className="text-sm font-medium md:text-lg">Iniciar sesión</p>
              <p className="">Entra a tu cuenta</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4  items-center  border-b-1 border-moradoSecundario pl-2  pb-6 ">
          <Link
            className="flex gap-4"
            href="#"
            size="lg"
            onClick={() => navigate("/register")}
          >
            <RiUserAddFill size={24} color="#4D4295" />

            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start md:text-base">
              {" "}
              <p className="text-sm font-medium md:text-lg">Registrarse</p>
              <p> Crea una cuenta</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4  items-center  border-b-1 border-moradoSecundario pl-2  py-6 ">
          <Link
            className="flex gap-4"
            href="#"
            size="lg"
            onClick={() => navigate("/home")}
          >
            <img src={homeIcon} alt="" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start md:text-base">
              {" "}
              <p className="text-sm font-medium md:text-lg">Inicio</p>
              <p>Ver mascotas</p>
            </div>
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className=" flex gap-4 items-center  pl-2 pt-6">
          <Link className="flex gap-4" href="#" size="lg" onClick={handleOpen}>
            <IoAddCircle size={24} color="#4D4295" />

            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start md:text-base">
              {" "}
              <p className="text-sm font-medium md:text-lg">Reportar</p>
              <p> Has un anuncio</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  border-b-1 border-moradoSecundario pl-2  pb-8">
          <Link
            className="flex gap-4"
            href="#"
            size="lg"
            onClick={() => navigate("/blog")}
          >
            <HiDocumentText size={24} color="#4D4295" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start md:text-base">
              {" "}
              <p className="text-sm font-medium md:text-lg">Blog</p>
              <p>Todo sobre mascotas</p>
            </div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <ModalAdvertisement handleClose={handleClose} open={open} />
    </>
  );
}
export default HambugerMenu2;
