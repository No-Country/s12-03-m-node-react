/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@nextui-org/react";

import Info from "./Info";
import Steps from "./Steps";

import alert from "./img/alert.svg";
import disseminate from "./img/disseminate.svg";
import found from "./img/found.svg";
const Onboarding = () => {
	return (
		<main className="p-2">
			<Info />
			<Steps />
			<section className="container mx-auto">
				<div className="mt-5 flex flex-col gap-5">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-bold text-moradoMain">Búsquedas activas</h2>
						<Button className="bg-moradoMain border-2  border-moradoMain hover:text-black text-white hover:bg-transparent">
							Ver más
						</Button>
					</div>

					<div className="flex flex-col items-center justify-center gap-5 mt-5">
						<div className="flex overflow-x-scroll md:overflow-x-auto md:justify-center pb-4" style={{ width: "100%" }}>
							<div className="flex-shrink-0 w-[200px] h-[300px] overflow-hidden relative">
								<img src={alert} alt="" className="w-full h-full" />
							</div>
							<div className="flex-shrink-0 w-[200px] h-[300px] overflow-hidden relative">
								<img src={disseminate} alt="" className="w-full h-full" />
							</div>
							<div className="flex-shrink-0 w-[250px] h-[300px] overflow-hidden relative">
								<img src={found} alt="" className="w-full h-full" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
export default Onboarding;
