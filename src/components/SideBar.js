import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // Early return pattern

  return (
    <div className="p-5 shadow-lg w-48 font-normal">
      <ul className="flex flex-col gap-2 pb-2 border-b-[0.5px] border-gray-400">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="flex flex-col gap-2 py-2 border-b-[0.5px] border-gray-400">
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
      </ul>

      <h2 className=" py-2 font-semibold">Subscriptions</h2>
      <ul className="flex flex-col gap-2">
        <li>Filtercopy</li>
        <li>Dhruv Rathee</li>
        <li>Abhishek Upmanyu</li>
        <li>The Lallantop</li>
      </ul>
    </div>
  );
};

export default SideBar;
