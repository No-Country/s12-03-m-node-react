/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@nextui-org/react";

const Info = () => {
	return (
		<div className="w-full bg-[url('src/assets/bg-patitas.svg')] bg-cover">
			<section className="container mx-auto">
				<div className="flex flex-col items-center justify-center gap-2 mt-5">
					<div>
						<h2 className="font-bold text-center text-lg">¡Únete a nuestra comunidad solidaria!</h2>
					</div>
					<div>
						<p className="text-sm">
							Juntos, hagamos posible que las mascotas vuelvan a sus hogares. ¡Regístrate ahora y sé parte de la solución! 🐶🐱
						</p>
					</div>
					<div className="text-sm">
						<p className="w-full">Conectamos mascotas perdidas con sus dueños:</p>
						<ul className="ml-6 list-disc">
							<li>Publica mascotas extraviadas.</li>
							<li>Crea alertas para ayudar.</li>
							<li>Registra a tu mascota con un código QR único.</li>
						</ul>
					</div>
					<div className="">
						<Button className="bg-moradoMain border-2  border-moradoMain hover:text-black text-white hover:bg-transparent">
							Empezar Búsqueda
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Info;
