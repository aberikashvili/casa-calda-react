import { TbBrandFacebook } from "react-icons/tb";
import { PiTwitterLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { Btn_link } from "../styled_components";

export function Links({ textColor, borderColor }: any) {
  return (
    <div className=" flex gap-[16px]">
      <Btn_link
        style={{ color: textColor, border: `1px solid ${borderColor}` }}
      >
        <TbBrandFacebook size="22px" />
      </Btn_link>
      <Btn_link
        style={{ color: textColor, border: `1px solid ${borderColor}` }}
      >
        <PiTwitterLogo size="22px" />
      </Btn_link>
      <Btn_link
        style={{ color: textColor, border: `1px solid ${borderColor}` }}
      >
        <FaInstagram size="22px" />
      </Btn_link>
    </div>
  );
}
