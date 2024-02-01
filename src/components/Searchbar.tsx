import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form className="flex relative items-center justify-center h-10">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:border-blue-500 h-full"
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full">
        <IoSearchSharp />
      </button>
    </form>
  );
}
