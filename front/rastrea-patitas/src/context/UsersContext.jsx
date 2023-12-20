/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getUsers, login } from "../services/api";
import { useLocalStorageState } from "../utils/useLocalStorage";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
	const [user, setUser] = useLocalStorageState(null, "user");


	const loginUser = async (user) => {
		try {
			const response = await login(user);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	return <UsersContext.Provider value={{ loginUser, user, setUser }}>{children}</UsersContext.Provider>;
};

export { UsersContext, UsersProvider };
