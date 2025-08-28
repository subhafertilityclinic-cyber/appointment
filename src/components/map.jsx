import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import React from 'react';

const svgMarker = L.icon({
  iconUrl: "/location.svg",
  iconSize: [38, 38],      // adjust to your SVG size
  iconAnchor: [16, 32],    // bottom-center of icon
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
      className="w-full max-w-maxi min-w-[300px] h-[200px] border-2 border-main-gray rounded-2xl "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.679466469087807, 84.4318247396386]} icon={svgMarker} >
        <Popup>
  <div>
    <strong>Subha Fertility Clinic</strong><br />
    address, Bharatpur, Nepal<br />
    Mon-Sat: 9 AM - 5 PM<br />
    {/* <button className='text-blue-400' onClick={()=>{
  navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position.coords)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const dir = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=27.679466469087807,84.4318247396386`;
    window.open(dir,"_blank");
  }, (error) => {
    alert("Cannot get your location");
  });
}}>
  Get Direction
</button> */}
 <a href="https://maps.google.com/?q=27.679,84.431" target="_blank">Get Directions</a>
  </div>
</Popup>

      </Marker>
    </MapContainer>
  </section>
  );
});

export default Map;

