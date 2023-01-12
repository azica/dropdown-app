import React, { useContext } from "react";
import s from "./DropdownSearch.module.css";
import { AiOutlineSearch } from "react-icons/ai";

interface DropdownSearchProps {
  searchValue: string;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const DropdownSearch: React.FC<DropdownSearchProps> = ({
  searchValue,
  searchHandler,
}) => {
  return (
    <div className={s.searchInput}>
      <AiOutlineSearch size={20} />
      <input value={searchValue} onChange={searchHandler} placeholder="Поиск" />
    </div>
  );
};
