import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur lorem34 this is the faq as frequently asked questsion "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

function Faqs() {
  return (
    <>
      <div className='bg-slate-100'>
        <div className='px-4 py-4 md:px-40 md:py-40 lg:px-40 lg:py-40 xl:px-45 xl:py-45'>
          <div className="px-5 py-5 border-2 bg-white rounded-lg shadow-2xl">
            <Faq data={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faqs;