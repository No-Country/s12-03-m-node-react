/* eslint-disable no-unused-vars */
import React from "react";
import alert from "./img/alert.svg";
import disseminate from "./img/disseminate.svg";
import found from "./img/found.svg";

const Steps = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col items-center justify-center gap-5 mt-5 lg:mt-40">
				<div className="px-5 lg:mb-5">
					<h2 className="text-lg font-bold text-center lg:text-5xl">Pasos para encontrar tu mascota</h2>
				</div>
				<div className="flex overflow-x-scroll md:overflow-x-auto md:justify-center pb-4" style={{ width: "100%" }}>
					<div className="flex-shrink-0 w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] overflow-hidden relative">
						<img src={alert} alt="" className="w-full h-full" />
					</div>
					<div className="flex-shrink-0 w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] overflow-hidden relative">
						<img src={disseminate} alt="" className="w-full h-full" />
					</div>
					<div className="flex-shrink-0 w-[250px] h-[300px] lg:w-[300px] lg:h-[400px] overflow-hidden relative">
						<img src={found} alt="" className="w-full h-full" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Steps;
