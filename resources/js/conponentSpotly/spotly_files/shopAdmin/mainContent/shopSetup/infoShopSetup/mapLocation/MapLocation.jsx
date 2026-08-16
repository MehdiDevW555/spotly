import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ onSelectLocation }) {

    useMapEvents({
        click(e) {

            onSelectLocation(
                e.latlng.lat,
                e.latlng.lng
            );

        },
    });

    return null;
}

export default function MapLocation({ onSelectLocation }) {

    return (
        <MapContainer
            center={[36.365, 6.614]} // قسنطينة
            zoom={13}
            style={{
                height: "350px",
                width: "100%",
                borderRadius: "20px",
                marginBottom: "20px",
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarker
                onSelectLocation={onSelectLocation}
            />
        </MapContainer>
    );
}
