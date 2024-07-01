import React from "react";
import Mainservice from "./Mainservice";
import hospital_cleaning from "../../assets/images/hospital_cleaning.jpg";
import storestaff from "../../assets/projects/storestaff.jpg";
import schoolsmall from "../../assets/images/schoolsmall.jpg";
import marketsmall from "../../assets/images/marketsmall.jpg";

function Allservice() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-12">
        FIND RELIABLE, TRUSTED AND VERIFIED HELPERS
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <Mainservice
          nimg={hospital_cleaning}
          title="Staff for your shop"
          description="This is description for service1"
          buttonText="Read More1"
          link="/getstaff"
        />
        <Mainservice
          nimg={storestaff}
          title="Staff for Hospitals and Medical"
          description="This is description for service2"
          buttonText="Read More2"
          link="/getstaffh"
        />
        <Mainservice
          nimg={hospital_cleaning}
          title="Staff for Lab Support"
          description="This is description for service3"
          buttonText="Read More3"
          link="/getstaffL"
        />
        <Mainservice
          nimg={schoolsmall}
          title="Staff for School and Colleges"
          description="This is description for service4"
          buttonText="Read More4"
          link="/getstaffS"
        />
        <Mainservice
          nimg={marketsmall}
          title="Marketing Staff"
          description="This is description for service5"
          buttonText="Read More5"
          link="/getstaffm"
        />
        <Mainservice
          nimg={hospital_cleaning}
          title="Others"
          description="This is description for service6"
          buttonText="Read More6"
          link="/getstaffo"
        />
      </div>
    </div>
  );
}

export default Allservice;
