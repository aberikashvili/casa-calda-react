import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
interface ListBoxItemProps {
  title: string;
  path: { to: string }[];
  links: Record<string, { to: string; link: string }[]>;
  isOpen: boolean;
  toggle: () => void;
}
export function ListBoxItem({
  title,
  links,
  isOpen,
  path,
  toggle,
}: ListBoxItemProps) {
  const linkvalues = Object.values(links || {}).flatMap(Object.values);

  return (
    <div className="border-borderColor-rgba border-b-2 cursor-default border-x-0 border-t-0 py-5 bg-white text-left text-gray-900 ">
      <Listbox>
        <Listbox.Label onClick={toggle} className="relative w-full">
          <span className="flex items-center font-avenirBold text-[14px] leading-[21px] text-blackText-rgba">
            {title}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            {isOpen ? (
              <IoIosArrowUp
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <IoIosArrowDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
          </span>
        </Listbox.Label>
        <Transition
          show={isOpen}
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col mt-[15px] gap-[16px]">
            {linkvalues.map((link: any, index: number) => (
              <li
                key={index}
                className="font-avenirMedium text-[14px] leading-[21px] text-black-rgba-]"
              >
                <Link to={path[index].to}>{link}</Link>
              </li>
            ))}
          </ul>
        </Transition>
      </Listbox>
    </div>
  );
}
