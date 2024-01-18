import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function NavBar({ display }: any) {
  const { t } = useTranslation();
  const location: any = useLocation();
  const linkPath = [
    "/",
    "/aboutUs",
    "/partners",
    "/projects",
    "/OurWork/*",
    "/employees",
  ];
  const navbarContent = t("header", { returnObjects: true }) as {
    navbar: Record<string, string>;
  };

  const navbarTitles = Object.values(navbarContent.navbar || {}).flatMap(
    Object.values
  );

  return (
    <ul
      className={`s:${
        display === true ? "" : "hidden"
      } s:flex s:absolute s:h-screen s:w-screen lgg:static s:bg-gray-rgba lgg:bg-opacity-0 md2:top-[80px]  lgg:h-[80px]  lgg:w-auto s:top-[110px] s:right-[0vw] s:flex-col s:py-[20px] lgg:py-0 s:z-20 s:gap-[23px] lg1:z-0 lgg:flex lgg:flex-row  lg1:pb-0 md2:ml-[57px] lg:ml-[-21px] lg1:ml-[57px] items-center md1:gap-[28px] lg:gap-[28px] lg1:gap-[36px] font-avenirNormal text-[14px] leading-[21px] text-black-rgba`}
    >
      {navbarTitles.map((title: string, index) => (
        <li
          key={index}
          className={`${
            location.pathname === linkPath[index] &&
            "text-blueText-rgba font-demi"
          } ${
            (index === 0 || index === navbarTitles.length - 1) &&
            "lgg:hidden lg1:flex"
          } text-center `}
        >
          <Link to={`${linkPath[index]}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
