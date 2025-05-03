import { useEffect, useState } from 'react';

const useGeoLocation = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error('Location error', error),
      { enableHighAccuracy: true }
    );
  }, []);

  return coords;
};

export default useGeoLocation;