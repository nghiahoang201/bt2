import React from "react";
import Image from "../../../helpek/Image";
import image from "../../../image";
import Card from "../../../helpek/Card";
import Button from "../../../helpek/Button";
import {
  listBlog,
  listCategories,
  listInformationPage,
  listPost,
  listTags,
} from "../../../mockData";
import Input from "../../../helpek/Input";
import { FaSistrix } from "react-icons/fa6";
import Post from "../../../helpek/Post";

const Blog = () => {
  return (
    <div className="w-full mt-32 flex flex-col items-center">
      <div className="w-full">
        <Image src={image.sliderBlog} alt={"blog"} classes={"w-full"} />
      </div>
      <div className="w-full flex items-center justify-center mt-32">
        <div className="w-full max-w-[1140px] flex flex-wrap lg:flex-nowrap gap-16 px-10">
          <div className="w-full max-w-[730px] flex flex-col gap-20">
            <Card
              listCard={listBlog}
              fullImage={true}
              start={true}
              button={
                <Button
                  classes={
                    "lg:w-[220px] lg:h-[58px] w-[140px] h-[40px] bg-[#FF64AE] text-white rounded-[50px]"
                  }
                >
                  Read More
                </Button>
              }
              classesCard={" w-full max-w-[730px]"}
            />
          </div>
          <div className="w-full max-w-[350px] flex flex-wrap flex-col gap-20 ">
            <div className="relative">
              <Input
                classes={"rounded-[25px]"}
                placeholder={"Search here ..."}
                name={"search"}
              />
              <Button
                classes={
                  "absolute z-20 lg:w-[76px] w-[56px] h-[56px] bg-[#172176] rounded-r-[25px] top-0 right-0"
                }
              >
                <FaSistrix
                  style={{
                    fontSize: "26px",
                    color: "#fff",
                  }}
                />
              </Button>
            </div>
            <Post
              listPost={listPost}
              mainTitle={"Recent Posts"}
              classes={
                "w-full max-w-[350px] rounded-[25px] shadow-card bg-white px-6 py-12"
              }
              classesPost={
                "flex items-center gap-6 mt-6 flex-wrap md:flex-nowrap lg:flex-nowrap"
              }
            />
            <Post
              listCategories={listCategories}
              mainTitle={"Categories"}
              classes={
                "w-full max-w-[350px]  rounded-[25px] shadow-card bg-white px-10 py-12"
              }
              classesPost={"flex flex-col gap-1 mt-4"}
            />
            <Post
              listTags={listTags}
              mainTitle={"Cloud Tags"}
              classes={
                "w-full max-w-[350px] rounded-[25px] shadow-card bg-white px-9 py-12"
              }
              classesPost={"flex  gap-4 mt-4 flex-wrap"}
            />
            <Post
              listInformation={listInformationPage}
              mainTitle={"Social Connect"}
              classes={
                "w-full max-w-[350px] rounded-[25px] shadow-card bg-white px-6 py-12"
              }
              classesPost={"flex  gap-10 mt-4 flex-wrap"}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 flex gap-4 cursor-pointer">
        <div className="w-9 h-9 rounded-[50%] bg-[#091156] text-white flex justify-center items-center">
          1
        </div>
        <div className="w-9 h-9 rounded-[50%] bg-transparent text-[#C7C7C7] flex justify-center items-center">
          2
        </div>
        <div className="w-9 h-9 rounded-[50%] bg-transparent text-[#C7C7C7] flex justify-center items-center">
          3
        </div>
      </div>
    </div>
  );
};

export default Blog;
