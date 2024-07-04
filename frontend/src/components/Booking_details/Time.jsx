import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Time({ data, setData }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setData({ ...data, startdate: date });
  };

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today);
    setData({ ...data, date: today });
  };

  const handleClearClick = () => {
    setSelectedDate(null);
    setData({ ...data, date: null });
  };

  return (
    <div className="space-y-6">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        // onChange={(e) => setData({ ...data, starttime: e.target.value })}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select Date"
        className="w-full px-4 py-2 border rounded-lg bg-slate-700 "
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex justify-between mb-2">
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
              onClick={handleTodayClick}
            >
              Today
            </button>
            <div className="flex">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline mr-2"
                onClick={decreaseMonth}
              >
                {"<"}
              </button>
              <span>{monthDate.toLocaleString("default", { month: "long" })} {monthDate.getFullYear()}</span>
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline ml-2"
                onClick={increaseMonth}
              >
                {">"}
              </button>
            </div>
            <button
              type="button"
              className="text-sm hover:underline"
              onClick={handleClearClick}
            >
              Clear
            </button>
          </div>
        )}
      />

      <form className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="start-time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Start time:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="time"
              id="start-time"
              className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="18:00"
              value={data.starttime}
              onChange={(e) => setData({ ...data, starttime: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="end-time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            End time:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="time"
              id="end-time"
              className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="18:00"
              value={data.endtime}
              onChange={(e) => setData({ ...data, endtime: e.target.value })}
              required
            />
          </div>
        </div>
      </form>

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Notes (if available):
        </label>
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
