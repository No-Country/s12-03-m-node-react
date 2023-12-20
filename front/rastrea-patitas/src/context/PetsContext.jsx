/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getPetByID, getPets } from "../services/api";
import { useLocalStorageState } from "../utils/useLocalStorage";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
	const [pets, setPets] = useLocalStorageState(null, "pets");
	const [pet, setPet] = useLocalStorageState(null, "pet");

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
