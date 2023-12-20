/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAlerts } from "../services/api";
import { useLocalStorageState } from "../utils/useLocalStorage";


const AlertsContext = createContext();

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [alert, setAlert] = useLocalStorageState(null, "alert");
  const [position, setPosition] = useLocalStorageState(null, "position");
  const [error, setError] = useLocalStorageState(null, "error");
  const [openMap, setOpenMap] = useLocalStorageState(false, "openMap");

  const handleOpenMap = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          console.log("Latitud:", latitud);
          console.log("Longitud:", longitud);

          setPosition({ lat: latitud, lng: longitud });
          setOpenMap(true);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error.message);
          setError(error.message);
        }
      );
    } else {
      setError("La geolocalización no está disponible en este dispositivo.");
    }
  };

  useEffect(() => {
    getAlerts().then((alerts) => {
      setAlerts(alerts);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <AlertsContext.Provider value={{ alerts, setAlerts, alert, setAlert, position, setPosition, error, setError, openMap, setOpenMap, handleOpenMap }}>
      {children}
    </AlertsContext.Provider>
  )
}

export { AlertsContext, AlertsProvider }