import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Complainbox() {

  const [yname, setYname] = useState("");
  const [phone, setPhone] = useState("");
  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("");
  const [reason, setReason] = useState("");

  const navigate = useNavigate();

  const handleComplainbox = () => {
    
    const data = {
      yname,
      phone,
      staffId,
      staffName,
      reason,
    };
  axios
    // .post("https://support-sphere-backend.vercel.app/complain", data)
    .post("http://localhost:3001/complain", data)
    .then(() => {
      navigate("/");
      const chk = window.confirm("Check the confidentials you entererd!!!");
      if(chk){
        alert("Your complaint has been registered successfully! We will reach back to you soon")
      }
    })
    .catch((error) => {
      console.log(error);
      alert("An error happened. Please try again later...");
    })
  }
  
  return (
    <div className="bg-cyan-500 p-4 md:p-8 mx-auto max-w-2xl mb-24 rounded-xl">
      <h1 className="text-xl font-bold mb-4">
        IF YOU FACE ANY OF THE INCONVINIENCE! MARK HERE AND GET IN TOUCH WITH OUR VALUABLE SECURITY AGENTS FOR IT.
      </h1>
      <h2 className="text-lg font-semibold mb-2">GIVE THE STAFF ID AND MARK A COMPLAIN HERE....</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Enter your name:</label>
          <input type="text" id="yname" name="yname" value={yname} onChange={(e) => setYname(e.target.value)} className="border shadow bg-white border-black rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Phone no.:</label>
          <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border shadow bg-white border-black rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="staffId" className="text-lg font-semibold">Staff Id:</label>
          <input type="text" id="staffId" name="staffId" value={staffId} onChange={(e) => setStaffId(e.target.value)} className="border shadow bg-white border-black rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="staffName" className="text-lg font-semibold">Staff Name:</label>
          <input type="text" id="staffName" name="staffName" value={staffName} onChange={(e) => setStaffName(e.target.value)} className="border shadow bg-white border-black rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Reason for the complaint:</label>
          <select id="reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="border shadow border-black rounded-md px-4 py-2 bg-white">
          <option value="" disabled>
            Select your complain type
          </option>
            <option value="late">Lack of punctuality</option>
            <option value="behaviour">Inappropriate or Obscene behaviour</option>
            <option value="money">Demand of extra money</option>
            <option value="quality">Work quality not up to the mark</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className="buttonsubmit text-center mt-10">
        <button type="submit" className='px-4 py-2 font-bold bg-black text-white rounded-full mt-auto hover:bg-white hover:text-black transition duration-300' onClick={handleComplainbox}>Click here to submit</button>
      </div>
    </div>
  );
}

export default Complainbox;
