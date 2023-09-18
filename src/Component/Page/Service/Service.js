import React from "react";
import Content from "../../../helpek/Content";
import Image from "../../../helpek/Image";
import image from "../../../image";
import About from "../../../helpek/About";
import Slider from "../../../helpek/Slider";
import Selecter from "../../../helpek/Selecter";

const Service = () => {
  return (
    <div className="w-full mt-32">
      <Content
        mainTitle={"Our Services"}
        title={"We focus on your beauty"}
        desc={"Lorem ipsum dolor sit amet"}
        classes={"relative z-50"}
        bubble={
          <>
            <Image
              src={image.vector60}
              alt={"vector60"}
              classes={"w-full h-[862px] absolute z-0 top-0"}
            />
            <Image
              src={image.vector61}
              alt={"vector61"}
              classes={"w-full h-[854px] absolute z-0 top-0"}
            />
          </>
        }
      >
        <Image src={image.Section} alt={"section"} />
      </Content>
      <About
        mainTitle={"Beauty Consultation"}
        title={"We services beauty consultation"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        }
        textLink={"Make an Appointment"}
        images={<Image src={image.animationSer} alt={"img"} />}
        locationTextRight={true}
      />
      <About
        mainTitle={"Skin Treatements"}
        title={"Skin care and treatment by expert"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        }
        textLink={"Make an Appointment"}
        images={<Image src={image.animationSer2} alt={"img"} />}
      />
      <About
        mainTitle={"Beauty Product"}
        title={"We present quality beauty products"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        }
        textLink={"Make an Appointment"}
        images={<Image src={image.animationSer3} alt={"img"} />}
        locationTextRight={true}
      />
      <div className="relative w-full h-[700px] flex justify-center items-center mt-32">
        <Image
          src={image.sliderSer}
          alt="imgSlider2"
          classes={"w-full h-[700px] absolute z-10 left-0 top-0"}
        />
        <Image
          src={image.sliderSer2}
          alt="imgSlider2"
          classes={"w-full h-[700px] absolute z-0 left-0 top-0"}
        />
        <div className="w-[1140px] flex flex-col justify-center items-center relative z-50">
          <Slider
            css={{
              textTitle: "text-white lg:text-[36px]",
              textText: "text-[#CACACA] font-normal",
              button:
                "bg-transparent border border-white w-[180px] h-[52px] text-white rounded-[15px]",
            }}
            title={"Best responsibility and service for our customers"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            }
            img={image.playButton}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-semibold text-4xl leading-10 text-[#091156]">
            Services FAQ’s
          </h2>
          <div className="w-12 bg-[#FF64AE] h-2 rounded"></div>
        </div>
        <div className="w-full max-[970px]">
          <Selecter
            title={"Is beauty consultation handled thoroughly?"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
            }
            desc2={
              "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
            }
          />
          <Selecter
            title={"Can I be beautiful in an instant time?"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
            }
            desc2={
              "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
            }
          />
          <Selecter
            title={
              "Are there any side effects to the treatment methods or treatments at this clinic?"
            }
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
            }
            desc2={
              "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
            }
          />
          <Selecter
            title={
              "Do professionals have accreditation in their respective fields?"
            }
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"
            }
            desc2={
              "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
