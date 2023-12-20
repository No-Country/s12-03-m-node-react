import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const apiKey =import.meta.env.VITE_API_GMAPS 
function Map({ lat, lng }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  apiKey
  });
  return (
    <div className="w-[300px] h-[220px] mb-4">
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

export default Map;