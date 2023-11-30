/* eslint-disable no-unused-vars */
import React from "react";

import catAndDog from "./img/catAndDog.svg";

const CatAndDog = () => {
	return (
		<section className="container mx-auto">
			<div className="flex justify-center mt-5 lg:mt-10">
				<img src={catAndDog} alt="cat and dog" />
			</div>
			<div className="mb-5">
				<h3 className="text-lg font-bold text-center lg:text-3xl">Llevemos tu mascota a casa</h3>
			</div>
		</section>
	);
};

export default CatAndDog;
