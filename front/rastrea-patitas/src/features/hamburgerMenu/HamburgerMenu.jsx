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
import { useNavigate } from 'react-router';


function HambugerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
   
     <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        icon={<RxHamburgerMenu size={24} />}
      />
      </NavbarContent>     
      <NavbarMenu className=" w-48 md:w-1/4 px-0 " >
        <NavbarMenuItem className=" flex gap-4 items-center border-b-1 border-moradoSecundario pl-2 py-6 ">
          <Avatar
            as="button"
            className="transition-transform border-solid border-1  border-moradoMain w-auto"           
            color="moradoMain"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <Link
            className="flex-col text-secondary text-xs	items-start "
            href="#"
            size="lg"
          >
            <span className="text-sm	font-medium"> Perfil</span>
            Editar perfil
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className=" flex gap-4  items-center  border-b-1 border-moradoSecundario pl-2  py-6 ">
          <img src={homeIcon} alt="logo" />
          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
            onClick={() => navigate('/home')} 
          >
            <span className="text-sm font-medium">Inicio</span>
            Ir a inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  border-b-1 border-moradoSecundario pl-2 py-6">
          <img src={PataIconNav} alt="logo" />
          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
          >
            <span className="text-sm	font-medium"> Mis mascotas</span>
            Ver mis mascotas
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  pl-2 pt-7">
          <IoAddCircle size={24} color="#4D4295" />
          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
          >
            <span className="text-sm font-medium"> Reportar</span>
            Has un anuncio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  border-b-1 border-moradoSecundario pl-2  pb-8">
          <HiDocumentText size={24} color="#4D4295" />
          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
          >
            <span className="text-sm	font-medium"> Blog</span>
            Todo sobre mascotas
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className=" flex gap-4   pl-2  pt-4 pb-10">
          <img src={ConfigIconNav} alt="logo" />
          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
          >
            <span className="text-sm	font-medium"> Configuración</span>
            Editar
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex  " justify="end">
          <Link
            className="w-full justify-end text-secondary text-xs gap-1 pt-4 border-t-1 border-moradoSecundario "
            href="#"
            size="lg"
          >
            Cerrar sesión
            <img src={LogoutIconNav} alt="logo" />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </>
  );
}
export default HambugerMenu;
