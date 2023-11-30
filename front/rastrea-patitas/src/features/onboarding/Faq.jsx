/* eslint-disable no-unused-vars */
import React from "react";

import dogQuestions from "./img/dogQuestions.svg";

const Faq = () => {
	return (
		<div className="w-full bg-[url('src/assets/bg-patitas.svg')] bg-repeat mt-20">
			<div className="w-full bg-moradoMain p-5 relative shadow-dog">
				<h4 className="text-lg font-bold text-center text-white lg:text-5xl">Preguntas Frecuentes</h4>
				<img src={dogQuestions} alt="" className="absolute translate-y-[-100%] top-1 translate-x-1/2 right-1/2" />
			</div>
			<section className="container md:max-w-3xl mx-auto pt-10 px-5 ">
				<div className="flex flex-col items-center justify-center gap-5 md:grid md:grid-cols-2 md:grid-rows-3">
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Cómo puedo publicar información de una mascota perdida en la página?</h4>
					</div>
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Cómo puedo realizar el registro de mi mascota en la página?</h4>
					</div>
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Qué debo hacer si encuentro una mascota perdida con un código QR en su collar?</h4>
					</div>
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Cómo puedo crear alertas para recibir alertas de mascotas perdidas en mi área?</h4>
					</div>
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Qué debo hacer si encuentro una mascota perdida con un código QR en su collar?</h4>
					</div>
					<div className="p-4 bg-fondo rounded-xl font-bold text-secondary text-sm w-full">
						<h4>¿Qué debo hacer si recibo una alerta de una mascota perdida que podría haber visto?</h4>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Faq;
