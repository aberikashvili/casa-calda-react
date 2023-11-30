import { useLocation } from "react-router-dom";
import { Links } from "../../componenets/links";
import Logo from "../../componenets/brandLogo/logo-casacalda 1.png";
import { FooterLinks } from "./footerLinks";
import { FooterSelects } from "./footerSelects";
export function Footer() {
  const location = useLocation();
  const textColor = "rgba(20, 20, 20, 1)";
  const borderColor = "rgba(20, 20, 20, 0.2)";
  return (
    <div
      className={`${
        location.pathname === "/contact" && "pt-[550px] w-full lg1:bg-[#dfdfdf34]"
      }`}
    >
      <div className="flex s:flex-col md2:flex-row items-start bg-white-rgba lgg:pl-[9.5vw] lg1:pl-[7.7vw]">
        <div className=" pt-[32px] flex flex-col items-start">
          <img
            src={Logo}
            className="s:hidden md2:flex w-[180px] h-[60px] scale-[0.97] mt-[10px] px-[10px]"
            alt="brandLogo"
          />
          <p className="s:hidden md2:flex md2:w-[18vw] lg1:w-[20.7vw] break-word whitespace-normal font-[500] leading-[21px] text-[14px] text-blackText-rgba ml-[14px] mt-[10px]">
            კომპანია „თბილი სახლი“2001 წლიდან ფუნქციონირებს და მას მნიშვნელოვანი
            ადგილი უკავია ჩვენი ქვეყნის სამომხმარებლო ბაზარზე.
            <br />
            <br /> კომპანია საქმიანობას სახალხო მეურნეობის დარგების მრავალი
            მიმართულებით ახორციელებს.
          </p>
            <FooterSelects/>
          <div className="s:mt-[16px] s:ml-[4.4vw] md2:mt-[32px] md2:ml-[12px]">
            <Links textColor={textColor} borderColor={borderColor} />
          </div>
        
          <p className="font-[400] text-[12px] leading-[19.2px] text-blackText-rgba mt-[25px] ml-[14px]">
            Casa Calda © 2023. ყველა უფლება დაცულია
          </p>
        </div>
        <FooterLinks/>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.427229275445!2d44.77187807566225!3d41.77600547180073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446decdf4f7811%3A0x8277bbd0ed4e2f56!2sCasa%20Calda!5e0!3m2!1sen!2sge!4v1699835679669!5m2!1sen!2sge"
          height="400"
          loading="lazy"
          className="s:pt-[40px] md2:pt-0 md2:ml-[3.9vw] lg1:ml-[140px] border-none s:w-screen md2:w-[22.25vw]"
        />
      </div>
    </div>
  );
}
