import React from "react";
import image from "../../../image";
import Slider from "../../../helpek/Slider";
import Button from "../../../helpek/Button";
import { listSlider, listCard, listCardUers } from "../../../mockData";
import Content from "../../../helpek/Content";
import About from "../../../helpek/About";
import Card from "../../../helpek/Card";
import Input from "../../../helpek/Input";
import TextArea from "../../../helpek/TextArea";
import Image from "../../../helpek/Image";
import { FaPlay } from "react-icons/fa6";
import Text from "../../../helpek/Text";

const Home = () => {
  const [sliderId, setSliderId] = React.useState(1);
  return (
    <div className="relative z-20 w-full h-full flex flex-col items-center">
      <img
        src={image.bubble1}
        alt="bubble1"
        className="`w-[1212px] h-[710px] absolute top-0 left-0 z-0 "
      />
      <img
        src={image.bubble2}
        alt="bubble1"
        className="w-[1266px] h-[744px] absolute top-0 left-0 z-0 "
      />
      <div className="max-w-[1140px] px-10 flex flex-col justify-center items-center relative z-50 mt-32 ">
        <Slider data={listSlider} sliderId={sliderId} />
        <div className="flex gap-2">
          {listSlider.map((item) => (
            <div key={item?.id}>
              <Button
                classes={`w-[24px] h-[8px] rounded-[50px] ${
                  sliderId === item?.id ? "bg-[#414880]" : "bg-[#eeeeee]"
                }`}
                action={() => setSliderId(item?.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Content
        listCard={listCard}
        mainTitle=" Main Services"
        title=" Learn services to focus on your beauty"
        desc=" Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis."
      >
        <Card listCard={listCard} classesCard={"w-[310px]"} />
      </Content>
      <About
        mainTitle="About Us"
        title="We are the best beauty clinic"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        desc2="Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
        images={
          <Image
            src={image.aboutUs}
            alt={"imgAbout"}
            classes={"lg:w-[460px] lg:h-[400px] md:[400px] md:h-[300px]"}
          />
        }
        bubble={
          <>
            <img
              src={image.bubble3}
              alt="bubble3"
              className="w-[863px] h-[960px] absolute right-0 z-0 "
            />
            <img
              src={image.bubble4}
              alt={"bubble4"}
              className="w-[1024px] h-[824px] absolute right-0 z-0 "
            />
          </>
        }
        button1={<Button>Learn More</Button>}
        button2={
          <div className="flex items-center gap-3">
            <Button
              classes={
                "lg:w-[50px] lg:h-[50px] min-w-[40px] min-h-[40px]  bg-[#091156] rounded-[50%]"
              }
            >
              <FaPlay style={{ color: "#fff" }} />
            </Button>
            <Text>Watch Video</Text>
          </div>
        }
      />
      <Content
        mainTitle="Professional Teams"
        title="The Professional expert"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      >
        <Card classesCard={"w-[310px]"} listCard={listCardUers} hover={true} />
      </Content>

      <div className="w-full flex justify-center items-center relative z-50">
        <img
          src={image.bubble5}
          alt="bubble5"
          className="w-[1176px] h-[930px] absolute left-0 z-0"
        />
        <img
          src={image.bubble6}
          alt="bubble6"
          className="w-[948px] h-[1028px] absolute left-0 z-0 "
        />
        <div className="w-full max-w-[1140px] px-10 flex gap-[100px] items-center flex-wrap lg:flex-nowrap relative z-50">
          <div>
            <Image
              src={image.contact}
              alt="imgContact"
              classes={"lg:w-[616px]"}
            />
          </div>
          <Content
            mainTitle="Contact Us"
            title="Send your inquiry to
        our expert team"
            desc="Lorem ipsum dolor sit amet nulla turapis tellus."
            classes={"mb-32 mt-0 w-[520px]"}
            location="start"
          >
            <form className="w-full flex flex-col gap-9">
              <div className="flex gap-9">
                <Input placeholder="Fist name" name={"fist-name"} />
                <Input placeholder="Last name" name={"last-name"} />
              </div>
              <Input placeholder="Email address" name={"email"} />
              <Input placeholder="Subject message" name={"subject-message"} />
              <TextArea placeholder="Your inquiry here" name={"message"} />
              <Button
                classes={
                  "lg:w-[248px] lg:h-[58px] w-[140px] h-[40px] bg-[#FF64AE] rounded-[50px] text-white"
                }
              >
                Send Message
              </Button>
            </form>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Home;
