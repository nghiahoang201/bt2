import React from "react";

const Button = ({ classes, children, action }) => {
  return (
    <button
      className={`lg:text-base md:text-sm font-semibold leading-6 tracking-[10%] hover:opacity-80 cursor-pointer flex justify-center items-center ${
        classes
          ? classes
          : "text-white bg-[#FF64AE] rounded-[50px] lg:w-[158px] lg:h-[52px] min-w-[120px] min-h-[40px]"
      }`}
      onClick={() => action && action()}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
