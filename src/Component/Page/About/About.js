import React from "react";
import About from "../../../helpek/About";
import Image from "../../../helpek/Image";
import image from "../../../image";
import Content from "../../../helpek/Content";
import Card from "../../../helpek/Card";
import { listCardUers } from "../../../mockData";
import Slider from "../../../helpek/Slider";

const Abouts = () => {
  return (
    <div className="w-full mt-[104px] ">
      <div className="relative z-[100]">
        <About
          mainTitle={"About"}
          title={
            "We are a leading beauty clinic that has been around since 2002"
          }
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          }
          images={
            <Image
              src={image.aboutPageImg}
              alt={"imageAbout"}
              classes={"w-full h-[560px]"}
            />
          }
          classes={"flex-col"}
        />
      </div>
      <Content
        classes={"relative z-50"}
        mainTitle={"Professional Teams"}
        title={"The Professional expert"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
        bubble={
          <>
            <Image
              src={image.vector1}
              alt={"img"}
              classes={"w-[1080px] h-[1414px] absolute z-0 right-0 -bottom-80"}
            />
            <Image
              src={image.vector2}
              alt={"img"}
              classes={"w-[1150px] h-[1504px] absolute z-0 right-0 -bottom-80"}
            />
          </>
        }
      >
        <Card
          listCard={listCardUers}
          hover={true}
          classesCard={"w-full max-w-[310px] h-[540px]"}
        />
      </Content>
      <div className="relative w-full h-[530px] flex justify-center items-center mt-32">
        <Image
          src={image.bgAbout}
          alt="imgSlider"
          classes={"w-full h-[530px] absolute z-10 left-0 top-0"}
        />
        <Image
          src={image.bgAbout2}
          alt="imgSlider2"
          classes={"w-full h-[530px] absolute z-0 left-0 top-0"}
        />
        <div className="w-[1140px] flex flex-col justify-center items-center relative z-50  ">
          <Slider
            css={{
              textTitle: "text-white w-full lg:text-[36px]",
              textText: "text-[#CACACA] w-full mt-2 font-normal",
            }}
            mainTitle={"Business Slogan"}
            title={"Best responsibility and service for our customers"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            }
            textCenter={true}
          />
        </div>
      </div>
      <About
        mainTitle={"Our Vision"}
        title={"Be the best and go international"}
        desc={
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,quam suscipit purus donec amet. Egestas volutpat facilisi eulibero."
        }
        desc2={
          "Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        }
        locationTextRight={true}
        images={
          <Image
            src={image.abouthome2}
            alt={"img"}
            classes={"w-[400px] h-[300px]"}
          />
        }
        classes={"gap-10"}
        bubble={
          <>
            <Image
              src={image.bgBubble1}
              alt={"bgBubble1"}
              classes={"w-[1222px] h-[1164px] absolute z-0 left-0 top-24"}
            />
            <Image
              src={image.bgBubble2}
              alt={"bgBubble2"}
              classes={"w-[1120px] h-[1212px] absolute z-0 left-0 top-24"}
            />
          </>
        }
      />
      <About
        mainTitle={"Our Mission"}
        title={"Special & premium service to any clients"}
        desc={
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,quam suscipit purus donec amet. Egestas volutpat facilisi eulibero."
        }
        desc2={
          "Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        }
        images={
          <Image
            src={image.aboutll}
            alt={"img"}
            classes={"w-[400px] h-[300px]"}
          />
        }
      />
      <Content
        mainTitle={"Our Clients"}
        title={"Well-known agencies"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      >
        <Image src={image.clientLogo} alt={"clientLogo"} />
      </Content>
    </div>
  );
};

export default Abouts;
