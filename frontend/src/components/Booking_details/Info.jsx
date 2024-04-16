import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

function Info({ data, setData }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCity(null);
    setData({ ...data, country: selectedOption ? selectedOption.name : "" });
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
    setData({ ...data, state: selectedOption ? selectedOption.name : "" });
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setData({ ...data, city: selectedOption ? selectedOption.name : "" });
  };

  return (
    <div className="space-y-6">
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Your name
        </label>
        <input
          onChange={(e) => setData({ ...data, yname: e.target.value })}
          value={data.yname}
          type="text"
          id="yname"
          name="yname"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Email
        </label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          type="email"
          id="email"
          name="email"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Phone
        </label>
        <input
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          value={data.phone}
          type="text"
          id="phone"
          name="phone"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <Select
        options={Country.getAllCountries()}
        getOptionLabel={(country) => country.name}
        getOptionValue={(country) => country.isoCode}
        value={selectedCountry}
        onChange={handleCountryChange}
      />
      <Select
        options={
          selectedCountry
            ? State.getStatesOfCountry(selectedCountry.isoCode)
            : []
        }
        getOptionLabel={(state) => state.name}
        getOptionValue={(state) => state.isoCode}
        value={selectedState}
        onChange={handleStateChange}
      />
      <Select
        options={
          selectedState
            ? City.getCitiesOfState(
                selectedCountry ? selectedCountry.isoCode : "",
                selectedState ? selectedState.isoCode : ""
              )
            : []
        }
        getOptionLabel={(city) => city.name}
        getOptionValue={(city) => city.name}
        value={selectedCity}
        onChange={handleCityChange}
      />
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Address
        </label>
        <input
          onChange={(e) => setData({ ...data, address: e.target.value })}
          value={data.address}
          type="text"
          id="address"
          name="address"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default Info;
