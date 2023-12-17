/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getPetByID, getPets } from "../services/api";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
	const [pets, setPets] = useState(null);
	const [pet, setPet] = useState(null);

	const getPetData = async (_id) => {
		try {
			const result = await getPetByID(_id);
			setPet(result);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getPets()
			.then((data) => {
				setPets(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <PetsContext.Provider value={{ pets, setPets, getPetData }}>{children}</PetsContext.Provider>;
};

export { PetsContext, PetsProvider };
