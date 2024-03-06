import React from "react";
import { Menu } from "@headlessui/react";
import { TDropdownData, TPropertyStatus } from "@/types/general.types";
interface DropDownProps {
  selected?: string;
  data?: TDropdownData[];
  onClick?: (value: TPropertyStatus) => void;
}

const Dropdown = ({
  selected = "Any status",
  data = [],
  onClick,
}: DropDownProps) => {
  return (
    <Menu as="div" className="relative basis-[160px]">
      <Menu.Button className="flex items-center justify-between p-2.5 rounded-lg gap-c10 bg-grayf7 w-full  text-xs font-medium">
        <span>{selected}</span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.175736 0.681116C0.41005 0.439628 0.789949 0.439628 1.02426 0.681116L4.5 4.26326L7.97573 0.681115C8.21005 0.439627 8.58995 0.439626 8.82426 0.681114C9.05858 0.922602 9.05858 1.31413 8.82426 1.55562L5.34853 5.13776C4.8799 5.62074 4.1201 5.62074 3.65147 5.13777L0.175736 1.55562C-0.0585785 1.31413 -0.0585786 0.922604 0.175736 0.681116Z"
            fill="#808191"
          />
        </svg>
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute left-0 right-0 top-full rounded-lg bg-grayfc shadow-dropdown "
      >
        {data.length > 0 &&
          data.map((item) => (
            <Menu.Item
              onClick={() => onClick?.(item.value as any)}
              key={item.value}
              as="div"
              className="p-2 text-sm font-medium rounded-lg cursor-pointer text-gray80 hover:text-grayfc hover:bg-primary"
              data-value={item.value}
            >
              {item.label}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
