/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAlerts } from "../services/api";


const AlertsContext = createContext();

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [alert, setAlert] = useState(null);
  const [alertFilter, setAlertFilter] = useState(null);
  const [datosFiltrados, setDatosFiltrados] = useState(null)

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

  const getAlertQuery = (queryData) => {

    const resultadoFiltrado = alerts.filter(objeto => {
      for (const clave in queryData) {
        // Verifica si la clave está presente en el objeto y si el valor coincide
        if (objeto.pet_id[clave].toLowerCase() !== queryData[clave].toLowerCase()) {
          return false; // No cumple con uno de los criterios, se descarta
        }
      }
      return true; // Cumple con todos los criterios

    }
    );

    console.log(resultadoFiltrado);

    // const resultadoFiltrado = alerts.filter(objeto => objeto.pet_id.species.toLowerCase() === queryData.toLowerCase());
    getAlertsFilter(resultadoFiltrado)
  }

  const getAlertsFilter = data => {

    setAlertFilter(data);

  }

  const alertFilterInitial = () => {
    setAlertFilter(null);
  }

  const getAlertsStatus = (status) => {

    const newResult = alertFilter.filter((alert) => alert.status === status);
    // console.log(newResult);
    setDatosFiltrados(newResult)
    // setAlertFilter(newResult);

  }



  return (
    <AlertsContext.Provider value={{ alerts, setAlerts, alert, setAlert, getAlertsFilter, alertFilter, alertFilterInitial, getAlertsStatus, getAlertQuery, datosFiltrados }}>
      {children}
    </AlertsContext.Provider>
  )
}

export { AlertsContext, AlertsProvider }