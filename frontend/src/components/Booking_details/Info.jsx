import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import axios from "axios";

function Info({ data, setData }) {
  // const [latitude, setLatitude] = useState("")
  // const [longitude, setLongitude] = useState("");
  // useEffect(() => {
  //   navigator.getlocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(positino.coords.longitude);
  //   })
  // }, [])
  
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [address, setAddress] = useState(data.address || ""); // State for address

  const handleAddressAutocomplete = (query) => {
    axios
      .get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=d5917d676b3c42aa943b0da41e47813f`)
      .then((response) => {
        setAutocompleteResults(response.data.features);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    setAddress(value);
    setData({ ...data, address: value });
    handleAddressAutocomplete(value);
  };

  // Function to handle selection from autocomplete suggestions
  const handleAutocompleteSelection = (selectedAddress) => {
    setAddress(selectedAddress);
    setData({ ...data, address: selectedAddress });
    setAutocompleteResults([]); // Clear autocomplete suggestions
  };

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
          onChange={handleAddressChange}
          value={address}
          type="text"
          id="address"
          name="address"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {autocompleteResults.length > 0 && (
          <ul className="mt-2 border rounded-lg overflow-y-auto max-h-48">
            {autocompleteResults.map((result) => (
              <li
                key={result.properties.osm_id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleAutocompleteSelection(result.properties.formatted)}
              >
                {result.properties.formatted}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Info;
