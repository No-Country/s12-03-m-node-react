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

export { getUsers, getPets }
