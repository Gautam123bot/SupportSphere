import React from "react";
import Whychooseuss from "./Whychooseuss";
import { Link } from "react-router-dom";
// import { getImageUrl } from "../../utils.js";
import one from "../../assets/images/1.png"
import hsmall from "../../assets/images/hsmall.jpg"
import trainingsmall from "../../assets/images/trainingsmall.png"
import vocational from "../../assets/images/vocational.png"
import hygienesmall from "../../assets/images/hygienesmall.jpg"
import networksmall from "../../assets/images/networksmall.jpg"

function Full() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="contentt text-center">
          <p className="text-lg text-gray-600">FEATURES LIST</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-cyan-600">Only platform</span> that you will ever need    
          </h1>
          <p className="text-2xl text-gray-800 mt-4 shadow p-4">
            WHY CHOOSE US
          </p>
          <Link to="/getwork">
            <button className="bg-black px-6 py-3 rounded-full text-white font-bold shadow-lg mt-6 hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">

                Get registered with us
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12">
          <Whychooseuss
            mimg={hsmall}
            heading="Medical Insurance"
            content="Direct Medical Insurance: Coverage Straight from Our Organization to You"
           />
          <Whychooseuss
          mimg={trainingsmall}
          heading="Free Training Programs with certificates"
          content=
          "Unlock Your Potential: Free Training Programs with Certificates Included"
          />
          <Whychooseuss
          mimg={vocational}
          heading="Vocational Skill Programs to become employment ready"
          content="Empower Your Future: Vocational Skill Programs for Job-Readiness"
          />
          <Whychooseuss
          mimg={hygienesmall}
          heading="Free female hygiene products every months"
          content=
          "Monthly Support: Free Female Hygiene Products Delivered to Your Door"
          />
          <Whychooseuss
          mimg={networksmall}
          heading="Trusted Networks"
          content="Building Trust, Connecting Communities: Welcome to Trusted Networks"
          />
          <Whychooseuss
          mimg={one}
          heading="Others"
          content="Expanding Horizons: Welcome to Others. Get done with us"
          />
        </div>
      </div>
    </div>
  );
}

export default Full;
