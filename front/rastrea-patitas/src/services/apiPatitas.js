import axios from "axios";

const URL = 'https://s12-03-m-node-react.vercel.app/api';

const getUsers = async () => {
  try {
    const result = await axios.get(`${URL}/users`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const getPets = async () => {
  try {
    const result = await axios.get(`${URL}/pets`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const loginWithGoogle = async () => {
  try {
    const result = await axios.get(`${URL}/session/auth/google`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const loginWithFacebook = async () => {
  try {
    const result = await axios.get(`${URL}/session/auth/facebook`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const login = async (data) => {
  try {
    const result = await axios.post(`${URL}/session/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const registerUser = async (data) => {
  try {
    const result = await axios.post(`${URL}/session/register`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export { getUsers, getPets, loginWithGoogle, loginWithFacebook, login, registerUser }
