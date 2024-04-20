import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

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
        alert("An error occurred while sending OTP. Please try again later!");
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
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Register as a Service Provider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First Name:</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name:</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Age (in years):</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Select your expertise:</label>
              <select
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="" disabled>Select your expertise</option>
                <option value="shopstaff">Shop or Outlet Staff</option>
                <option value="hospital Staff">Hospital Staff</option>
                <option value="labsupport">Lab Support</option>
                <option value="schoolstaff">School Staff</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Previous Experience:</label>
              <input
                type="number"
                value={prevexperience}
                onChange={(e) => setPrevexperience(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
              {!otpSent ? (
                <button onClick={handleSendOtp} className="mt-2 bg-cyan-500 text-white py-2 px-4 rounded-lg">Send OTP</button>
              ) : (
                <div>
                  <label className="block mt-2">Enter OTP sent to your phone:</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <button onClick={handleVerifyOtp} className="mt-2 bg-cyan-500 text-white py-2 px-4 rounded-lg">Verify OTP</button>
                  <p>{verificationResult}</p>
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2">Address:</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
            </div>
          </div>
          <button
            onClick={handleServiceman}
            className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Getwork;
