import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function OnliMap({ lat, lng }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDW-ygtqIfSe5TbV3gSQtLoCMOHsrFsYkE",
  });
  return (
    <div className="w-[400px] h-[220px] mt-5">
      {isLoaded? <GoogleMap
        center={{ lat, lng }}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <MarkerF position={{ lat, lng }} ><div>hola</div></MarkerF>
      </GoogleMap>: null}
    </div>
  );
}

export default OnliMap;
