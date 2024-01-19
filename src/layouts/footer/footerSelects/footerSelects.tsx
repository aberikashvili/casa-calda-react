import { useState } from "react";
import { ListBoxItem } from "./listBoxItem";
import { useTranslation } from "react-i18next";
const path = [
  [{ to: "/aboutUs" }, { to: "/employees" }, { to: "/contact" }, { to: "" }],
  [
    { to: "/ourWork/0" },
    { to: "/ourWork/1" },
    {
      to: "/ourWork/2",
    },
    {
      to: "/ourWork/3",
    },
    { to: "/ourWork/4" },
  ],
  [{ to: "" }, { to: "/partners" }, { to: "/projects" }],
];
export function FooterSelects() {
  const { t } = useTranslation();
  const footerSelects = t("footer.selects", { returnObjects: true }) as {
    titles: Record<string, Record<string, string>>;
    links: Record<string, { linkTitle: string }[]>;
  };
  const titles = Object.values(footerSelects.titles || {}).flatMap(
    Object.values
  );
  const links = Object.values(footerSelects.links || {}).flatMap(Object.values);

  const [openBoxes, setOpenBoxes] = useState([false, false, false]);
  const toggleBox = (index: any) => {
    const newOpenBoxes = [...openBoxes];
    newOpenBoxes[index] = !newOpenBoxes[index];
    setOpenBoxes(newOpenBoxes);
  };
  return (
    <div className="md2:hidden w-screen pt-[82px] flex flex-col px-[4vw]">
      {titles.map((title, index) => (
        <ListBoxItem
          key={index}
          title={title}
          links={links[index]}
          path={path[index]}
          isOpen={openBoxes[index]}
          toggle={() => toggleBox(index)}
        />
      ))}
    </div>
  );
}
