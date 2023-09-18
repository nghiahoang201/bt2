import React from "react";
import "../publicCss/index.css";
import { FaFolder } from "react-icons/fa6";

const Card = ({
  listCard,
  classesCard,
  hover,
  start,
  border,
  button,
  fullImage,
}) => {
  return start ? (
    <>
      {listCard?.map((item) => (
        <div
          className={`relative  rounded-[42px] bg-transparent flex flex-col  ${
            fullImage ? "" : "p-6"
          } gap-14  ${
            border ? "border-card" : hover ? "shadow-hover" : "shadow-card"
          } ${classesCard}`}
          key={item?.id}
        >
          <div className={`${fullImage ? "w-full" : ""}`}>
            <img src={item?.image} alt="animation1" />
          </div>
          <div className={`flex flex-col gap-4 ${fullImage ? "p-6" : ""}`}>
            {item?.mainTitle && (
              <h6 className="font-semibold text-base leading-5 text-[#ff64ae] flex items-center gap-2">
                <i>
                  <FaFolder />
                </i>
                {item?.mainTitle}
              </h6>
            )}
            {item?.name && (
              <h6 className="font-semibold text-base leading-5 text-[#ff64ae]">
                {item?.name}
              </h6>
            )}
            <h6 className="font-semibold text-lg leading-6 text-[#091156]">
              {item?.title}
            </h6>
            <p className="font-normal text-sm leading-5 tracking-[10%] text-[#8B8B8B]">
              {item?.text}
            </p>
            <div>{button}</div>
          </div>
          <div className="flex gap-6 ">
            {item?.information?.map((icons, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%]  shadow-card-icon"
              >
                {icons?.icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  ) : (
    <>
      {listCard?.map((item) => (
        <div
          className={` rounded-[42px] bg-transparent flex flex-col items-center p-10 gap-14  ${
            hover ? "shadow-hover" : "shadow-card"
          } ${classesCard}`}
          key={item?.id}
        >
          <div>
            <img src={item?.image} alt="animation1" />
          </div>
          <div className="flex flex-col items-center text-center gap-4 ">
            <h6 className="font-semibold text-base leading-5 text-[#ff64ae]">
              {item?.name}
            </h6>
            <h6 className="font-semibold text-lg leading-6 text-[#091156]">
              {item?.title}
            </h6>
            <p className="font-normal text-sm leading-5 tracking-[10%] text-[#8B8B8B]">
              {item?.text}
            </p>
            <div>{button}</div>
          </div>
          <div className="flex gap-6 ">
            {item?.information?.map((icons, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%]  shadow-card-icon"
              >
                {icons?.icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
