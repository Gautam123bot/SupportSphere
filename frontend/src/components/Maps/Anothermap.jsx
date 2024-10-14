import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 28.6429,
  lng: 77.2191,
};

function Anothermap({ apiKey }) {


  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await axios.get("https://support-sphere-backend.vercel.app/bookings");
        const addresses = response.data.map((booking) => booking.address);
        setAddresses(addresses);
        setLoading(false);
      } catch (error) {
        setError("Data not available");
        setLoading(false);
      }
    };

    getAddresses();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={(map) => {
          const bounds = new window.google.maps.LatLngBounds(center);
          map.fitBounds(bounds);
          setMap(map);
        }}
        onUnmount={() => setMap(null)}
      >
        {/* {addresses.map((address, index) => (
          <Marker key={index} position={address} />
        ))} */}
         {/* const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: {lat: 37.4239163, lng: -122.0947209},
        }); */}

      </GoogleMap>
      
      <div>
        <h1 className="text-2xl font-bold mb-4">Addresses</h1>
        <div className="bg-green-400 p-4 rounded-lg shadow-md">
          <ul className="space-y-4">
            {addresses.map((address, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p>
                  <strong>Address:</strong> {address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Anothermap;
