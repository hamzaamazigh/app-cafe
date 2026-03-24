import React from "react";

import img1 from "../assets/unnamed.jpg";
import img2 from "../assets/unnamed (1).jpg";
import img3 from "../assets/unnamed (2).jpg";
import img4 from "../assets/unnamed (3).jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="h-screen bg-neutral-950 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold text-amber-500 mb-16">Gallery</h1>

      <div className="grid grid-cols-4 gap-8">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-64 h-64 object-cover rounded-xl hover:scale-110 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
