import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="w-max px-5 py-2 my-5 mx-3 bg-gray-200 rounded-md hover:scale-105 ease-in-out duration-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
