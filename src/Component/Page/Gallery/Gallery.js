import React from "react";
import Image from "../../../helpek/Image";
import image from "../../../image";
import Text from "../../../helpek/Text";
import Slider from "../../../helpek/Slider";
import Button from "../../../helpek/Button";

const Gallery = () => {
  return (
    <div className="w-full mt-32 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1140px] flex flex-col gap-16 mt-32 px-10">
        <div>
          <h2 className="font-semibold text-base text-[#FF64AE]">
            Our Gallery
          </h2>
          <div className="flex lg:gap-28 gap-10">
            <h2 className="lg:text-4xl md:text-3xl font-semibold leading-10 text-[#091156]">
              Check out the collection pictures from our clinic
            </h2>
            <Text classes={"w-[410px]"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Text>
          </div>
        </div>
        <div>
          <Image src={image.gallery} alt={"gallery"} />
        </div>
        <div className="w-full max-w-[660px]">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim,{" "}
            <b className="text-[#091156] font-semibold">our teams</b>.
          </Text>
        </div>
      </div>
      <div className="relative w-full h-[530px] flex justify-center items-center mt-32">
        <Image
          src={image.gallerySlider}
          alt="imgSlider"
          classes={"w-full h-[530px] absolute z-10 left-0 top-0"}
        />
        <Image
          src={image.gallerySlider2}
          alt="imgSlider2"
          classes={"w-full h-[530px] absolute z-0 left-0 top-0"}
        />
        <div className="w-[1140px] flex flex-col justify-center items-center relative z-50  ">
          <Slider
            css={{
              textTitle: "text-white w-full lg:text-[36px]",
              textText: "text-[#CACACA] w-full mt-2 font-normal",
            }}
            title={"Watch the video tour"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            }
            textCenter={true}
            imgBottomText={
              <Image src={image.playGallery} alt={"playGallery"} />
            }
          />
        </div>
      </div>
      <div className="w-full relative z-50 flex items-center justify-center">
        <Image
          src={image.bubbleGallery1}
          alt={"img"}
          classes={"absolute z-0 top-0 right-0"}
        />
        <Image
          src={image.bubbleGallery2}
          alt={"img"}
          classes={"absolute z-0 top-0 right-0"}
        />
        <div className="w-full max-w-[1140px] px-10 flex justify-center items-center flex-wrap gap-16 relative mt-32 z-50">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-base text-[#FF64AE]">
              Get The Quota
            </h2>
            <h2 className="lg:text-4xl font-semibold leading-10 text-[#091156] w-full max-w-[640px]">
              Want to be handled by our professional team immediately?
            </h2>
            <Text classes={"w-full max-w-[440px]"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Text>
          </div>
          <div>
            <Button
              classes={
                "lg:w-[316px] lg:h-[58px] w-[266px] h-[40px] bg-[#FF64AE] rounded-[50px] text-white"
              }
            >
              Make an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
