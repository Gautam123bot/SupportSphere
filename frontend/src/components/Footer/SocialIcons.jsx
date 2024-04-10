import React from "react";
import { getImageUrl } from "../../utils";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500 size-7 flex w-full justify-center">
      {/* {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))} */}
      <img className="mx-2" src={getImageUrl("images/insta.png")} alt="" />
      <img className="rounded-lg mx-2" src={getImageUrl("images/twitter.png")} alt="" />
      <img className="mx-2" src={getImageUrl("images/telegram.jpg")} alt="" />
      <img className="rounded-lg mx-2" src={getImageUrl("images/linkedin.png")} alt="" />
    </div>
  );
};

export default SocialIcons;