import React from "react";

const TextArea = ({ children, classes, placeholder, name }) => {
  return (
    <textarea
      className={`w-full h-60 border border-[#D9DDFE] rounded-[15px] p-4 outline-none ${classes}`}
      placeholder={placeholder}
      name={name}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
