import React from "react";
import { Link } from "react-router-dom";
import { BiSolidOffer, BiMobileAlt } from "react-icons/bi";
import { GiWashingMachine, GiClothes } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsEmojiSunglasses } from "react-icons/bs";
import { GiKitchenKnives, GiSofa } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";

export default function Category() {
  const menues = [
    { id: 1, name: "Top Offer", icon: <BiSolidOffer size={35} /> },
    { id: 2, name: "Mobile & Tablets", icon: <BiMobileAlt size={35} /> },
    { id: 3, name: "Electronics", icon: <GiWashingMachine size={35} /> },
    { id: 4, name: "TVs & Appliances", icon: <AiFillHome size={35} /> },
    { id: 5, name: "Fashion", icon: <GiClothes size={35} /> },
    { id: 6, name: "Beauty", icon: <BsEmojiSunglasses size={35} /> },
    { id: 7, name: "Home & Kitchen", icon: <GiKitchenKnives size={35} /> },
    { id: 8, name: "Furniture", icon: <GiSofa size={35} /> },
    { id: 9, name: "Sports & Outdoors", icon: <MdSportsTennis size={35} /> },
    { id: 10, name: "Grocery", icon: <LuShoppingBag size={35} /> },
  ];
  return (
    <div className="text-sm justify-between bg-white items-center rounded-xl flex my-3">
      {menues.map((m) => (
        <Link
          to="/"
          key={m.id}
          className="text-slate-900 text-center hover:text-orange-600 transition-colors py-2 m-2 rounded-md flex flex-col items-center"
        >
          <p>{m.icon}</p>
          <p className="font-bold mt-1">{m.name}</p>
        </Link>
      ))}
    </div>
  );
}
