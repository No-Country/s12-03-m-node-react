import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";

import PataIconNav from "../assets/pata.svg";
import QrIconNav from "../assets/qrIcon.svg";
import ConfigIconNav from "../assets/configIcon.svg";
import LogoutIconNav from "../assets/logoutIcon.svg";
import soloPatitaLogo from "../assets/soloPatitaLogo.svg";
import logo_RastreaPatitas from "../assets/logos/logo_RastreaPatitas.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  console.log(width);
  const headerItems = [
    { id: 1, title: "Perfil", subTitle: "Editar perfil", path: "#", src: "" },
    {
      id: 2,
      title: "Mis mascotas",
      subTitle: " Ver mis mascotas",
      path: "#",
      src: { PataIconNav },
    },
    {
      id: 3,
      title: "QR",
      subTitle: "Gestionar códigos",
      path: "#",
      src: { QrIconNav },
    },
    {
      id: 4,
      title: " Configuración",
      subTitle: "Editar",
      path: "#",
      src: { ConfigIconNav },
    },
    { id: 5, title: " Cerrar sesión", path: "#", src: "LogoutIconNav" },
  ]; //falla el src
  //{headerItems.map((item, index)=>(<NavbarMenuItem key={`${item}-${item.id}`}>{index===0 ? <Avatar      as="button"    className="transition-transform border-solid border-1  border-moradoMain"    color="moradoMain"    name="Jason Hughes"   size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>  :<img src={item.src} alt="logo" />}  <Link className="w-full" href="#" size="lg">  {item.title}                   <br />  {item.subTitle}   </Link></NavbarMenuItem> ) )}
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {isLogin === false ? (
        <>
          <NavbarContent>
            <NavbarItem>
              <NavbarBrand>
                <img
                  src={width > 400 ? logo_RastreaPatitas : soloPatitaLogo}
                  alt=""
                />
              </NavbarBrand>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="flex gap-4">
            <NavbarItem>
              <Button type="submit" className="bg-moradoMain text-white">
                Ingresar
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                type="submit"
                variant="ghost"
                className="border-moradoMain text-moradoMain"
              >
                Registrarse
              </Button>
            </NavbarItem>
          </NavbarContent>
        </>
      ) : (
        <>
          {/*Si esta logueado------------------------------------------------------------- className="hidden sm:flex gap-4" */}
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              icon={<RxHamburgerMenu size={24} />}
            />
            <NavbarItem className="w-full justify-center ">
              <Link
                className="w-full justify-center sm:hidden "
                href="#"
                size="lg"
              >
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem>
              <NavbarBrand>
                <img
                  src={width > 400 ? logo_RastreaPatitas : soloPatitaLogo}
                  alt=""
                />
              </NavbarBrand>
            </NavbarItem>
          </NavbarContent>

          {/*Menu Hamburgesa-------------------------------------------------------------*/}
          <NavbarMenu className=" w-48 h-max md:w-96  " justify="start">
            <NavbarMenuItem className=" flex gap-4 ">
              <Avatar
                as="button"
                className="transition-transform border-solid border-1  border-moradoMain"
                color="moradoMain"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <Link className="w-full" href="#" size="lg">
                Perfil
                <br />
                Editar perfil
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className=" flex gap-4 ">
              <img src={PataIconNav} alt="logo" />
              <Link className="w-full" href="#" size="lg">
                Mis mascotas
                <br />
                Ver mis mascotas
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className=" flex gap-4 ">
              <img src={QrIconNav} alt="logo" />
              <Link className="w-full" href="#" size="lg">
                QR
                <br />
                Gestionar códigos
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className=" flex gap-4 ">
              <img src={ConfigIconNav} alt="logo" />
              <Link className="w-full text-celesteAcento" href="#" size="lg">
                Configuración
                <br />
                Editar
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className=" flex gap-3 " justify="end">
              <Link className="w-full justify-end " href="#" size="lg">
                Cerrar sesión
              </Link>
              <img src={LogoutIconNav} alt="logo" />
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
export default Header;
