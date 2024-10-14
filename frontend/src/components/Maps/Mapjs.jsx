import React, { useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

const Mapjs = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("https://support-sphere-backend.vercel.app/bookings");
        const addresses = response.data.map((booking) => booking.address);
        setAddresses(addresses);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      renderMap();
    }
  }, [isLoaded]);

  const renderMap = async () => {
    const { google } = window;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.4626716919647, lng: 77.4962260680471 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    });

    const geocoder = new google.maps.Geocoder();

    addresses.forEach((address) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          new AdvancedMarkerElement({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  };

  return (
    <>
      {!isLoaded && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className="map" id="map" style={{ height: "400px", width: "100%" }}></div>
      
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

export default Mapjs;
