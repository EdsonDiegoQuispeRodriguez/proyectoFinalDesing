"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
//import treess from "../data/trees";
import AlertButton from "../components/AlertButton";
import Markers from "../components/Markers";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Intro() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_PUBLIC_MAP_ID;

  const [trees, setTrees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/trees').then(response => {
        setTrees(response.data)
      })
  }, [])


  const mapOptions = {
    disableDefaultUI: true,
  };
  const defaultCenter = { lat: -16.3992754, lng: -71.5372471 };
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Si no se puede obtener la ubicación, usa la ubicación por defecto
          setCenter(defaultCenter);
        }
      );
    } else {
      // Si el navegador no soporta geolocalización, usa la ubicación por defecto
      setCenter(defaultCenter);
    }
  }, []);

  return (
    <div>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={center}
          defaultZoom={15}
          mapId={MAP_ID}
          options={mapOptions}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10">
          <img src="imgs/location.svg" width={60} alt="Marcador central" />
        </div>
        <AlertButton />
        <Markers points={trees} />
      </APIProvider>
    </div>
  );
}
