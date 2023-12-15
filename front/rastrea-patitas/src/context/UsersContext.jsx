/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";
import { getUsers, login } from "../services/apiPatitas";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
	const [user, setUser] = useState([]);

	const loginUser = async (user) => {
		try {
			const response = await login(user);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	return <UsersContext.Provider value={{ loginUser, user, setUser }}>{children}</UsersContext.Provider>;
};

export { UsersContext, UsersProvider };
