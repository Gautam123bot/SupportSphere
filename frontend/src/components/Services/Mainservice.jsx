import React from 'react';
import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';

function Mainservice({ title, description, buttonText, link }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
      <a href="#">
        <img className="rounded-t-lg w-full" src={getImageUrl("projects/storestaff.jpg")} alt={title} />
      </a>
      <div className="p-5">
        <a href="#" className="block">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 text-sm text-gray-700">{description}</p>
        <Link to={link}>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Mainservice;
