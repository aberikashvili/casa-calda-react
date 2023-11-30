import { useState } from "react";
import { Btn_active, Btn_default } from "../../../componenets/styled_components";

export function SelectLanguages() {
  const [activeBtn, setActiveBtn] = useState("GEO");
  return (
    <>
      {activeBtn === "GEO" ? (
        <div className="flex items-center rounded-[100px] border border-borderColor-rgba my-[16px] py-1 px-0.5 md2:ml-[16px] lg1:ml-[24px]">
          <Btn_active onClick={() => setActiveBtn("GEO")} className="selectBtn">
            GEO
          </Btn_active>
          <Btn_default onClick={() => setActiveBtn("ENG")}>ENG</Btn_default>
        </div>
      ) : (
        <div className="flex items-center rounded-[100px] border border-borderColor-rgba my-[16px] py-1 px-0.5 md2:ml-[16px] lg1:ml-[24px]">
          <Btn_default onClick={() => setActiveBtn("GEO")}>GEO</Btn_default>
          <Btn_active onClick={() => setActiveBtn("ENG")} className="selectBtn">
            ENG
          </Btn_active>
        </div>
      )}
    </>
  );
}
