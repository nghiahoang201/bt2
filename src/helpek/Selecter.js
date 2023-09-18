import React from "react";
import { FaAngleUp } from "react-icons/fa6";
import "../publicCss/index.css";
import Text from "./Text";

const Selecter = ({ title, desc, desc2 }) => {
  const [select, setSelect] = React.useState(false);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[970px] px-10">
        <div className="w-full">
          <div
            className="p-4 w-full flex items-center justify-between cursor-pointer"
            onClick={() => setSelect(!select)}
          >
            <h2 className="font-semibold text-base leading-6 tracking-[10%] text-[#091156]">
              {title}
            </h2>
            <i>
              {select ? (
                <FaAngleUp
                  style={{ color: "#091156", transform: "rotate(180deg)" }}
                />
              ) : (
                <FaAngleUp style={{ color: "#091156" }} />
              )}
            </i>
          </div>
          {select && (
            <div className="bg-[#F6F7FF] w-full max-w-[970px] rounded-b-[20px] border-t border-[#091156] p-14 flex flex-col gap-6 animation">
              <Text classes={"text-[#8B8B8B] italic"}>{desc}</Text>
              <Text classes={"text-[#8B8B8B] italic"}>{desc2}</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selecter;
