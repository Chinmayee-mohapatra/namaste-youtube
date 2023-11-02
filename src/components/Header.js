import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  const [suggesstions, setSuggesstions] = useState([]);
  const [showSuggesstions, setShowSuggesstions] = useState(false);

  useEffect(() => {
    // make an API call after every key press.
    // but if the diffrn b/w 2 API calls is <200ms then decline the API call.

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggesstions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full grid grid-flow-col py-2 px-4 my-2 shadow-sm">
      <div className="flex justify-start items-center gap-4">
        <RxHamburgerMenu
          className="cursor-pointer"
          size={24}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="w-20 cursor-pointer"
            alt="Youtube-Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggesstions(true)}
            onBlur={() => setShowSuggesstions(false)}
            className="w-3/4 pl-4 p-1 border-2 border-slate-400 hover:border-black rounded-l-full"
          />
          <button className="p-2 px-4 border-2 border-l-0 border-slate-400 hover:bg-slate-400 hover:border-slate-400 hover:text-white duration-200 rounded-r-full">
            <BsSearch />
          </button>
        </div>
        {showSuggesstions && (
          <div className="absolute z-10 left-[36%] bg-white shadow-md border border-gray-50 rounded-lg py-2 px-2 w-[33rem]">
            <ul>
              {suggesstions.map((s) => (
                <li className="py-1 px-3 hover:bg-gray-50">🔍 {s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center gap-4">
        <IoMdNotificationsOutline size={24} />
        <FaUserAlt
          size={24}
          className="border-2 border-black rounded-full p-1"
        />
      </div>
    </div>
  );
};

export default Header;
