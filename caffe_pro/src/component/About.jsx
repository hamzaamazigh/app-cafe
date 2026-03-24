import React from "react";
import cafe from "../assets/cafe.jpg";

const About = () => {
  return (
    <div className="h-screen bg-neutral-900 flex items-center px-24 text-white">
      {/* image */}
      <div className="w-1/2">
        <img src={cafe} className="rounded-xl shadow-2xl" />
      </div>

      {/* text */}
      <div className="w-1/2 pl-16">
        <h1 className="text-5xl font-bold text-amber-500 mb-8">
          About Caffe Atlas
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Located in the beautiful Boumalne Dades valley, Caffe Atlas offers a
          unique experience combining fresh coffee, delicious food and a
          relaxing atmosphere inspired by the Atlas mountains.
        </p>

        {/* features */}
        <div className="grid grid-cols-2 gap-6 text-lg">
          <div>☕ Fresh Coffee</div>
          <div>🍰 Homemade Desserts</div>
          <div>📶 Free WiFi</div>
          <div>🌄 Cozy Atmosphere</div>
        </div>
      </div>
    </div>
  );
};

export default About;
