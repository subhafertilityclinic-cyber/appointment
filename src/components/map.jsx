import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';

const Map = React.memo(() => {
  return (<section className="w-full max-w-[360px] min-w-[300px] flex flex-col items-center mt-2 " >
    <strong className="font-bold font-heading text-main-black text-2xl  " >
      visit us at:
    </strong>
    <MapContainer
      center={[27.679466469087807, 84.4318247396386]}
      zoom={17}
      scrollWheelZoom={true}
      className="w-full max-w-[360px] min-w-[300px] h-[200px] border-2 border-main-gray rounded-2xl "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.679466469087807, 84.4318247396386]}>
        <Popup className="font-bold text-main-black font-heading" >
          Subha Fertility <br /> clinic
        </Popup>
      </Marker>
    </MapContainer>
  </section>
  );
});

export default Map;

