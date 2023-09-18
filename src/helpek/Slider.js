import React from "react";
import image from "../image";
import Button from "./Button";
import Text from "./Text";

const Slider = ({
  data,
  sliderId,
  img,
  mainTitle,
  title,
  text,
  button,
  css,
  buttons,
  textCenter,
  imgBottomText,
}) => {
  return data ? (
    <div className=" flex justify-center flex-wrap lg:flex-nowrap w-full max-w-[1140px] h-[805px] items-center gap-6">
      {data?.map(
        (item) =>
          item?.id === sliderId && (
            <div className="flex flex-col gap-7" key={item?.id}>
              <div className="flex flex-col gap-2">
                <h2 className="md:text-3xl font-semibold lg:text-5xl leading-[60px] text-[#091156] w-full max-w-md">
                  {item?.title}
                </h2>
                <p className="font-medium lg:text-base md:text-xs leading-6 tracking-[10%] text-[#091156] w-full max-w-md">
                  {item?.text}
                </p>
              </div>
              <Button
                classes={
                  "w-[140px] h-[40px] lg:w-[200px] lg:h-[58px] bg-[#FF64AE] rounded-[50px] text-white"
                }
              >
                More Details
              </Button>
            </div>
          )
      )}
      <div>
        <img src={image.imageSlider} alt="imgSlider" />
      </div>
    </div>
  ) : (
    <div className=" flex justify-center flex-wrap md:flex-nowrap lg:flex-nowrap w-full max-w-[1140px] h-[805px] items-center lg:gap-[219px] md:gap-[219px] p-10">
      <div
        className={`flex flex-col gap-7  ${textCenter ? "text-center" : ""}`}
      >
        <div className="flex flex-col items-center gap-2">
          <Text classes={"text-[#ABB4FF] font-semibold"}>{mainTitle}</Text>
          <h2
            className={`font-semibold md:text-3xl lg:text-5xl leading-[60px] w-full max-w-3xl ${css?.textTitle}`}
          >
            {title}
          </h2>
          <p
            className={`font-medium md:text-sm lg:text-base leading-6 tracking-[10%] w-full max-w-3xl ${css?.textText}`}
          >
            {text}
          </p>
          <div>{imgBottomText}</div>
        </div>
        {buttons}
      </div>

      {img ? (
        <div>
          <img src={img} alt="imgSlider" />
        </div>
      ) : (
        button && <div>{button}</div>
      )}
    </div>
  );
};

export default Slider;
