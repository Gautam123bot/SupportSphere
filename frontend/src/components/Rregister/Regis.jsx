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
    const adddata = await addDoc(dbref, {Name: name, Email: email, Phone: phone})
    if(adddata){
      const confirmbut = confirm("Please check your details carefully");
      if(confirmbut){
        alert("Registered successfully")
      }
    }else{
      alert("Error Occured while proceeding your request")
    }
    navigate("/");
  }

  return (
    <>
      <h1>register yourself here</h1>

      <h2>Name</h2>
      <input type="text" name="name" id="name" placeholder='Enter your name' value={name} onChange={(e) =>setName(e.target.value)} />
      <h2>Email</h2>
      <input type="text" name="email" id="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <h2>Mobile No.</h2>
      <input type="text" name="phone" id="phone" placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
    <br />
    <br />
      <button type="submit" onClick={registeruser}>Submit</button>
    </>
  )
}

export default Regis;