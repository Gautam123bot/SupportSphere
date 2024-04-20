import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "How can rural migrants access SupportSphere's services",
      content: "Rural migrants can access SupportSphere's services through their online platform or mobile application. By creating an account on SupportSphere, migrants can browse job listings, enroll in training programs, and access various support services tailored to their needs."
    },
    {
      title: "Is SupportSphere's platform free to use for rural migrants?",
      content: "Yes, SupportSphere's platform is free for rural migrants to use. There are no subscription fees or charges associated with accessing job opportunities, training programs, or support services offered by SupportSphere."
    },
    {
      title: "Does SupportSphere offer any additional support services for rural migrants transitioning to urban living?",
      content: "In addition to job opportunities and training programs, SupportSphere also offers assistance with other aspects of urban living, such as access to free female hygiene products on a monthly basis. These support services aim to address the diverse needs of rural migrants during their transition to urban areas."
    },
    {
      title: "Are there any specific training programs available on SupportSphere to help rural migrants become employment-ready?",
      content: "Yes, SupportSphere provides vocational skill programs designed to prepare rural migrants for employment in urban areas. These programs offer training in various vocational skills and provide participants with the necessary certifications to enhance their employability."
    }]
}

function Faqs() {
  return (
    <>
      <div className='bg-slate-100'>
        <div className='px-4 py-4 md:px-40 md:py-40 lg:px-40 lg:py-40 xl:px-80 xl:py-45'>
          <div className="px-5 py-5 border-2 bg-white rounded-lg shadow-2xl">
            <Faq data={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faqs;