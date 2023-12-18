/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAlerts } from "../services/api";


const AlertsContext = createContext();

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getAlerts().then((alerts) => {
      setAlerts(alerts);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  // const getUserAlertsByUserId = (userId) => {
  //   return alerts.filter((alert) => alert.userId === userId);
  // }

  return (
    <AlertsContext.Provider value={{ alerts, setAlerts, alert, setAlert }}>
      {children}
    </AlertsContext.Provider>
  )
}

export { AlertsContext, AlertsProvider }