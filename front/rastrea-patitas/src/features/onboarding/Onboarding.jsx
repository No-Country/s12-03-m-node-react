/* eslint-disable no-unused-vars */
import React from "react";

import Info from "./Info";
import Steps from "./Steps";
import Actives from "./Actives";
import Faq from "./Faq";
import CatAndDog from "./CatAndDog";
import { Helmet } from "react-helmet";

const Onboarding = () => {
	return (
		<>
			<Helmet>
        		<title>Rastrea Patitas</title>
			</Helmet>
			<main>
				<Info />
				<Steps />
				<Actives />
				<Faq />
				<CatAndDog />
			</main>
		</>
	);
};
export default Onboarding;
