import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import getMechanicLocation from "./locationService";

// ICONES
const userIcon = new L.Icon({
  iconUrl: "/pin-user.png",
  iconSize: [45, 45],
});

const mechanicIcon = new L.Icon({
  iconUrl: "/pin-mecanico.png",
  iconSize: [45, 45],
});

// COMPONENTE DE ROTA
function Routing({ userPos, mechanicPos }) {
  const map = useMap();
  const routingRef = useRef(null);

  useEffect(() => {
    if (!routingRef.current) {
      routingRef.current = L.Routing.control({
        waypoints: [L.latLng(userPos.lat, userPos.lng), L.latLng(mechanicPos.lat, mechanicPos.lng)],
        lineOptions: {
          styles: [{ color: "#0056ff", weight: 5 }],
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        show: false,
      }).addTo(map);
    } else {
      routingRef.current.setWaypoints([
        L.latLng(userPos.lat, userPos.lng),
        L.latLng(mechanicPos.lat, mechanicPos.lng),
      ]);
    }
  }, [userPos, mechanicPos, map]);

  return null;
}

export default function MapRealtime() {
  // Usuário parado
  const userPosition = { lat: -23.5505, lng: -46.6333 };

  // Estados
  const [mechanicPosition, setMechanicPosition] = useState({
    lat: -23.551,
    lng: -46.630,
  });

  // Atualizar o mecânico a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(async () => {
      const newPos = await getMechanicLocation();
      setMechanicPosition(newPos);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <MapContainer center={userPosition} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Usuário */}
        <Marker position={userPosition} icon={userIcon} />

        {/* Mecânico movendo */}
        <Marker position={mechanicPosition} icon={mechanicIcon} />

        {/* Rota */}
        <Routing userPos={userPosition} mechanicPos={mechanicPosition} />
      </MapContainer>
    </div>
  );
}
