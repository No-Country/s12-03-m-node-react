/* eslint-disable no-unused-vars */
import React from "react";

import { Button } from "@nextui-org/react";

import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";

import qr from "./img/qr.svg";
import CardSearch from "../../ui/CardSearch";
const Actives = () => {
	return (
		<section className="container mx-auto">
			<div className="mt-5 flex flex-col gap-5">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-moradoMain">Búsquedas activas</h2>
					<Button className="bg-moradoMain border-2  border-moradoMain hover:text-black text-white hover:bg-transparent">
						Ver más
					</Button>
				</div>

				<div className="flex flex-col items-center justify-center gap-5 mt-5">
					<div className="flex overflow-x-scroll gap-5 py-5 md:overflow-x-auto md:justify-center pb-4" style={{ width: "100%" }}>
						<CardSearch qr={qr} img={image1} name="Mia" date="10/10/2020" zone="CABA" />
						<CardSearch qr={qr} img={image2} name="Mia" date="10/10/2020" zone="CABA" />
						<CardSearch qr={qr} img={image3} name="Mia" date="10/10/2020" zone="CABA" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Actives;
