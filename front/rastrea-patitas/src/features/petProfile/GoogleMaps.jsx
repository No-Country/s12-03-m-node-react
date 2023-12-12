import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

function GoogleMaps({ lati, lngi }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDW-ygtqIfSe5TbV3gSQtLoCMOHsrFsYkE",
  });

  return (
    <div className=" w-full flex justify-center items-center my-5 ">
      <div className=" w-[328px] h-52 ">
        {isLoaded ? (
          <GoogleMap
            center={{ lat: lati, lng: lngi }}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            
          >
            {/**markers here */}
            <MarkerF position={{lat: lati, lng: lngi}} />
          </GoogleMap>
        ) : null}
      </div>
    </div>
  );
}

export default GoogleMaps;
