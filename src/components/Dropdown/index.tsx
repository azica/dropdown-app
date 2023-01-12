import React from "react";
import s from "./Dropdown.module.css";
import { DropdownSearch } from "../DropdownSearch";
import { langProps } from "../../App";

interface DropdownProps {
  isOpen: boolean;
  langArray: langProps[];
  searchValue: string;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: boolean;
}
export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  langArray,
  searchValue,
  searchHandler,
  checkedHandler,
  selected,
}) => {
  return (
    <div className={isOpen ? s.dropdown_menu + " " + s.open : s.dropdown_menu}>
      <DropdownSearch searchValue={searchValue} searchHandler={searchHandler} />
      <ul className={s.dropdown_list}>
        {langArray?.map((lang) => (
          <li
            className={` ${s.dropdown_listItem}  ${
              lang?.name.toLowerCase().startsWith(searchValue)
                ? s.block
                : s.hidden
            }`}
            key={lang.id}
          >
           <img src={`/images/${lang.icon}`}/>
            <span>{lang?.name}</span>
            <input
              value={lang?.name}
              checked={lang?.selected}
              onChange={checkedHandler}
              type="checkbox"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
