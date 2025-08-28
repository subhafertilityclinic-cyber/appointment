import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import React from 'react';

const svgMarker = L.icon({
  iconUrl: "/location.svg",
  iconSize: [50, 50],      // adjust to your SVG size
  iconAnchor: [25, 50],    // bottom-center of icon
  popupAnchor: [0, -32],
});
const Map = React.memo(() => {
  return (<section className="w-full max-w-[360px] min-w-[300px] flex flex-col items-center mt-2 " >
    <strong className="font-bold font-heading text-main-black text-2xl  " >
      visit us at:
    </strong>
    <MapContainer
      center={[27.679466469087807, 84.4318247396386]}
      zoom={17}
      scrollWheelZoom={false}
      className="w-full max-w-maxi min-w-[300px] h-[200px] border-2 border-main-accent rounded-2xl "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.679466469087807, 84.4318247396386]} icon={svgMarker} >
        <Popup className="font-bold text-main-black font-heading" >
          Subha Fertility <br /> clinic
        </Popup>
      </Marker>
    </MapContainer>
  </section>
  );
});

export default Map;

