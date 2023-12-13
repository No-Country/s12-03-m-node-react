/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getPets } from "../services/apiPatitas";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    getPets().then((data) => {
      setPets(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <PetsContext.Provider value={{ pets, setPets }}>
      {children}
    </PetsContext.Provider>
  )
}

export { PetsContext, PetsProvider }