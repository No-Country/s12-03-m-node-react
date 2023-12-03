/* eslint-disable no-unused-vars */
import React from "react";

import Info from "./Info";
import Steps from "./Steps";
import Actives from "./Actives";
import Faq from "./Faq";
import CatAndDog from "./CatAndDog";
import Footer from "../../ui/Footer";

const Onboarding = () => {
	return (
		<>

			<main>
				<Info />
				<Steps />
				<Actives />
				<Faq />
				<CatAndDog />

			</main>
			<Footer />
		</>
	);
};
export default Onboarding;
