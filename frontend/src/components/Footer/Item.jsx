import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-2 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-black hover:text-cyan-900 duration-300
          text-md cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
        
      ))}   
      
    </ul>
  );
};

export default Item;