import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"
// Custom Marker Icon
const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const App = () => {
    const hospitalPositions = [
        { lat: 18.5051, lng: 73.8576, name: "Hospital A" },
        { lat: 18.5271, lng: 73.8640, name: "Hospital B" },
        { lat: 18.5072, lng: 73.8202, name: "Hospital C" },
    ];

    return (
        <div className="container">
            <div className="map-container">
                <MapContainer
                    center={[18.5004, 73.8550]}
                    zoom={12}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {hospitalPositions.map((hospital, index) => (
                        <Marker
                            key={index}
                            position={[hospital.lat, hospital.lng]}
                            icon={markerIcon}
                        >
                            <Popup>{hospital.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default App;