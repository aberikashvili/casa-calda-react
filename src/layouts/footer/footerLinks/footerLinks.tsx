import { Link } from "react-router-dom";

export function FooterLinks() {
  return (
    <div className="s:hidden md2:flex flex md2:mt-[43px] md2:ml-[2.8vw] lg1:ml-[7.3vw] lg1:mt-[90px] ">
      <div>
        <p className="font-[700] text-[14px] leading-[21px] text-blackText-rgba">
          თბილი სახლი
        </p>
        <ul className="flex flex-col mt-[15px] gap-[16px]">
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/aboutUs">ჩვენ შესახებ</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/employees">თანამშრომლები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/contact">კონტაქტი</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="">წესები და პირობები</Link>
          </li>
        </ul>
      </div>
      <div className="md2:ml-[2.3vw] lg1:ml-[125px]">
        <p className="font-[700] text-[14px] leading-[21px] text-blackText-rgba">
          სერვისები
        </p>
        <ul className="flex flex-col mt-[15px] gap-[16px]">
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/ourWork/weakCurrents">სუსტი დენები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/ourWork/mechanicalSystems">მექანიკური სისტემები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/ourWork/waterSupplySystems">წყალგაყვანილობის სისტემები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/ourWork/Crane-transportSystems">ამწე-სატრანსპორტო სისტემები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/ourWork/electricity">ელექტროობა</Link>
          </li>
        </ul>
      </div>
      <div className="md2:ml-[3.8vw] lg1:ml-[45px]">
        <p className="font-[700] text-[14px] leading-[21px] text-blackText-rgba">
          სწრაფი ლინკები
        </p>
        <ul className="flex flex-col mt-[15px] gap-[16px]">
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="">ჯილდოები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/partners">პარტნიორები</Link>
          </li>
          <li className="font-[500] text-[14px] leading-[21px] text-black-rgba-]">
            <Link to="/projects">პროექტები</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
