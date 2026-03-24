import React from "react";

const Location = () => {
  return (
    <div className="h-screen bg-neutral-950 flex flex-col justify-center items-center text-white pt-14 px-3">
      {/* title */}
      <h1 className="text-5xl font-bold text-amber-500 mb-3">Find Us</h1>

      <p className="text-gray-400 mb-4 text-lg">
        Visit Caffe Atlas in the heart of Boumalne Dades
      </p>

      {/* map container */}
      <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13625.92984300002!2d-5.9871609!3d31.3732579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbcc9359501b25b%3A0xdaeadbcce43a5cde!2sRestaurant%20Rooftop%20Atlas%20Dades!5e0!3m2!1sar!2sma!4v1773095590881!5m2!1sar!2sma"
          width="100%"
          height="400"
          loading="lazy"
          className="grayscale hover:grayscale-0 transition duration-300"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13625.92984300002!2d-5.9871609!3d31.3732579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbcc9359501b25b%3A0xdaeadbcce43a5cde!2sRestaurant%20Rooftop%20Atlas%20Dades!5e0!3m2!1sar!2sma!4v1773095590881!5m2!1sar!2sma"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>

      {/* info */}
      <div className="flex gap-12 mt-10 text-gray-300 text-lg">
        <span>📍 Boumalne Dades</span>

        <span>🕒 8AM - 11PM</span>

        <span>📞 +212 6 00 00 00 00</span>
      </div>
    </div>
  );
};

export default Location;
