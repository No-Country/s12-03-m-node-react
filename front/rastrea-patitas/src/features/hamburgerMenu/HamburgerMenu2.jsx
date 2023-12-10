import { RiUserAddFill, RiUserFill  } from "react-icons/ri";
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


function HambugerMenu2() {
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
        <NavbarMenuItem className=" flex gap-4  items-center pl-2  ">
        <RiUserFill color="#4D4295" />

          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
            onClick={() => navigate('/login')} 
          >
            <span className="text-sm font-medium">Iniciar sesión</span>
            Entra a tu cuenta
          </Link>
        </NavbarMenuItem >
        <NavbarMenuItem className=" flex gap-4  items-center  border-b-1 border-moradoSecundario pl-2  pb-6 ">
        <RiUserAddFill color="#4D4295" />

          <Link
            className="flex-col text-secondary text-xs items-start"
            href="#"
            size="lg"
            onClick={() => navigate('/register')} 
          >
            <span className="text-sm font-medium">Registrarse</span>
            Crea una cuenta
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
            onClick={() => navigate('/blog')} 
          >
            <span className="text-sm	font-medium"> Blog</span>
            Todo sobre mascotas
          </Link>
        </NavbarMenuItem>          
      </NavbarMenu>
    </>
  );
}
export default HambugerMenu2;
