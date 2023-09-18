import React from "react";
import image from "../../image";
import Button from "../../helpek/Button";
import Image from "../../helpek/Image";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = ({ home2 }) => {
  const listMenu = ["Home+", "About", "Service", "Gallery", "Blog"];
  const listMenuPhone = [
    "Home+",
    "About",
    "Service",
    "Gallery",
    "Blog",
    "Contact",
  ];
  const history = useNavigate();
  const path = window.location.pathname;

  const selectText = () => {
    switch (path) {
      case "/home2": {
        return "Home+";
      }
      case "/About": {
        return "About";
      }
      case "/Service": {
        return "Service";
      }
      case "/Gallery": {
        return "Gallery";
      }
      case "/Blog": {
        return "Blog";
      }
      case "/Contact": {
        return "Contact";
      }
      default:
    }
  };

  const [resize, setResize] = React.useState(window.innerWidth);
  const [hideMenuPhone, setHideMenuPhone] = React.useState(false);

  const handle = () => {
    setResize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <header className="w-full h-16 flex items-center justify-center mt-10 absolute z-[120] top-0">
      {resize < 640 ? (
        <div className="w-full px-10 h-full flex items-center justify-between relative z-50">
          <div onClick={() => history("/")} className="cursor-pointer">
            <Image
              src={home2 ? image.logohome2 : image.logo}
              alt="logoHeader"
              classes={"lg:w-[201px] h-[54px] md:w-[180px]"}
            />
          </div>
          <div className="relative z-[100]">
            {!hideMenuPhone && (
              <div
                className="w-10 h-10 cursor-pointer"
                onClick={() => setHideMenuPhone(true)}
              >
                <HiMenu
                  style={{ fontSize: "30px", color: home2 ? "#fff" : "" }}
                />
              </div>
            )}
          </div>
          {hideMenuPhone && (
            <div className="flex flex-col gap-6 bg-[rgba(0,0,0,0.8)] fixed z-50 top-0 right-0 bottom-0 w-60 ">
              <div
                className="w-10 h-10 p-5 mb-5 cursor-pointer"
                onClick={() => setHideMenuPhone(false)}
              >
                <HiOutlineX style={{ color: "#fff", fontSize: "30px" }} />
              </div>
              {listMenuPhone.map((item, index) => (
                <div
                  className={`text-base leading-6 tracking-[10%] font-medium p-2 w-full flex justify-center text-white  ${
                    home2
                      ? selectText() === item
                        ? "bg-[rgba(255,255,255,0.2)]"
                        : ""
                      : selectText() === item
                      ? "bg-[rgba(255,255,255,0.2)]"
                      : ""
                  } cursor-pointer`}
                  key={index}
                  onClick={() => {
                    history(`/${item && item === "Home+" ? "home2" : item}`);
                    setHideMenuPhone(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-[1140px] px-10 h-full flex items-center justify-between relative z-50">
          <div onClick={() => history("/")} className="cursor-pointer">
            <Image
              src={home2 ? image.logohome2 : image.logo}
              alt="logoHeader"
              classes={"lg:w-[201px] h-[54px] md:w-[180px]"}
            />
          </div>
          <div className="flex items-center gap-14">
            <div>
              <div className="flex items-center lg:gap-11 md:gap-6">
                {listMenu.map((item, index) => (
                  <div
                    className={`md:text-sm lg:text-base leading-6 tracking-[10%] font-medium ${
                      home2
                        ? selectText() === item
                          ? "text-white hover:text-white"
                          : "text-[#D8DCFF] hover:text-white"
                        : selectText() === item
                        ? "text-[#41487F] hover:text-[#41487F]"
                        : "text-[#8B8B8B] hover:text-[#41487F]"
                    } cursor-pointer`}
                    key={index}
                    onClick={() =>
                      history(`/${item && item === "Home+" ? "home2" : item}`)
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Button action={() => history("/contact")}>Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
