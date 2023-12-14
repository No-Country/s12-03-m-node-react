import { useContext } from "react";
import { PetsContext } from "./PetsContext";

export const usePetsContext = () => {
	return useContext(PetsContext);
};
