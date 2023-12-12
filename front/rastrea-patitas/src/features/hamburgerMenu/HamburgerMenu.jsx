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
function HambugerMenu() {
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
        <NavbarMenuItem className=" flex gap-4 items-center border-b-1 border-moradoSecundario pl-2 py-6 ">
          <Link className="flex gap-4" href="#" size="lg">
            <Avatar
              as="button"
              className="transition-transform border-solid border-1  border-moradoMain w-auto"
              color="moradoMain"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm font-medium">Perfil</p>
              <p> Editar perfil</p>
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
            <img src={homeIcon} alt="logo" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm font-medium">Inicio</p>
              <p> Ir a inicio</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  border-b-1 border-moradoSecundario pl-2 py-6">
          <Link className="flex gap-4" href="#" size="lg">
            <img src={PataIconNav} alt="logo" />

            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm	font-medium"> Mis mascotas</p>
              <p> Ver mis mascotas</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  pl-2 pt-7">
          <Link className="flex gap-4" href="#" size="lg" onClick={handleOpen}>
            <IoAddCircle size={24} color="#4D4295" />

            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm	font-medium">Reportar</p>
              <p>Has un anuncio</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex gap-4 items-center  border-b-1 border-moradoSecundario pl-2  pb-8">
          <Link className="flex gap-4" href="#" size="lg"             onClick={() => navigate("/blog")}>
            <HiDocumentText size={24} color="#4D4295" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm	font-medium">Blog</p>
              <p> Todo sobre mascotas</p>
            </div>
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className=" flex gap-4   pl-2  pt-4 pb-10">
          <Link className="flex gap-4" href="#" size="lg">
            <img src={ConfigIconNav} alt="logo" />
            <div className="font-['Poppins'] flex-col text-secondary text-xs items-start">
              {" "}
              <p className="text-sm	font-medium">Configuración</p>
              <p> Editar</p>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className=" flex  " justify="end">
          <Link
            className="font-['Poppins'] w-full justify-end text-secondary text-xs gap-1 pt-4 border-t-1 border-moradoSecundario "
            href="#"
            size="lg"
          >
            Cerrar sesión
            <img src={LogoutIconNav} alt="logo" />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <ModalAdvertisement handleClose={handleClose} open={open} />
    </>
  );
}
export default HambugerMenu;