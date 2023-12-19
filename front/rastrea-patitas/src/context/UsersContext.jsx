/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getUsers, login } from "../services/api";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
	const [user, setUser] = useState(null);


	const loginUser = async (user) => {
		try {
			const response = await login(user);
			console.log(response);
			setUser(response.user);
			localStorage.setItem('user', JSON.stringify(response.user));

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	return <UsersContext.Provider value={{ loginUser, user, setUser }}>{children}</UsersContext.Provider>;
};

export { UsersContext, UsersProvider };
