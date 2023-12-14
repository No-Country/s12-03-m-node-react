/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import img from "./img/cat.svg";
import { BsCalendarDateFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import mapa from "./img/Mapa.svg";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const LostAndFound = () => {
	return (
		<main className="bg-[url('src/assets/bg-patitas.svg')] bg-repeat">
			<div className="mx-auto container">
				<div className="w-full grid grid-cols-1">
					<section className="w-full grid grid-cols-6 place-items-center bg-white py-4">
						<button className="col-span-1">
							<FaArrowLeft className="text-letra text-lg" />
						</button>
						<h4 className="text-lg text-letra font-semibold col-span-4">Señor Mostachito</h4>
					</section>

					<section className="w-full relative">
						<img src={img} alt="" className="w-full" />
						<h4 className="text-lg text-white bg-moradoMain py-1 px-4 rounded-xl font-semibold absolute top-5 right-5">
							Perdido
						</h4>
					</section>

					<section className="m-4">
						<h4 className="text-lg text-letra font-semibold">Señor Mostachito</h4>
						<p className="text-letra text-sm">Perdido hace 3 días</p>
					</section>

					<section className="m-4 p-4 rounded-xl bg-white shadow-card">
						<h6 className="text-letra font-bold">Descripción</h6>
						<p className="text-sm text-letra">
							Es muy cariñoso le gusta recibir cariño y tirarse al piso para enseñar su pancita. Responde por su nombre.
						</p>
					</section>

					<section className="m-4 flex flex-col gap-2">
						<div className="flex gap-2">
							<BsCalendarDateFill className="text-moradoMain" />
							<p className="text-sm text-letra">Notificado el 26/11/2023</p>
						</div>
						<div className="flex gap-2">
							<GrLocation className="text-moradoMain" />
							<p className="text-sm text-letra">Ubicación sector Santander</p>
						</div>
						<div>
							<img src={mapa} alt="" className="w-full" />
						</div>
					</section>

					<Accordion variant="splitted">
						<AccordionItem
							key="1"
							aria-label="Características de la mascota"
							title="Características de la mascota"
							className="shadow-card">
							<div className="flex justify-between items-center border-t-1 border-moradoMain py-2">
								<h6 className="text-letra font-bold">Especie</h6>
								<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Gato</p>
							</div>

							<div className="flex justify-between items-center border-t-1 border-moradoMain py-2">
								<h6 className="text-letra font-bold">Sexo</h6>
								<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Macho</p>
							</div>

							<div className="flex justify-between items-center border-t-1 border-moradoMain py-2">
								<h6 className="text-letra font-bold">Edad</h6>
								<p className="text-sm text-letra">1 - 2 años</p>
								<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Joven</p>
							</div>

							<div className="flex justify-between items-center border-t-1 border-moradoMain py-2">
								<h6 className="text-letra font-bold">Color</h6>
								<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Bicolor</p>
							</div>

							<div className="flex justify-between items-center border-t-1 border-moradoMain py-2">
								<h6 className="text-letra font-bold">Tamaño*</h6>
								<p className="text-sm text-letra">25 - 40 cm</p>
								<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Pequeño</p>
							</div>

							<div className="">
								<p className="text-sm text-letra py-2 rounded-xl ">
									* De acuerdo a la longitud que hay desde las patas hasta el lomo del animal
								</p>
							</div>
						</AccordionItem>
						<AccordionItem key="2" aria-label="Datos del dueño" title="Datos del dueño" className="shadow-card">
							<div className="flex items-center gap-2">
								<FaUserCircle className="text-moradoMain text-xl" />
								<p className="text-sm text-letra font-bold">Josefina Lopéz</p>
							</div>
							<div className="flex justify-between items-center">
								<div className="flex gap-2">
									<FaPhone className="text-moradoMain text-xl" />
									<p className="text-sm text-letra font-bold">+54 9 261 123-4567</p>
								</div>
								<Button className="bg-white h-10 w-20 px-4 border-2 border-moradoMain text-moradoMain">Marcar</Button>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
};
export default LostAndFound;
