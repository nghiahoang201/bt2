import React from "react";
import image from "../../../image";
import Image from "../../../helpek/Image";
import Input from "../../../helpek/Input";
import TextArea from "../../../helpek/TextArea";
import Button from "../../../helpek/Button";
import Text from "../../../helpek/Text";
import Content from "../../../helpek/Content";
import Card from "../../../helpek/Card";
import { listCardContact } from "../../../mockData";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-32">
      <div className="w-full flex flex-col items-center">
        <img
          src={image.bubbleContact1}
          alt="bubble5"
          className="w-[1176px] h-[930px] absolute right-0 top-72 z-0"
        />
        <img
          src={image.bubbleContact2}
          alt="bubble6"
          className="w-[948px] h-[1028px] absolute right-0 top-72 z-0 "
        />
        <div className="w-full max-w-[1140px] px-10 flex flex-col mt-32 relative z-50">
          <h2 className="font-semibold text-base leading-5 text-[#FF64AE]">
            Contact Us
          </h2>
          <div
            className={`flex justify-between flex-wrap text-start gap-6 w-full 
            }`}
          >
            <div className=" w-full max-w-[500px]">
              <h2 className="font-semibold text-4xl leading-[46px] text-[#091156] max-w-[732px]">
                Contact service for our customers
              </h2>
            </div>
            <div className=" w-full max-w-[400px]">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1140px] flex-wrap lg:flex-nowrap px-10 flex gap-[100px] items-center justify-center relative z-50 mt-20">
          <div>
            <Image src={image.contact} alt="imgContact" />
          </div>

          <form className="w-[520px] flex flex-col gap-9">
            <div className="flex gap-9">
              <Input placeholder="Fist name" name={"fist-name"} />
              <Input placeholder="Last name" name={"last-name"} />
            </div>
            <Input placeholder="Email address" name={"email"} />
            <Input placeholder="Subject message" name={"subject-message"} />
            <TextArea placeholder="Your inquiry here" name={"message"} />
            <Button
              classes={
                "lg:w-[248px] lg:h-[58px] w-[188px] h-[40px] bg-[#FF64AE] rounded-[50px] text-white"
              }
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="w-full mt-32">
          <Image src={image.map} alt={"map"} classes={"w-full"} />
        </div>
        <Content
          mainTitle={"Get in Touch"}
          title={"Get in Touch"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          }
        >
          <Card
            listCard={listCardContact}
            hover={true}
            classesCard={"w-[300px]"}
          />
        </Content>
      </div>
    </div>
  );
};

export default Contact;
