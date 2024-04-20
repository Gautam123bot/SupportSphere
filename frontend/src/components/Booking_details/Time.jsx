import React, { useEffect, useState } from 'react';

function Time({ data, setData }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Calculate the position of the dot based on the start and end times
  const calculateDotPosition = () => {
    const { starttime, endtime } = data;
    const startTime = parseFloat(starttime);
    const endTime = parseFloat(endtime);
    const totalTime = endTime - startTime;
    return (startTime / 24) * 100; // Assuming the start and end times are provided as percentages of a day (0-24 hours)
  };

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the position of the timeline based on the current time
  const calculateTimelinePosition = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / (24 * 60)) * 100; // Convert total minutes to percentage of a day
  };

  return (
    <div className="space-y-6">
      {/* Timeline Section */}
      <div className="relative h-6 mt-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-black" style={{ left: `${calculateTimelinePosition()}%` }}></div>
      </div>
      {/* First Name Section */}
      <div className="mt-4 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">Start time:</label>
        <input
          onChange={(e) => setData({ ...data, starttime: e.target.value })}
          value={data.starttime}
          type="text"
          id="starttime"
          name="starttime"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Last Name Section */}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">End time:</label>
        <input
          onChange={(e) => setData({ ...data, endtime: e.target.value })}
          value={data.endtime}
          type="text"
          id="endtime"
          name="endtime"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Address Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">Notes (if available):</label>
        <textarea
          onChange={(e) => setData({ ...data, notes: e.target.value })}
          value={data.notes}
          id="notes"
          name="notes"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default Time;
