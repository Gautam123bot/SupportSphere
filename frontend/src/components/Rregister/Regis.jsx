import React, { Component, useState } from 'react';
import {doc, addDoc, collection, updateDoc, deleteDoc, getDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import "./style.css"

function Regis() {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const navigate = useNavigate();

  const dbref = collection(db, "care-taker")
  const registeruser = async()=>{
    if (!name || !email || !phone) {
      alert('Please fill in all necessary details.');
      return;
    }

    try {
      const adddata = await addDoc(dbref, {Name: name, Email: email, Phone: phone})
      if(adddata){
        const confirmbut = confirm("Please check your details carefully");
        if(confirmbut){
          alert("Registered successfully")
          navigate("/");
        }
      }else{
        alert("Error Occured while proceeding your request! Please try again later")
      }      
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-6">Register Yourself Here</h1>

      <div className="flex flex-col items-center mb-6">
        <h2>Enter your Name: </h2>
        <input type="text" name="name" id="name" placeholder='Enter your name' className='p-3' value={name} onChange={(e) =>setName(e.target.value)} required />
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <h2>Enter your Email Id:</h2>
        <input type="text" name="email" id="email" placeholder='Enter your email' className='p-3' value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="flex flex-col items-center mb-6">
        <h2>Enter your Mobile No.</h2>
        <input type="text" name="phone" id="phone" placeholder='Enter your phone number' className='p-3' value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit" onClick={registeruser} className='mt-4 bg-cyan-800 text-white px-10 py-2 rounded-xl'>Click here to Submit</button>
    </div>
    </>
  )
}

export default Regis;