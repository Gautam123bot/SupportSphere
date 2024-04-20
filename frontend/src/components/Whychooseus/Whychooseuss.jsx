import React from "react";
// import { getImageUrl } from "../../utils";

function Whychooseuss({mimg, heading, content}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
      <div className="comcontent shadow-xl bg-white p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-none">
        <div className="img-comp flex items-center justify-center mb-4">
          <img
            src={mimg}
          
            className="rounded-full w-32 h-32"
          />
        </div>
        <h3 className="text-center text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-center text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export default Whychooseuss;
