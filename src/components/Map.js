import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = ({ coordinates, zoom = 13 }) => {
  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [24, 24],
  });

  return (
    <div className="h-full w-full">
      <MapContainer
        center={coordinates}
        zoom={zoom}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={coordinates} icon={markerIcon}>
          <Popup>WorkWise</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
