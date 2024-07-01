import React, { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import axios from "axios"


function Footer() {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the server-side endpoint
      const response = await axios.post('http://localhost:3001/mailed', { email });
      alert("You Subscribed successfully!")
      console.log(response.data.message);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <footer className="bg-cyan-500 text-black sticky bottom-0 left-0 w-full mt-48">
      <div className="md:flex md:justify-between md:items-center sm:px-8 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-cyan-900">Subscribe</span> to our newsletter
        </h1>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Id"
            className="text-white bg-black
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-cyan-900 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-md font-bold pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
