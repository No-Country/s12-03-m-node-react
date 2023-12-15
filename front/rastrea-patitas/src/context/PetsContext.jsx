/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getPets } from "../services/api";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
	const [pets, setPets] = useState(null);
	const [pet, setPet] = useState(null);

	const getPetByID = async (_id) => {
		try {
			const petByID = await getPets(`/pet/${_id}`);
			setPet(petByID);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPets()
			.then((data) => {
				setPets(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <PetsContext.Provider value={{ pets, setPets, getPetByID, pet, setPet }}>{children}</PetsContext.Provider>;
};

export { PetsContext, PetsProvider };
