// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } } = position;
      setLocation([latitude, longitude]);
    }, (error) => {
      console.error(error);
      setError(error);
    });
  }, []);

  return { location, error };
}

export default useCurrentLocation