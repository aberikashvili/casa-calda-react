import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Btn_orng } from "../../componenets/styled_components";
import Logo from "../../componenets/brandLogo/logo-casacalda 1.png";
import { HiMenu } from "react-icons/hi";
import {IoMdClose }from "react-icons/io"
import { NavBar } from "./navbar";
import { SelectLanguages } from "./selectLanguages";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);
  return (
    <div
      className={`s:min-h-[56px] md2:min-h-[80px] s:bg-white ${
        location.pathname === "/contact" && "md2:bg-blue-rgba"
      } md2:pl-[134px] flex w-screen s:flex-col lgg:flex-row`}
    >
      <div className="flex items-center s:justify-between md2:justify-normal s:mx-auto md2:mx-0 s:px-[5vw] md2:px-0">
        <div
          className={`w-[240px] md2:h-[80px] s:h-[56px] flex ${
            display && "items-center"
          }`}
          onClick={() => navigate("/")}
        >
          {display ? (
            <SelectLanguages />
          ) : (
            <img
              src={Logo}
              className="md:scale-[0.75] s:scale-[0.72] s:ml-[-22px] md2:ml-[0px]"
              alt="brandLogo"
            />
          )}
        </div>
        {display ? (
          <IoMdClose
            className="lgg:hidden s:ml-[13vw] sm:ml-[21vw] md2:ml-[40vw] scale-[1.6]"
            onClick={toggleDisplay}
          />
        ) : (
          <HiMenu
            className="lgg:hidden s:ml-[13vw] sm:ml-[21vw] md2:ml-[40vw] scale-[1.6]"
            onClick={toggleDisplay}
          />
        )}
      </div>
      <div className="s:hidden lgg:flex">
        <NavBar display={display} setDisplay={setDisplay} />
      </div>
      {display && (
        <div className="s:flex s:absolute lgg:static s:bg-gray-rgba lgg:bg-opacity-0 s:h-screen s:w-screen lgg:w-auto s:top-[55px] md2:top-[80px] s:flex-col left-0 s:z-20 s:gap-[30px]">
          <NavBar display={display} setDisplay={setDisplay} />
          <div className="absolute flex justify-center w-screen z-20 top-[505px] ">
            <Btn_orng
              style={{ padding: "14px 31px", width: "345px" }}
              onClick={() => {
                navigate("/contact"), setDisplay(false);
              }}
            >
              დაგვიკავშირდით
            </Btn_orng>
          </div>
        </div>
      )}
      <div className="flex items-center h-[80px] s:hidden lgg:flex md2:ml-[154px] lg1:ml-[213px] ">
        <Btn_orng
          style={{ padding: "14px 31px" }}
          onClick={() => navigate("/contact")}
        >
          დაგვიკავშირდით
        </Btn_orng>
        <SelectLanguages />
      </div>
    </div>
  );
}
