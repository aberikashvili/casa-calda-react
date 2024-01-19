import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import img from "./img/a01539d5313a72b329ca7b156ccdecf8.jpg";

export function WorkCard({ title, links, index }: any) {
  
  const par = useParams();
  const minHeight =
    links.length === 5 ? 316 : links.length === 2 ? 185 : links.length * 37;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="s:w-[92vw] lg1:w-[385px] relative max-w-[385px] bg-white-rgba-10 items-center md2:h-[316px]"
      style={{ minHeight: `${minHeight}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="img" className="w-full h-full" />
      <div
        className={`absolute hover:opacity-[0.8] 
        ${
          par.param === index.toString()
            ? "opacity-[0.5] bg-blueText-rgba text-white"
            : "opacity-1 bg-white-rgba-10"
        } 
        hover:bg-blueText-rgba hover:text-[white] h-full w-full top-0 left-0 py-[34px]`}
      >
        <h2 className="font-avenirBold text-16px leading-[24px] pl-[24px]">
          {title}
        </h2>
        <ul className={`flex flex-col mt-[18px] gap-[16px] pl-[18px]`}>
          {links.map((link: any, index: any) => (
            <div key={index} className="flex items-start">
              <BsDot className="text-orng-rgba scale-150" />
              <li
                className={`font-avenirNormal text-[14px] leading-[21px] ml-1 s:max-w-[290px] lg1:max-w-[300px] ${
                  isHovered
                    ? "text-white opacity-0.8"
                    : "text-black-rgba opacity-1"
                }`}
              >
                {link.linkTitle}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
