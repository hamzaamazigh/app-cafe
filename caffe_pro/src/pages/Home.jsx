import React from "react";
import "../home.css";

import img1 from "../assets/unnamed.jpg";
import img2 from "../assets/unnamed.png";
import img3 from "../assets/unnamed (1).jpg";
import img4 from "../assets/unnamed (1).png";
import img5 from "../assets/unnamed (2).jpg";
import img6 from "../assets/unnamed (2).png";
import img7 from "../assets/unnamed (3).jpg";
import img8 from "../assets/unnamed (3).png";
import img9 from "../assets/unnamed (4).jpg";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const images = [...allImages, ...allImages];

const Home = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center pl-28 gap-8 text-white z-10">
        <h1 className="text-7xl font-black leading-tight">
          Welcome to
          <span className="block text-5xl text-amber-500 mt-4">
            Caffe Atlas Dades
          </span>
        </h1>

        <p className="text-lg text-gray-300 w-[500px]">
          Experience the authentic taste of Atlas. Fresh coffee, delicious meals
          and a relaxing atmosphere in the heart of Dades Valley.
        </p>

        {/* INFO */}
        <div className="flex gap-10 mt-6">
          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-gray-400">Foods</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">30+</h2>
            <p className="text-gray-400">Drinks</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.8★</h2>
            <p className="text-gray-400">Rating</p>
          </div>
        </div>

        {/* EXTRA INFO */}
        <div className="flex gap-8 text-gray-300 text-lg mt-4">
          <span>📍 Boumalne Dades</span>
          <span>🕒 Open 8AM - 11PM</span>
        </div>

        {/* BUTTON */}
        <div className="flex gap-3">
          <button className="bg-white hover:bg-amber-500 text-amber-500 hover:text-black font-semibold px-8 py-4 rounded-xl w-fit text-lg transition duration-300 hover:scale-105">
            Explore Menu
            </button>
            <button className="bg-amber-500 hover:bg-white text-white hover:text-black font-semibold px-8 py-4 rounded-xl w-fit text-lg transition duration-300 hover:scale-105">
            Book Table
            </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="flex gap-10 rotate-12 scale-110">
          {/* column 1 */}
          <div className="flex flex-col gap-8 animate-scrollDown">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-64 h-72 object-cover rounded-xl shadow-2xl"
              />
            ))}
          </div>

          {/* column 2 */}
          <div className="flex flex-col gap-8 animate-scrollUp">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-64 h-72 object-cover rounded-xl shadow-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
