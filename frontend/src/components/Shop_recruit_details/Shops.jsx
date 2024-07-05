import React, { useState, useEffect } from "react";
import axios from "axios";

function Shops() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://support-sphere.vercel.app/bookings");
        // const response = await axios.get("http://localhost:3001/bookings");
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setError("Data not available");
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="bg-blue-400 p-4 rounded-lg shadow-md">
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="bg-cyan-300 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">
                <strong>Service:</strong> {booking.services}
              </p>
              <p>
                <strong>Number of Staff:</strong> {booking.noofstaff}
              </p>
              <p>
                <strong>Start Time:</strong> {booking.starttime}
              </p>
              <p>
                <strong>End Time:</strong> {booking.endtime}
              </p>
              <p>
                <strong>Name:</strong> {booking.yname}
              </p>
              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p>
                <strong>Country:</strong> {booking.country}
              </p>
              <p>
                <strong>State:</strong> {booking.state}
              </p>
              <p>
                <strong>City:</strong> {booking.city}
              </p>
              <p>
                <strong>Address:</strong> {booking.address}
              </p>
              <p>
                <strong>Notes:</strong> {booking.notes}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shops;
