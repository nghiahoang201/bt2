import React from "react";
import Text from "./Text";

const About = ({
  mainTitle,
  title,
  desc,
  desc2,
  button1,
  button2,
  images,
  classes,
  locationTextRight,
  bubble,
  textLink,
}) => {
  return locationTextRight ? (
    <div
      className={`relative z-50 w-full flex items-center justify-center mt-32`}
    >
      {bubble}
      <div
        className={`relative z-50 w-full max-w-[1140px] px-10 flex justify-between flex-wrap ${classes}`}
      >
        <div className="relative z-50">{images}</div>
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-3 ">
                <h2 className="font-semibold text-base leading-5 text-[#FF64AE]">
                  {mainTitle}
                </h2>
                <h2 className="font-semibold md:text-3xl lg:text-4xl leading-[46px] text-[#091156]">
                  {title}
                </h2>
              </div>
              <Text>{desc}</Text>
              {desc2 && <Text>{desc2}</Text>}
              <div className="flex items-center gap-2">
                {textLink && (
                  <>
                    <p className={"text-[#091156] font-semibold"}>{textLink}</p>
                    <div className="text-[#FF64AE] font-bold text-xl">
                      {">>"}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-11 ">
              {button1}
              <div>{button2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative z-50 w-full flex items-center justify-center mt-32 ">
      {bubble}
      <div
        className={`relative z-50 w-full max-w-[1140px] px-10 flex justify-between flex-wrap ${classes}`}
      >
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-3 ">
                <h2 className="font-semibold text-base leading-5 text-[#FF64AE]">
                  {mainTitle}
                </h2>
                <h2 className="font-semibold md:text-3xl lg:text-4xl leading-[46px] text-[#091156]">
                  {title}
                </h2>
              </div>
              <Text>{desc}</Text>
              <Text>{desc2}</Text>
            </div>
            <div className="flex  items-center gap-2">
              {textLink && (
                <>
                  <p className={"text-[#091156] font-semibold"}>{textLink}</p>
                  <div className="text-[#FF64AE] font-bold text-xl">{">>"}</div>
                </>
              )}
            </div>
            <div className="flex items-center gap-11 ">
              {button1}
              <div>{button2}</div>
            </div>
          </div>
        </div>
        <div className="relative z-50">{images}</div>
      </div>
    </div>
  );
};

export default About;
