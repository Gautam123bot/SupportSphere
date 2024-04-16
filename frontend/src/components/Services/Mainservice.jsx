import React from 'react'
import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';

function Mainservice({ title, description, buttonText, link }) {
  return (
    <div>     

      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img className="rounded-t-lg" src={getImageUrl("projects/storestaff.jpg")} alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
              <Link to={link}>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    {buttonText}
                </button>
              </Link>
          </div>
      </div>

    </div>
  )
}

export default Mainservice
