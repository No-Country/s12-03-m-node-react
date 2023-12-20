/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, Avatar, Link
} from "@nextui-org/react";
import PataIconNav from "../assets/pata.svg";
import QrIconNav from "../assets/qrIcon.svg";
import ConfigIconNav from "../assets/configIcon.svg";
import LogoutIconNav from "../assets/logoutIcon.svg";
import soloPatitaLogo from "../assets/soloPatitaLogo.svg";
import logo_RastreaPatitas from "../assets/logos/logo_RastreaPatitas.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import HambugerMenu from "../features/hamburgerMenu/HamburgerMenu";
import HambugerMenu2 from "../features/hamburgerMenu/HamburgerMenu2";
import { useUserContext } from "../context/useUserContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const { user } = useUserContext();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      // Cerrar la barra de navegación si se hace clic fuera de ella
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    // Agregar un event listener global para detectar clics fuera de la barra de navegación
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Eliminar el event listener al desmontar el componente
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" w-full "
      maxWidth="full"
      ref={navbarRef}
    >
      {isLogin === false ? (
        <>
          <NavbarContent>
            <NavbarItem>
              {user ? <HambugerMenu  /> : <HambugerMenu2  />}
            </NavbarItem>
            <NavbarBrand>
              <img
                src={width > 400 ? logo_RastreaPatitas : soloPatitaLogo}
                alt=""
              />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="flex gap-4" justify="end">
            {!user && <NavbarItem>
              <Button
                type="submit"
                className="bg-moradoMain text-white"
                onClick={() => navigate("/login")}
              >
                Ingresar
              </Button>
            </NavbarItem>}
          </NavbarContent>
        </>
      ) : (
        <>
          {/*Si esta logueado------------------------------------------------------------- className="hidden sm:flex gap-4" */}
          <NavbarContent justify="start">
            <NavbarItem>

              <HambugerMenu />
            </NavbarItem>

            <NavbarItem className="w-full justify-center  sm:hidden">
              <Link
                className="w-full justify-center sm:hidden text-dark font-['Poppins'] font-semibold	 "
                href="#"
                size="lg"
              >
                Inicio
              </Link>
            </NavbarItem>
            <img
              src={width > 639 ? logo_RastreaPatitas : soloPatitaLogo}
              alt=""
            />


          </NavbarContent>
        </>
      )}
    </Navbar>
  );
}
export default Header;
