import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./style.css"
import axios from "axios"

function Getwork() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [expertise, setExpertise] = useState('');
  const[prevexperience, setPrevexperience] = useState('');
  const[phone, setPhone] = useState('');
  const[email, setEmail] = useState('');
  const[address, setAddress] = useState('');

  const navigate = useNavigate();
  const handleServiceman = () => {
    const data = {
      firstname: fname, 
      lastname: lname, 
      age,
      chooseExpertise: expertise,
      previous_experience: prevexperience,
      phone,
      email,
      address,
    };
    axios.post("http://localhost:3000/service", data)
    .then(()=>{
      navigate('/');
    })
    .catch((error)=>{
      alert("An error happened. Please try again later")
      console.log(error);
    });
  }

  return (
    <div>
      this is register page of service
      <h2>Fname: </h2>
      <input type="text" name="fname" id="fname" value={fname} onChange={(e)=>setFname(e.target.value)} />
      <h2>Lname: </h2>
      <input type="text" name="lname" id="lname" value={lname} onChange={(e)=>setLname(e.target.value)} />
      <h2>Age(in years): </h2>
      <input type="number" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)} />
      <h2>Select your expertise</h2>
      <select name="expertise" id="expertise" value={expertise} onChange={(e) => setExpertise(e.target.value)} required>
      <option value="" disabled>Select your expertise</option>
      <option value="workingstaff">Working Staff</option>
      <option value="maid">Maid</option>
      <option value="salesman">Salesman</option>
    </select>

      <h2>Previous Experience</h2>
      <input type="number" name="prevexperience" id="prevexperience" value={prevexperience} onChange={(e)=>setPrevexperience(e.target.value)} />
      <h2>Phone Number: </h2>
      <input type="text" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      <h2>Email: </h2>
      <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <h2>Address: </h2>
      <textarea name="address" id="address" cols="30" rows="10" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>

      <button type="submit" onClick={handleServiceman}>Submit your form</button>
    </div>
  )
}

export default Getwork
