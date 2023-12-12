import axios from "axios";

const URL = 'https://s12-03-m-node-react.vercel.app/api/';

const getUsers = async () => {
  axios.get(`${URL}/users`).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

const getPets = async () => {
  axios.get(`${URL}/pets`).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

export { getUsers, getPets }
