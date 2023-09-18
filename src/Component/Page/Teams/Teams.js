import React from "react";
import Content from "../../../helpek/Content";
import Card from "../../../helpek/Card";
import { listCardUers } from "../../../mockData";
import Image from "../../../helpek/Image";
import image from "../../../image";
import Text from "../../../helpek/Text";
import Slider from "../../../helpek/Slider";
import { FaArrowLeft, FaArrowRight, FaRegStar } from "react-icons/fa6";

const Teams = () => {
  return (
    <div className="w-full mt-32">
      <Content
        mainTitle="Our Teams"
        title="We are Professional"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        bubble={
          <>
            <Image
              src={image.vectorGallery1}
              alt={"img"}
              classes={"w-[1080px] h-[1414px] absolute z-0 top-0 right-0 "}
            />
            <Image
              src={image.vectorGallery2}
              alt={"img"}
              classes={"w-[1149px] h-[1504px] absolute z-0 top-0 right-0 "}
            />
          </>
        }
      >
        <Card
          classesCard={"w-[300px] relative z-50"}
          listCard={listCardUers}
          hover={true}
        />
      </Content>
      <Content
        mainTitle="Assistance Team"
        title="Meet the pro assistance"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      >
        <div className="flex flex-col items-center  gap-20">
          <div className="flex lg:justify-between justify-center items-center lg:gap-44 gap-10 flex-wrap">
            <div>
              <Image src={image.teams2} alt={"img"} />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-normal italic text-sm text-[#8B8B8B]">
                <b className="font-semibold text-base text-[#091156]">
                  Lina Gustav /{" "}
                </b>
                Pharmacist
              </h2>
              <Text classes={"w-full max-w-[440px]"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Text>
            </div>
          </div>
          <div className="flex lg:justify-between justify-center  items-center lg:gap-44 gap-10 flex-wrap">
            <div>
              <Image src={image.teams1} alt={"img"} />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-normal italic text-sm text-[#8B8B8B]">
                <b className="font-semibold text-base text-[#091156]">
                  Lina Gustav /{" "}
                </b>
                Pharmacist
              </h2>
              <Text classes={"w-full max-w-[440px]"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Text>
            </div>
          </div>
          <div className="flex lg:justify-between justify-center  items-center lg:gap-44 gap-10 flex-wrap">
            <div>
              <Image src={image.teams3} alt={"img"} />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-normal italic text-sm text-[#8B8B8B]">
                <b className="font-semibold text-base text-[#091156]">
                  Lina Gustav /{" "}
                </b>
                Pharmacist
              </h2>
              <Text classes={"w-full max-w-[440px]"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Text>
            </div>
          </div>
        </div>
      </Content>
      <div className="relative w-full h-[530px] flex justify-center items-center mt-32">
        <Image
          src={image.bgTeams1}
          alt="imgSlider"
          classes={"w-full h-[530px] absolute z-10 left-0 top-0"}
        />
        <Image
          src={image.bgTeams2}
          alt="imgSlider2"
          classes={"w-full h-[530px] absolute z-0 left-0 top-0"}
        />
        <div className="w-[1140px] flex flex-col justify-center items-center relative z-50  ">
          <Slider
            css={{
              textTitle: "text-white w-full lg:text-[36px]",
              textText: "text-[#CACACA] w-full mt-2 font-normal",
            }}
            title={"Customer satisfaction is our main goal"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            }
            textCenter={true}
          />
        </div>
      </div>
      <Content
        mainTitle={"Our Testimonials"}
        title={"Our Testimonials"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
      >
        <div className="flex gap-16 justify-center items-center">
          <div className="cursor-pointer">
            <FaArrowLeft style={{ fontSize: "24px" }} />
          </div>
          <div className="flex flex-col items-center text-center gap-10">
            <Image src={image.avatar} alt={"img"} />
            <Text classes={"w-full max-w-[560px] line-clamp-5"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              metus tincidunt laoreet ultricies condimentum ac integer aliquam.
              Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
              elementum morbi imperdiet suscipit erat ut. Purus volutpat in
              turpis gravida blandit.
            </Text>
            <div className="flex gap-2">
              <FaRegStar style={{ fontSize: "24px", color: "#FFA800" }} />
              <FaRegStar style={{ fontSize: "24px", color: "#FFA800" }} />
              <FaRegStar style={{ fontSize: "24px", color: "#FFA800" }} />
              <FaRegStar style={{ fontSize: "24px", color: "#FFA800" }} />
              <FaRegStar style={{ fontSize: "24px", color: "#FFA800" }} />
            </div>
          </div>
          <div className="cursor-pointer">
            <FaArrowRight style={{ fontSize: "24px" }} />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Teams;
