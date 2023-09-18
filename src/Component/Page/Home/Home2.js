import React from "react";
import Image from "../../../helpek/Image";
import image from "../../../image";
import Slider from "../../../helpek/Slider";
import Text from "../../../helpek/Text";
import About from "../../../helpek/About";
import Button from "../../../helpek/Button";
import Content from "../../../helpek/Content";
import Card from "../../../helpek/Card";
import { listCardBlog, listCardHome2 } from "../../../mockData";
import Input from "../../../helpek/Input";
import { FaPhoneVolume } from "react-icons/fa6";

const Home2 = () => {
  return (
    <div className="relative z-20 w-full h-full flex flex-col items-center">
      <div className="w-full h-[918px] flex justify-center items-center">
        <Image
          src={image.slider2}
          alt="imgSlider2"
          classes={"w-full h-[918px] absolute left-0 top-0"}
        />
        <Image
          src={image.sliderHome2}
          alt="imgSlider2"
          classes={"w-full h-[918px] absolute left-0 top-0"}
        />
        <div className="w-full max-w-[1140px] flex flex-col justify-center items-center relative z-50 ">
          <Slider
            css={{
              textTitle: "text-white ",
              textText: "text-[#D8DCFF]",
            }}
            title={"Your beauty center place"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis."
            }
            button={
              <div className="flex justify-center items-center gap-10 cursor-pointer">
                <div className="lg:w-32 lg:h-32 w-28 h-28 rounded-[50%] bg-transparent border border-white flex justify-center items-center">
                  <Image src={image.play} alt="imgplay" />
                </div>
                <Text classes={"text-white font-semibold w-40"}>
                  Tour Video
                </Text>
              </div>
            }
            buttons={
              <Button
                classes={
                  "bg-transparent border border-white lg:w-[180px] lg:h-[52px] w-[140px] h-[40px] text-white rounded-[15px]"
                }
              >
                More Details
              </Button>
            }
          />
        </div>
      </div>
      <About
        mainTitle={"About Us"}
        title={"We are the best beauty clinic"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        }
        classes={"gap-10"}
        locationTextRight={true}
        images={
          <Image
            src={image.abouthome2}
            alt={"imghome2"}
            classes={"w-[300px] h-[300px]"}
          />
        }
        button1={
          <Button
            classes={
              "lg:w-[200px] lg:h-[58px] min-w-[120px] min-h-[40px] bg-[#FF64AE] text-white rounded-[50px]"
            }
          >
            Learn More
          </Button>
        }
      />
      <Content
        mainTitle={"Main Services"}
        title={"Our focus services"}
        desc={"Lorem ipsum dolor sit amet."}
      >
        <Card
          listCard={listCardHome2}
          classesCard={"gap-6 w-[300px]"}
          start={true}
          border={true}
          button={
            <Button classes={"bg-transparent h-[20px] text-[#FF64AE]"}>
              {"Learn more >>"}
            </Button>
          }
        />
      </Content>
      <div className="relative w-full h-[700px] flex justify-center items-center mt-32">
        <Image
          src={image.bgSliderhome2}
          alt="imgSlider2"
          classes={"w-full h-[700px] absolute left-0 top-0"}
        />
        <div className="w-full max-w-[1140px] flex flex-col justify-center items-center relative z-50 ">
          <Slider
            css={{
              textTitle: "text-white lg:text-[36px]",
              textText: "text-[#D8DCFF]",
              button:
                "bg-transparent border border-white w-[180px] h-[52px] text-white rounded-[15px]",
            }}
            title={"Why choosing us?"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
            }
            img={image.groud}
          />
        </div>
      </div>
      <Content
        mainTitle={"The Blog"}
        title={"Our latest news"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      >
        <Card
          listCard={listCardBlog}
          classesCard={"w-[300px]"}
          start={true}
          fullImage={true}
          button={
            <Button classes={"bg-transparent h-[20px] text-[#FF64AE]"}>
              {"Learn more >>"}
            </Button>
          }
        />
      </Content>
      <div className="w-full flex justify-center  mt-32">
        <div className="w-full max-w-[1140px] flex flex-wrap lg:flex-nowrap gap-20 px-10">
          <div>
            <h2
              className={
                "font-semibold text-4xl leading-[46px] text-[#091156] max-w-[732px]"
              }
            >
              Request call services
            </h2>
            <Text classes={""}>
              Lorem ipsum dolor sit amet, consect adipiscing elit
              <b className="text-[#091156]"> Contact Us</b>.
            </Text>
          </div>
          <div className="w-full max-w-[580px] text-end flex flex-col gap-1">
            <div className="relative">
              <Input
                classes={"rounded-[25px]"}
                placeholder={"Insert your phone number here ..."}
                name={"phone"}
              />
              <Button
                classes={
                  "absolute z-20 lg:w-[110px] lg:h-[56px] w-[80px] h-[56px] bg-[#FF64AE] rounded-r-[25px] top-0 right-0"
                }
              >
                <FaPhoneVolume
                  style={{
                    fontSize: "26px",
                    color: "#fff",
                    transform: "rotate(45deg)",
                  }}
                />
              </Button>
            </div>
            <p className="font-normal italic text-xs tracking-[10%] leading-5 text-[#8B8B8B]">
              Toll free for our coverage areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
