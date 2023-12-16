/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

import { Button } from "@nextui-org/react";

const CardSearch = ({ qr, img, name, date, zone }) => {
	CardSearch.propTypes = {
		qr: PropTypes.string,
		img: PropTypes.string,
		name: PropTypes.string,
		date: PropTypes.string,
		zone: PropTypes.string,
	};

	return (
		<div className="flex-shrink-0 overflow-hidden relative bg-fondo shadow-card p-2 rounded-lg">
			<div>
				<p className="text-secondary font-bold text-[8px]">ACTIVA</p>
			</div>
			<div className="flex gap-8">
				<div>
					<h6 className="text-sm font-bold">{name}</h6>
					<p className="text-xs opacity-80">Fecha: {date}</p>
					<p className="text-xs opacity-80">Zona: {zone}</p>
				</div>
				<div className="flex items-end w-14">
					<img src={qr} alt="qr" className="" />
				</div>
			</div>
			<div className="mt-1">
				<img src={img} alt="" className="w-full object-cover aspect-video" />
			</div>
			<div className="mt-8 flex justify-between items-center">
				<div>
					<p className="text-secondary font-bold text-xs">
						Available soon. <br /> Get notified.
					</p>
				</div>
				<div>
					<Button className="bg-moradoMain border-2 text-xs p-0 border-moradoMain hover:text-black text-white hover:bg-transparent">
						Ver Alerta
					</Button>
				</div>
			</div>
		</div>
	);
};
export default CardSearch;
