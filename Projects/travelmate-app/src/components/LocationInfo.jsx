import { useEffect, useState } from "react";

const LocationInfo = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude.toFixed(3),
          lng: pos.coords.longitude.toFixed(3),
        });
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded mb-4 w-[500px]  place-self-center">
      <h2 className="font-semibold">Your Location</h2>
      {location ? (
        <p>Latitude: {location.lat} | Longitude: {location.lng}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationInfo;
