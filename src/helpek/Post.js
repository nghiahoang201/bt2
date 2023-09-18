import React from "react";
import Image from "./Image";
import Text from "./Text";
import "../publicCss/index.css";

const Post = ({
  classes,
  classesPost,
  mainTitle,
  listPost,
  listCategories,
  listTags,
  listInformation,
}) => {
  return (
    <div className={classes}>
      <h2 className="font-semibold text-base leading-5 text-[#091156]">
        {mainTitle}
      </h2>
      {listPost &&
        listPost?.map((item) => (
          <div className={classesPost} key={item?.id}>
            <div>
              <Image
                src={item?.image}
                alt={"img"}
                classes={"w-[82px] h-[82px]"}
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[200px]">
              <h2 className="font-semibold text-sm tracking-[10%] text-[#FF64AE]">
                {item?.title}
              </h2>
              <Text>{item?.text}</Text>
            </div>
          </div>
        ))}
      {listCategories && (
        <div className={classesPost}>
          {listCategories?.map((item) => (
            <div key={item?.id}>
              <Text>{item?.categories}</Text>
            </div>
          ))}
        </div>
      )}
      {listTags && (
        <div className={classesPost}>
          {listTags?.map((item) => (
            <div key={item?.id}>
              <Text
                classes={
                  "min-h-[20px] min-w-[80px] rounded-[50px] shadow-card-icon border flex items-center justify-center"
                }
              >
                {item?.tag}
              </Text>
            </div>
          ))}
        </div>
      )}
      {listInformation && (
        <div className={classesPost}>
          {listInformation?.map((item, index) => (
            <div
              className="flex items-center w-11 h-11 rounded-[50%] shadow-card-icon justify-center"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
