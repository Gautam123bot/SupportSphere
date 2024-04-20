import React from "react";
import Mainservice from "./Mainservice";
import hospital_cleaning from "../../assets/images/hospital_cleaning.jpg"
import storestaff from "../../assets/projects/storestaff.jpg"
import schoolsmall from "../../assets/images/schoolsmall.jpg"
import marketsmall from "../../assets/images/marketsmall.jpg"

function Allservice() {
  return (
    <>
      <div className="bg-cyan-800 min-h-screen">
      <h1 className="text-white text-3xl font-bold text-center py-8 shadow-lg">
          FIND RELIABLE, TRUSTED AND VERIFIED HELPERS
        </h1>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12 mb-12 p-12">
            <div className="">
              <Mainservice
                nimg={hospital_cleaning}
                title="Staff for your shop"
                description="This is description for service1"
                buttonText="Read More1"
                link="/getstaff"
              />
            </div>
            <div className="">
              <Mainservice
              nimg={storestaff}
                title="Staff for Hospitals and Medical"
                description="This is description for service2"
                buttonText="Read More2"
                link="/getstaffh"
              />
            </div>
            <div className="">
              <Mainservice
              nimg={hospital_cleaning}
                title="Staff for Lab Support"
                description="This is description for service3"
                buttonText="Read More3"
                link="/getstaffL"
              />
            </div>
            <div className="">
              <Mainservice
              nimg={schoolsmall}
                title="Staff for School and Colleges"
                description="This is description for service4"
                buttonText="Read More4"
                link="/getstaffS"
              />
            </div>
            <div className="">
              {" "}
              {/* Apply padding only at the lg breakpoint */}
              <Mainservice
              nimg={marketsmall}
                title="Marketing Staff"
                description="This is description for service5"
                buttonText="Read More5"
                link="/getstaffm"
              />
            </div>
            <div className="">
              <Mainservice
              nimg={hospital_cleaning}
                title="Others"
                description="This is description for service6"
                buttonText="Read More6"
                link="/getstaffo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allservice;
