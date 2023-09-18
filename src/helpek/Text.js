import React from "react";

const Text = ({ children, classes }) => {
  return (
    <p
      className={`font-normal lg:text-base  md:text-sm leading-6 tracking-[10%] text-[#8B8B8B] ${classes}`}
    >
      {children}
    </p>
  );
};

export default Text;
