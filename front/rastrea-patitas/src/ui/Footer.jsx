/* eslint-disable no-unused-vars */
import React from "react";
import logoRastraPatitas from '../assets/logos/logo_RastreaPatitas.svg';
import logoPlaystore from '../assets/logos/logo_playstore.svg';
import logoAppStore from '../assets/logos/logo_appStore.svg';

function Footer() {
  const footerLinks = [
    { title: "Objetivos", path: "#Objetivos" },
    { title: "Estadisticas", path: "#Estadisticas" },
    { title: "Contacto", path: "#Contacto" },
  ];

  return (
    <footer className="bg-[#37474F]  h-56 flex flex-row lg:justify-between justify-center px-28 w-screen py-16 fixed bottom-0">
      <div className="  px-6 flex-col font-inter  ">
        <div className=" text-[#fff]">
          <a className=" mb-3" href="#License">
            License
          </a>
          <ul className=" flex ">
            {footerLinks.map((link) => (
              <li className=" mb-6" key={link.title}>
                <a className=" mr-6" href={link.path}>
                  {" "}
                  {link.title}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-[#D1D5DB] flex h-unit-15 text-sm font-normal ">
          <span className=" pt-7">
            © 2023 Rastrea Patitas. Todos los derechos Reservados
          </span>
        </div>
      </div>

      {/* Segundo bloque (visible solo en pantallas grandes) */}
      <div className="hidden lg:block px-6 lg:grid-cols-4 ">
        <img src={logoRastraPatitas} alt="logo" />
      </div>

      {/* Tercer bloque (visible solo en pantallas grandes) */}
      <div className="hidden lg:block px-6  text-[#D1D5DB] lg:grid-cols-4  font-inter  font-normal xl:text-2xl notebook:text-sm lg:text-lg">
        <p>Conseguí la app</p>
        <img className=" my-4" src={logoAppStore} alt="logo appStore" />
        <img src={logoPlaystore} alt="logo playstore" />
      </div>
    </footer>

  );
}

export default Footer;
