import React from "react";
import Image from "../../helpek/Image";
import image from "../../image/index";
import Text from "../../helpek/Text";
import { infomation, listInformation, listPage } from "../../mockData";
import Button from "../../helpek/Button";
import { FaArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const history = useNavigate();
  const [resize, setResize] = React.useState(window.innerWidth);

  const handle = () => {
    setResize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div className="relative w-full h-[706px] mt-32">
      <div>
        <Image
          src={image.imgBackgroud1}
          alt="imgFooter"
          classes={"absolute bottom-0 w-full h-[706px]  z-10"}
        />
        <Image
          src={image.imgBackgroud2}
          alt="imgFooter2"
          classes={"absolute bottom-0 w-full h-[706px] z-0"}
        />
        <div className="relative z-50 flex flex-col items-center justify-center gap-32 w-full h-[706px] flex-wrap">
          <div className="flex items-center justify-around flex-wrap w-full gap-5 ">
            <div className="flex flex-col gap-7">
              <Image
                src={image.logoFooter}
                alt="logoFooter"
                classes={"w-[201px] h-[54px]"}
              />
              <div className="flex gap-2">
                <Text classes={"font-bold text-[#D7DBFF]"}>Beautice</Text>
                <Text classes={"text-[#D7DBFF]"}>
                  is a Beauty Clinic WordPress Theme.
                </Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text classes={"font-medium text-sm italic text-[#D7DBFF]"}>
                  Baker Steet 101, NY, United States.
                </Text>
                <div className="flex gap-7">
                  <Text classes={"font-medium text-sm italic text-[#D7DBFF]"}>
                    +521 569 8966.
                  </Text>
                  <Text classes={"font-medium text-sm italic text-[#D7DBFF]"}>
                    mail@company.com.
                  </Text>
                </div>
              </div>
            </div>
            {resize < 640 ? (
              <></>
            ) : (
              <>
                <div className="flex flex-col gap-6">
                  <Text classes={"text-lg text-[#fff] font-semibold"}>
                    Pages
                  </Text>
                  <div className="flex flex-col gap-3">
                    {listPage.map((item) => (
                      <div
                        key={item?.id}
                        className=" flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          history(
                            `/${item?.page === "Home" ? "" : item?.page}`
                          );
                          scrollTop();
                        }}
                      >
                        <i>{item?.icon}</i>
                        <Text classes={"text-[#D7DBFF]"}>{item?.page}</Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex flex-col gap-6">
                  <Text classes={"text-lg text-[#fff] font-semibold"}>
                    Informations
                  </Text>
                  <div className={"flex flex-col gap-3"}>
                    {infomation.map((item) => (
                      <div key={item?.id} className=" flex items-center gap-2">
                        <i>{item?.icon}</i>
                        <Text classes={"text-[#D7DBFF]"}>{item?.title}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center justify-center w-full ">
            <div className="relative z-50 flex justify-between items-center w-full max-w-[1220px] px-10 gap-10 flex-wrap">
              <div className="flex justify-center items-center gap-11">
                {listInformation.map((item, index) => (
                  <i key={index}>{item}</i>
                ))}
              </div>
              <div>
                <Text classes={"text-[#D7DBFF]"}>
                  © AltDesain Studio 2021 - All right reserved.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-50 bottom-20 right-20">
        <Button
          classes={"w-9 h-9 rounded-[5px] bg-[#FF64AE] text-white"}
          action={() => scrollTop()}
        >
          <FaArrowUp />
        </Button>
      </div>
      <Image
        src={image.imgButton}
        alt="imgFooter2"
        classes={"absolute bottom-0 w-full h-[125px] z-5"}
      />
    </div>
  );
};

export default Footer;
