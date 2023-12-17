import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import imgMap from "./images/map.jpg";
import { Button } from "@nextui-org/button";
import { FaLocationDot } from "react-icons/fa6";

function GoogleMaps({ lati, lngi, register, setP}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDW-ygtqIfSe5TbV3gSQtLoCMOHsrFsYkE",
  });

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [openMap, setOpenMap] = useState(false);

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

  return (
    <div className="w-full flex justify-center items-center">
      {!openMap ? (
        <div className="w-[328px] h-52 mb-8 relative">
          <img
            className="mb-3 w-full h-full object-cover"
            src={imgMap}
            alt="image not found"
          />
          <Button
            className="bg-moradoMain text-white absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-12"
            startContent={<FaLocationDot />}
            onClick={handleOpenMap}
          >
            Añadir ubicación
          </Button>
        </div>
      ) : (
        <div className="w-[328px] h-52 mb-9">
          {isLoaded ? (
            <GoogleMap
              center={position || { lat: 0, lng: 0 }}
              zoom={12}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              onClick={setP(position)}         

            >
              {/* Marcadores aquí */}
              {/* <MarkerF position={{ lat: lati, lng: lngi }} /> */}
            </GoogleMap>
          ) : null}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GoogleMaps;
