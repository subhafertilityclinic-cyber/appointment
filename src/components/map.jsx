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

const getLocation = (() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Latitude:", lat, "Longitude:", lon);
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=27.679466469087807,84.4318247396386`,
          "_blank"
        );


      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

})

const Map = React.memo(() => {
  return (<section className=" w-full flex justify-center px-6 " >
    <div className='bg-white h-96 w-full mt-10 md:w-[70vw] rounded-2xl px-4 md:px-10  py-4 flex flex-col items-center shadow-md'>
      <strong className="font-bold font-heading text-main-black text-2xl md:text-3xl mb-5 " >
        Visit Us
      </strong>
      <MapContainer
        center={[27.679466469087807, 84.4318247396386]}
        zoom={17}
        scrollWheelZoom={false}
        className=" w-full h-100  border-2 border-main-accent  rounded-2xl mb-4"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.679466469087807, 84.4318247396386]} icon={svgMarker} >
          <Popup className="font-bold text-main-black font-heading"   >
            <p> Subha Fertility clinic</p>
            <button onClick={getLocation} className='text-blue-600 p-3'>Get Directions</button>
          </Popup>
        </Marker>
      </MapContainer>
      <button onClick={getLocation} className="px-4 h-17 md:font-bold md:text-lg w-full 
             rounded-2xl bg-main-accent text-main-background font-semibold 
             active:brightness-90 
             hover:brightness-105 hover:shadow-md hover:cursor-pointer 
             transition duration-200 ease-in-out">Get location</button>
    </div>
  </section>
  );
});

export default Map;

