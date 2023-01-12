import React from "react";
import s from "./DropdownHeader.module.css";
import { BiChevronDown } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { langProps } from "../../App";

interface DropdownHeaderProps {
  ToggleDropdown: () => void;
  isOpen: boolean;
  selectedArray: langProps[];
  uncheckHandler: (arg: langProps) => void;
}
export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  ToggleDropdown,
  isOpen,
  selectedArray,
  uncheckHandler,
}) => {
  return (
    <div className={s.dropdownHeader}>
      <h6>Язык</h6>
      <div className={s.dropdownButton}>
        {selectedArray.length === 0 && <h6>Все языки </h6>}
        <div>
          {isOpen&&selectedArray?.map((lang) => (
            <span
              key={lang.id}
              className={s.dropdown_tags}
              onClick={() => uncheckHandler(lang)}
            >
              {lang.name}
              <IoCloseSharp size={15} />
            </span>
          ))}
        </div>
        <BiChevronDown
          size={25}
          className={isOpen ? s.open : ""}
          onClick={ToggleDropdown}
        />
      </div>
    </div>
  );
};
