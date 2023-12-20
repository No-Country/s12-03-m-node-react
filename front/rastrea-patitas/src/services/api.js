import axios from "axios";

const URL = "https://s12-03-m-node-react.vercel.app/api";

const getUsers = async () => {
	try {
		const result = await axios.get(`${URL}/users`)
		return result.data
	} catch (error) {
		console.log(error)
	}
}

const getUserByID = async (id) => {
	try {
		const result = await axios.get(`${URL}/users/${id}`)
		return result.data
	} catch (error) {
		console.log(error)
	}
}




const getPets = async () => {
	try {
		const result = await axios.get(`${URL}/pets`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const getPetByID = async (_id) => {
	try {
		const result = await axios.get(`${URL}/pets/${_id}`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
}

const getAlerts = async () => {
	try {
		const result = await axios.get(`${URL}/alerts`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const getAlertByID = async (_id) => {
	try {
		const result = await axios.get(`${URL}/alerts/${_id}`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
}


const login = async (data) => {
	try {
		const result = await axios.post(`${URL}/session/login`, data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(result);
		const { token, user } = result.data;
		return { token, user };
	} catch (error) {
		return error.response;
	}
};

const registerUser = async (data) => {
	try {
		const result = await axios.post(`${URL}/session/register`, data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const loginWithGoogle = async () => {
	try {
		const result = await axios.get(`${URL}/session/auth/google`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const loginWithFacebook = async () => {
	try {
		const result = await axios.get(`${URL}/session/auth/facebook`);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

export { getUsers, getPets, loginWithGoogle, loginWithFacebook, login, registerUser, getAlerts, getPetByID, getAlertByID,getUserByID, };
