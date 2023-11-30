import { useState } from "react";
import { ListBoxItem } from "./listBoxItem";
const boxesData = [
  {
    title: "თბილი სახლი",
    links: [
      { to: "/aboutUs", label: "ჩვენ შესახებ" },
      { to: "/employees", label: "თანამშრომლები" },
      { to: "/contact", label: "კონტაქტი" },
      { to: "", label: "წესები და პირობები" },
    ],
  },
  {
    title: "სერვისები",
    links: [
      { to: "/ourWork/weakCurrents", label: "სუსტი დენები" },
      { to: "/ourWork/mechanicalSystems", label: "მექანიკური სისტემები" },
      {
        to: "/ourWork/waterSupplySystems",
        label: "წყალგაყვანილობის სისტემები",
      },
      {
        to: "/ourWork/Crane-transportSystems",
        label: "ამწე-სატრანსპორტო სისტემები",
      },
      { to: "/ourWork/electricity", label: "ელექტროობა" },
    ],
  },
  {
    title: "სწრაფი ლინკები",
    links: [
      { to: "", label: "ჯილდოები" },
      { to: "/partners", label: "პარტნიორები" },
      { to: "/projects", label: "პროექტები" },
    ],
  },
];
export function FooterSelects() {
  const [openBoxes, setOpenBoxes] = useState([false, false, false]);
  const toggleBox = (index: any) => {
    const newOpenBoxes = [...openBoxes];
    newOpenBoxes[index] = !newOpenBoxes[index];
    setOpenBoxes(newOpenBoxes);
  };
  return (
    <div className="md2:hidden w-screen pt-[82px] flex flex-col px-[4vw]">
      {boxesData.map((box, index) => (
        <ListBoxItem
          key={index}
          title={box.title}
          links={box.links}
          isOpen={openBoxes[index]}
          toggle={() => toggleBox(index)}
        />
      ))}
    </div>
  );
}
