import React from 'react'
import Mainservice from './Mainservice'

function Allservice() {
  return (
    <> 
    <div className="flex xl:px-100 justify-between items-center">
      <div className="lg:p-10">
        <Mainservice
          title="Staff for your shop"
          description="This is description for service1"
          buttonText="Read More1"
          link="/getstaff"
        />
      </div>
      <div className="lg:p-10">
        <Mainservice
        title="Staff for Hospitals and Medical Institutions"
        description="This is description for service2"
        buttonText="Read More2"
        link="/getstaffh"
        />
      </div>
      <div className="lg:p-10">
        <Mainservice
        title="Staff for Lab Support"
        description="This is description for service3"
        buttonText="Read More3"
        link="/getstaffL"
        />
      </div>
      <div className="lg:p-10">
        <Mainservice
        title="Staff for School and Colleges"
        description="This is description for service4"
        buttonText="Read More4"
        link="/getstaffS"
        />
      </div>
      <div className="lg:p-10"> {/* Apply padding only at the lg breakpoint */}
        <Mainservice
        title="Marketing Staff"
        description="This is description for service5"
        buttonText="Read More5"
        link="/getstaffm"
        />
      </div>
      <div className="lg:p-10">
        <Mainservice
        title="Others"
        description="This is description for service6"
        buttonText="Read More6"
        link="/getstaffo"
        />
      </div>
    </div>
    </>
  )
}

export default Allservice;