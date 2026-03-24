import React from "react";

import img1 from "../assets/unnamed.jpg";
import img2 from "../assets/unnamed (1).jpg";
import img3 from "../assets/unnamed (2).jpg";
import img4 from "../assets/unnamed (3).jpg";

const items = [
  {
    name: "Cappuccino",
    price: "25 DH",
    img: img1,
  },
  {
    name: "Latte",
    price: "28 DH",
    img: img2,
  },
  {
    name: "Chocolate Cake",
    price: "30 DH",
    img: img3,
  },
  {
    name: "Pancakes",
    price: "35 DH",
    img: img4,
  },
];

const PopularMenu = () => {
  return (
    <div className="h-screen bg-neutral-950 flex flex-col justify-center items-center text-white pt-14">
      {/* title */}
      <h1 className="text-5xl font-bold text-amber-500 mb-6">Popular Menu</h1>

      <p className="text-gray-400 mb-16 text-lg text-center max-w-xl">
        Discover our most loved drinks and desserts, crafted with fresh
        ingredients and authentic Atlas flavors.
      </p>

      {/* cards */}
      <div className="grid grid-cols-4 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
          >
            <img src={item.img} className="w-full h-48 object-cover" />

            <div className="p-6 flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <span className="text-amber-500 font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <button className="mt-16 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition hover:scale-105">
        View Full Menu
      </button>
    </div>
  );
};

export default PopularMenu;
