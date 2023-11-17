import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const naviagte = useNavigate();

  return (
    <div
      className={
        "md:flex items-center justify-center rounded-sm bg-white md:mx-5 mx-2 hidden"
      }
    >
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            naviagte("/search?q=" + searchText);
          }
        }}
        type="text"
        className="bg-white text-md text-black xl:w-128 md:w-96 sm:w-48 md:h-10 h-8 pl-3 outline-none rounded-sm"
        placeholder="Search for Products, Brands and More.."
      />
      <button
        onClick={() => {
          naviagte("/search?q=" + searchText);
        }}
      >
        <BiSearch
          className="md:mx-2 mx-1 text-blue-500 transition"
          size={25}
        />
      </button>
    </div>
  );
}
