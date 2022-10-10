import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

var icon = L.icon({
    iconUrl: "https://img.icons8.com/plasticine/2x/marker.png",
    iconSize: [38, 45],
    iconAnchor: [19, 40],
    popupAnchor: [0, -30],
});

const Map = () => {
    return (
        <div>
            <MapContainer
                style={{ width: "100vw", height: "100vh" }}
                center={[33.8975867, 10.0900375]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.8845867, 10.0800375]} icon={icon}>
                    <Popup>
                        {/* <h1>LAVAGE MHEMED SAID BOUNTA</h1>
            <img
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhciUyMHdhc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="hazem"
            />
            V4R3+8G5, Gabès <br /> V4R3+8G5، قابس
            <br />
            21161916 */}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
