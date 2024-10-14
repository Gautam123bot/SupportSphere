import React, { useEffect, useRef } from 'react';
import Shop_addresses from './Shop_addresses';
// import { Loader } from "@googlemaps/js-api-loader"
import axios from "axios";
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';


function Tempmap ({ apiKey }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = async () => {
      const { Loader } = await import('@googlemaps/js-api-loader');

      const loader = new Loader({
        apiKey,
        version: 'weekly',
      });

      loader.load().then(() => {
        const { Map } = google.maps;

        new Map(mapRef.current, {
          center: { lat: 28.6429, lng: 77.2191 },
          zoom: 8,
        });
      }).catch(error => {
        console.error('Error loading Google Maps:', error);
      });
    };

    loadGoogleMapsScript();
  }, [apiKey]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return(
    <>
    <div id="map" ref={mapRef} style={{ height: '100vh', width: '100%' }} />;
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

export default Tempmap;
