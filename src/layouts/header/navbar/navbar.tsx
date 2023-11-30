import { Link, useLocation } from "react-router-dom";

export function NavBar({ display }: any) {
  const location: any = useLocation();
  return (
    <ul
      className={`s:${
        display === true ? "" : "hidden"
      } s:flex s:absolute s:h-screen s:w-screen lgg:static s:bg-gray-rgba lgg:bg-opacity-0 md2:top-[80px]  lgg:h-[80px]  lgg:w-auto s:top-[110px] s:right-[0vw] s:flex-col s:py-[20px] lgg:py-0 s:z-20 s:gap-[23px] lg1:z-0 lgg:flex lgg:flex-row  lg1:pb-0 md2:ml-[57px] lg:ml-[-21px] lg1:ml-[57px] items-center md1:gap-[28px] lg:gap-[28px] lg1:gap-[36px] font-[400] text-[14px] leading-[21px] text-black-rgba`}
    >
      <li
        className={`${
          location.pathname === "/" && "text-blueText-rgba font-[600]"
        } lgg:hidden text-center lg1:flex`}
      >
        <Link to="/">მთავარი გვერდი</Link>
      </li>

      <li
        className={`${
          location.pathname === "/aboutUs" && "text-blueText-rgba font-[600]"
        } text-center`}
      >
        <Link to="/aboutUs">ჩვენ შესახებ</Link>
      </li>
      <li
        className={`${
          location.pathname === "/partners" && "text-blueText-rgba font-[600]"
        } text-center`}
      >
        <Link to="/partners">პარტნიორები</Link>
      </li>
      <li
        className={`${
          location.pathname === "/projects" && "text-blueText-rgba font-[600]"
        } text-center`}
      >
        <Link to="/projects">პროექტები</Link>
      </li>
      <li
        className={`${
          location.pathname === "/OurWork/*" && "text-blueText-rgba font-[600]"
        } text-center`}
      >
        <Link to="/OurWork/*">საქმიანობა</Link>
      </li>
      <li
        className={`${
          location.pathname === "/employees" && "text-blueText-rgba font-[600]"
        } lgg:hidden text-center lg1:flex`}
      >
        <Link to="/employees">თანამშრომლები</Link>
      </li>
    </ul>
  );
}
