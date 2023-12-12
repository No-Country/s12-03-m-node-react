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

import Pdf from "../../ui/Pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const LostAndFound = () => {
	return (
		<main className="bg-[url('src/assets/bg-patitas.svg')] bg-repeat">
			<div className="mx-auto max-w-3xl">
				<section className="w-full grid grid-cols-6 place-items-center bg-white py-4">
					<button className="col-span-1">
						<FaArrowLeft className="text-letra text-lg" />
					</button>
					<h4 className="text-lg text-letra font-semibold col-span-4">Señor Mostachito</h4>
				</section>
				<section className="my-4 hidden md:block ">
					<h4 className="text-lg text-letra font-semibold">Señor Mostachito</h4>
					<p className="text-letra text-sm">Perdido hace 3 días</p>
				</section>

				<div className="w-full grid grid-cols-1 gap-y-2 gap-x-4 md:grid-cols-10 md:grid-rows-8">
					<section className="w-full relative md:col-span-6 md:row-span-4">
						<img src={img} alt="" className="w-full" />
						<h4 className="text-lg text-white bg-moradoMain py-1 px-4 rounded-xl font-semibold absolute top-5 right-5">
							Perdido
						</h4>
					</section>

					<section className="m-4 md:hidden">
						<h4 className="text-lg text-letra font-semibold">Señor Mostachito</h4>
						<p className="text-letra text-sm">Perdido hace 3 días</p>
					</section>

					<section className="m-4 p-4 md:m-0 rounded-xl md:col-span-4 md:row-span-1 bg-white shadow-card">
						<h6 className="text-letra font-bold">Descripción</h6>
						<p className="text-sm text-letra">
							Es muy cariñoso le gusta recibir cariño y tirarse al piso para enseñar su pancita. Responde por su nombre.
						</p>
					</section>

					<section className="m-4 md:m-0 flex flex-col justify-between gap-2 md:col-span-4 md:row-span-3 md:p-4 md:bg-white shadow-card rounded-xl">
						<div className="flex gap-4 flex-col">
							<div className="flex gap-2 items-center">
								<BsCalendarDateFill className="text-moradoMain md:font-bold md:text-lg" />
								<p className="text-sm text-letra md:font-bold ">Notificado el 26/11/2023</p>
							</div>
							<div className="flex gap-2 items-center">
								<GrLocation className="text-moradoMain md:font-bold md:text-lg" />
								<p className="text-sm text-letra md:font-bold">Ubicación sector Santander</p>
							</div>
						</div>
						<div>
							<img src={mapa} alt="" className="w-full" />
						</div>
					</section>

					<section className="hidden md:grid md:col-span-6 md:grid-cols-5 gap-2 px-4 py-2 rounded-xl bg-white shadow-card">
						<div className="md:col-span-5 border-b-2">
							<h4 className="text-3xl text-letra font-semibold">Características</h4>
						</div>
						<div className="flex justify-between items-center md:col-span-2">
							<h6 className="text-letra font-bold">Especie</h6>
							<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Gato</p>
						</div>

						<div className="flex justify-between items-center md:col-span-3">
							<h6 className="text-letra font-bold">Edad</h6>
							<p className="text-sm text-letra">1 - 2 años</p>
							<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Joven</p>
						</div>

						<div className="flex justify-between items-center md:col-span-2">
							<h6 className="text-letra font-bold">Sexo</h6>
							<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Macho</p>
						</div>

						<div className="flex justify-between items-center md:col-span-3">
							<h6 className="text-letra font-bold">Tamaño*</h6>
							<p className="text-sm text-letra">25 - 40 cm</p>
							<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Pequeño</p>
						</div>

						<div className="flex justify-between items-center md:col-span-2">
							<h6 className="text-letra font-bold">Color</h6>
							<p className="text-sm text-letra py-2 w-20 flex justify-center rounded-xl bg-[#DBD9EA]">Bicolor</p>
						</div>

						<div className="md:col-span-5">
							<p className="text-sm md:text-xs text-letra ">
								* De acuerdo a la longitud que hay desde las patas hasta el lomo del animal
							</p>
						</div>
					</section>

					<section className="hidden md:flex md:flex-col md:col-span-4 gap-4 px-4 py-2 rounded-xl bg-white shadow-card">
						<div className="md:col-span-5 border-b-2">
							<h4 className="text-3xl text-letra font-semibold">Datos del dueño</h4>
						</div>
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
					</section>

					<Accordion variant="splitted" className=" w-full md:hidden">
						<AccordionItem
							key="1"
							aria-label="Características de la mascota"
							title="Características de la mascota"
							className="shadow-card md:col-span-3">
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
						<AccordionItem key="2" aria-label="Datos del dueño" title="Datos del dueño" className="shadow-card md:col-span-2">
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
				<PDFDownloadLink document={<Pdf />} fileName={`mascota.pdf`}>
					{({ loading, url, error, blob }) => {
						if (loading)
							return <Button className="bg-white h-10 w-20 px-4 border-2 border-moradoMain text-moradoMain">Cargando...</Button>;
						return <Button className="bg-white h-10 w-20 px-4 border-2 border-moradoMain text-moradoMain">Descargar</Button>;
					}}
				</PDFDownloadLink>

				<PDFViewer className="w-full h-screen">
					<Pdf />
				</PDFViewer>
			</div>
		</main>
	);
};
export default LostAndFound;
