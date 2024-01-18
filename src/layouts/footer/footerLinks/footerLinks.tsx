import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const path = [
  [{ to: "/aboutUs" }, { to: "/employees" }, { to: "/contact" }, { to: "" }],
  [
    { to: "/ourWork/weakCurrents" },
    { to: "/ourWork/mechanicalSystems" },
    {
      to: "/ourWork/waterSupplySystems",
    },
    {
      to: "/ourWork/Crane-transportSystems",
    },
    { to: "/ourWork/electricity" },
  ],
  [{ to: "" }, { to: "/partners" }, { to: "/projects" }],
];

export function FooterLinks() {
  const { t } = useTranslation();
  const footerSelects = t("footer.selects", { returnObjects: true }) as {
    titles: Record<string, Record<string, string>>;
    links: Record<string, { linkTitle: string }[]>;
  };
  const titles = Object.values(footerSelects.titles || {}).flatMap(
    Object.values
  );
  const links = Object.values(footerSelects.links || {}).flatMap(Object.values);

  return (
    <div className="s:hidden md2:flex flex md2:mt-[43px] md2:ml-[2.8vw] lg1:ml-[7.3vw] lg1:mt-[90px] ">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`${index === 1 && "md2:ml-[2.3vw] lg1:ml-[125px]"}${
            index === 2 && "md2:ml-[3.8vw] lg1:ml-[45px]"
          }`}
        >
          <p className="font-avenirBold text-[14px] leading-[21px] text-blackText-rgba">
            {title}
          </p>
          <ul className="flex flex-col mt-[15px] gap-[16px]">
            {links[index].map((link: string, indx: number) => (
              <li
                key={indx}
                className="font-avenirMedium text-[14px] leading-[21px] text-black-rgba"
              >
                <Link to={path[index][indx].to}>{Object.values(link)}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
