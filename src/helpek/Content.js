import React from "react";
import Text from "./Text";

const Content = ({
  mainTitle,
  title,
  desc,
  children,
  classes,
  location,
  bubble,
}) => {
  return (
    <div className={`w-full  mt-32 flex flex-col items-center relative z-50`}>
      {bubble}
      <div
        className={`w-full max-w-[1140px] px-10 flex flex-col items-center gap-20 ${classes}`}
      >
        <div
          className={`flex flex-col justify-center max-w-[848px] text-center gap-6 ${
            location === "start" ? "items-start text-start" : "items-center"
          }`}
        >
          <h2 className="font-semibold text-base leading-5 text-[#FF64AE]">
            {mainTitle}
          </h2>
          <h2 className="font-semibold md:text-3xl lg:text-4xl leading-[46px] text-[#091156] max-w-[732px]">
            {title}
          </h2>
          <Text>{desc}</Text>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
