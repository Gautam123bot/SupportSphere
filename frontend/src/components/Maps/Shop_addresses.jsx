import React, { useState, useEffect } from "react";
import axios from "axios";

function Shop_addresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bookings");
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

  return (
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
  );
}

export default Shop_addresses;
