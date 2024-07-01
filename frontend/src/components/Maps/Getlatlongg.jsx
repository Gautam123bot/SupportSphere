import React, { useState } from 'react';
import axios from 'axios';

const Getlatlongg = () => {
  const get_coordinates_api_key=import.meta.env.VITE_GET_COORDINATES;
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [error, setError] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const getCoordinates = async () => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: get_coordinates_api_key
        }
      });

      const data = response.data;

      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
        setError('');
      } else {
        setError('Unable to find location');
      }
    } catch (error) {
      setError('Error fetching data');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter address"
      />
      <button onClick={getCoordinates}>Get Coordinates</button>

      {coordinates.lat && coordinates.lng && (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Getlatlongg;
