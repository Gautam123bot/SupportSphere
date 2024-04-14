import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import "./getwor.css";
import Footer from "../components/Footer/Footer";

function Getwork() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [expertise, setExpertise] = useState("");
  const [prevexperience, setPrevexperience] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationResult, setVerificationResult] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = () => {
    axios
      .post("http://localhost:3001/api/send-otp", { phone })
      .then(() => {
        setOtpSent(true);
        setVerificationResult(""); // Reset verification result
        setVerificationSuccess(false); // Reset verification success
        alert("OTP sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured while sending OTP. Please try again later!");
      });
  };

  const handleVerifyOtp = () => {
    axios
      .post("http://localhost:3001/api/verify-otp", { phone, otp })
      .then((response) => {
        console.log("Response from server:", response.data);
        if (response.data.success) {
          setVerificationSuccess(true);
          setVerificationResult("OTP Verified Successfully!");
        } else {
          setVerificationResult(response.data.msg);
          setVerificationSuccess(false); // Update verification success
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setVerificationResult(
          "An error occurred while verifying OTP. Please try again later."
        );
      });
  };

  const handleServiceman = () => {
    if (!verificationSuccess) {
      alert("Please verify your OTP before submitting your form");
      return;
    }

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
    axios
      .post("http://localhost:3001/service", data)
      .then(() => {
        navigate("/");
        alert("You registered successfully! We'll get back to you soon");
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened. Please try again later");
      });
  };

  return (
    <div className="">
      <div className="main_get">
        {/* this is register page of service */}
        <h2>Fname: </h2>
        <input
          type="text"
          name="fname"
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <br />
        <h2>Lname: </h2>
        <input
          type="text"
          name="lname"
          id="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <h2>Age(in years): </h2>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <h2>Select your expertise</h2>
        <select
          name="expertise"
          id="expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        >
          <option value="" disabled>
            Select your expertise
          </option>
          <option value="shopstaff">Shop or Outlet Staff</option>
          <option value="hospital Staff">Hospital Staff</option>
          <option value="labsupport">Lab Support</option>
          <option value="schoolstaff">School Staff</option>
          <option value="others">Others</option>
        </select>
        <br />
        <br />
        <h2>Previous Experience</h2>
        <input
          type="number"
          name="prevexperience"
          id="prevexperience"
          value={prevexperience}
          onChange={(e) => setPrevexperience(e.target.value)}
        />
        <br />
        <br />
        <h2>Phone Number: </h2>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />

        <button type="button" className="" onClick={handleSendOtp}>
          {otpSent ? "Resend OTP" : "Send OTP"}
        </button>
        {otpSent && (
          <>
            <h2>Enter OTP sent to your phone: </h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
            <p>{verificationResult}</p>
          </>
        )}

        {/* {!otpSent && (
          <button type="button" className="buttonsub" onClick={handleSendOtp}>
            Send OTP
          </button>
        )}

        {otpSent && (
          <>
            <h2>Enter OTP sent to your phone: </h2>
            <input type="text" name="otp" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} /> <br /><br />
          </>
        )}
         <button className="buttonsub" onClick={handleVerifyOtp}>Verify OTP</button>
        <p>{verificationResult}</p> */}

        <h2>Email: </h2>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <h2>Address: </h2>
        <textarea
          name="address"
          id="address"
          // cols="0"
          // rows="50"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit" className="buttonsub" onClick={handleServiceman}>
          Submit your form
        </button>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Getwork;
