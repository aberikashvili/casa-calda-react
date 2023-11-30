import { Fields } from "./fields";
import { FrameText } from "./frameText";
import { HeadlineTexts } from "./headlineTexts";
import { Links } from "../../componenets/links";

export function ContactPage() {
  const textColor = "rgba(255, 255, 255, 1)";
  const borderColor = "rgba(255, 255, 255, 0.2)";
  return (
    <div className="w-screen truncate static ">
      <HeadlineTexts />
      <div className="w-screen md2:w-auto absolute z-10 s:top-[256px] md2:top-[376px] md2:left-[160px] flex s:flex-col md2:flex-row ">
        <div className="flex flex-col s:w-[91.3vw] md2:w-[24.3vw] lg1:w-[27.3vw] s:h-[350px] md2:h-[627px] bg-orng-rgba s:mx-auto md2:mx-0">
          <FrameText />
          <div className="s:mt-[34px] s:ml-[22vw] md2:ml-[6vw] md2:mt-[134px] lg1:ml-[9vw]">
            <Links textColor={textColor} borderColor={borderColor} />
          </div>
        </div>
        <Fields />
      </div>
    </div>
  );
}
