import React from "react";

const Input = ({ type, classes, placeholder, name }) => {
  return (
    <input
      type={type}
      className={`w-full h-14 border border-[#D9DDFE] rounded-[15px] p-4 outline-none ${classes}`}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
