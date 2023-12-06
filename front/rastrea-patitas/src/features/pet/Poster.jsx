/* eslint-disable no-unused-vars */
import React from "react";
import pet1 from "../../assets/images/pet1.png";
import { FaCalendarAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import qr from "../../assets/qr.svg";
import logo from "../../assets/logos/logo_RastreaPatitas.svg";
import { Chip } from "@nextui-org/react";

const Poster = () => {
	return (
		<div className='w-[360px] md:w-screen bg-[url("/src/assets/bg-patitas.svg")] flex flex-col items-center justify-center'>
			<div className="bg-[#9087CA] w-full flex justify-center items-center py-5">
				<h1 className="text-3xl font-bold text-white">Perdido</h1>
			</div>

			<div className="flex flex-col items-center justify-between w-[600px] gap-3 mt-5">
				<img src={pet1} alt="pet1" className="w-32 h-32 md:w-60 md:h-60" />
				<h3 className="text-3xl font-bold pb-3 pt-3">Señor Mostachito</h3>
				<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
					<FaCalendarAlt className="w-6 h-6" />
					<p className="md:text-xl">Notificado el 26/11/2023</p>
				</div>
				<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
					<GiPositionMarker className="w-6 h-6" />
					<p className="md:text-xl">Ubicación sector Santander</p>
				</div>
				<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
					<MdAccountCircle className="w-6 h-6" />
					<p className="md:text-xl">Josefina Lopéz</p>
				</div>
				<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
					<FaPhoneAlt className="w-6 h-6" />
					<p className="md:text-xl">+54 9 261 123-4567</p>
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 mb-10 bg-slate-100 p-4 md:w-[550px]">
				<img src={qr} alt="qr" className="w-32 h-32 md:w-48 md:h-48" />
				<div className="flex flex-col items-start justify-center w-[230px] md:w-[300px] gap-2">
					<h5 className="text-xl md:text-2xl font-bold text-center">Características</h5>
					<p className="md:text-xl">
						Especie: <Chip className="md:text-xl">Gato</Chip>
					</p>
					<span className="md:text-xl">
						Edad: 1-2 años <Chip className="md:text-xl">Joven</Chip>
					</span>
					<p className="md:text-xl">Sexo: Macho</p>
					<span className="md:text-xl">
						Tamaño*: 25 - 40 cm <Chip className="md:text-xl">Pequeño</Chip>
					</span>
					<p className="md:text-xl">Color: Bicolor</p>
					<p>* De acuerdo a la longitud que hay desde las patas hasta el lomo</p>
				</div>
			</div>
			<img src={logo} alt="logo" className="w-60 h-14" />
			<p className="text-[#887C7C]">Encuentra a tu mascota</p>
		</div>
	);
};

export default Poster;
