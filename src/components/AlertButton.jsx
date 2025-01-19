import React from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useNavigate } from "react-router-dom";

const AlertButton = () => {
  const navigate = useNavigate();
  const map = useMap();

  const handleSaveLocation = () => {
    if (map) {
      const center = map.getCenter();
      const lat = center.lat();
      const lng = center.lng();

      // Usar el servicio de geocodificación inversa de Google Maps para obtener el nombre del lugar
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          const placeName = results[0].formatted_address;
          navigate(`/alerta?lat=${lat}&lng=${lng}&placeName=${placeName}`);
          console.log("center", lat, lng, typeof(placeName), placeName);
        } else {
          console.error("Geocoding failed: ", status);
        }
      });
    }
  };

  return (
    <button
      className="w-[90vw] absolute bottom-20 left-1/2 transform -translate-x-1/2 px-7 py-2 text-lg font-light rounded-md text-white bg-gradient-to-r from-[#113768] to-[#0b3b82]"
      onClick={handleSaveLocation}
    >
      Alert
    </button>
  );
};

export default AlertButton;
