import { useState, useEffect } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { Btn_active, Btn_default } from "../../../../componenets/styled_components";

export function SelectLanguages() {
  const [currentCode, setCurrentCode] = useState<string>("en");
  
  useEffect(() => {
    const currentLanguageCode = cookies.get("i18next") || "en";
    setCurrentCode(currentLanguageCode);
    i18next.changeLanguage(currentLanguageCode);
  }, []);

  const handleLanguageChange = (code: string) => {
    setCurrentCode(code);
    i18next.changeLanguage(code);
    cookies.set("i18next", code, { expires: 365 });
  };

  return (
    <>
      {currentCode === "ge" ? (
        <div className="flex items-center rounded-[100px] border border-borderColor-rgba my-[16px] py-1 px-0.5 md2:ml-[16px] lg1:ml-[24px]">
          <Btn_active
            onClick={() => handleLanguageChange("ge")}
            className="selectBtn"
          >
            GEO
          </Btn_active>
          <Btn_default onClick={() => handleLanguageChange("en")}>
            ENG
          </Btn_default>
        </div>
      ) : (
        <div className="flex items-center rounded-[100px] border border-borderColor-rgba my-[16px] py-1 px-0.5 md2:ml-[16px] lg1:ml-[24px]">
          <Btn_default onClick={() => handleLanguageChange("ge")}>
            GEO
          </Btn_default>
          <Btn_active
            onClick={() => handleLanguageChange("en")}
            className="selectBtn"
          >
            ENG
          </Btn_active>
        </div>
      )}
    </>
  );
}
