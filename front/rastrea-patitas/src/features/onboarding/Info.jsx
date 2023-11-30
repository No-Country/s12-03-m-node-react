/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@nextui-org/react";

import pre from "./img/pre.svg";

const Info = () => {
	return (
		<div className="w-full bg-[url('src/assets/bg-patitas.svg')]  bg-repeat px-5">
			<section className="container mx-auto">
				<div className="flex justify-center lg:items-center lg:gap-5">
					<div className="flex flex-col items-center justify-center gap-2 mt-5 w-[300px] lg:w-[550px] lg:gap-5">
						<div>
							<h2 className="font-bold text-center text-lg lg:text-5xl">¡Únete a nuestra comunidad solidaria!</h2>
						</div>
						<div>
							<p className="text-sm lg:text-2xl">
								Juntos, hagamos posible que las mascotas vuelvan a sus hogares. ¡Regístrate ahora y sé parte de la solución! 🐶🐱
							</p>
						</div>
						<div className="text-sm lg:text-2xl">
							<p className="w-full">Conectamos mascotas perdidas con sus dueños:</p>
							<ul className="ml-6 list-disc">
								<li>Publica mascotas extraviadas.</li>
								<li>Crea alertas para ayudar.</li>
								<li>Registra a tu mascota con un código QR único.</li>
							</ul>
						</div>
						<div className="flex justify-center lg:justify-start w-full">
							<Button className="bg-moradoMain border-2  border-moradoMain hover:text-black text-white hover:bg-transparent">
								Empezar Búsqueda
							</Button>
						</div>
					</div>
					<div className="hidden lg:block w-[500px]">
						<img src={pre} alt="pre" />
					</div>
				</div>
			</section>
		</div>
	);
};
export default Info;
