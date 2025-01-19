import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Markers = ({ points }) => {
  const navigate = useNavigate();
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };
  const handleSaveLocation = (posicion) => {
    console.log("Llamada al detalle");
    navigate(`/detalleComentario?lat=${posicion.lat}&lng=${posicion.lng}`);
  }
  return (
    <>
      {points.map((point) => (
        
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
          onClick={() => handleSaveLocation(point)}
        >
          <span>
          <img src={`imgs/${point.tipo}.png`} width={50} alt="img" />{" "}
          </span>
        </AdvancedMarker>
        
      ))}
    </>
  );
};

export default Markers;
