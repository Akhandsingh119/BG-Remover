import React from 'react';
import { useState } from 'react';
import { assets } from '../assets/assets';

function Bgslider() {
  const [sliderPosition, setSliderPosition] = useState(10);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-24 mx-2 z-[2] relative">
      <h1 className="text-center text-3xl sm:mb-14 md:text-4xl lg:text-[80px] mt-32 font-bold text-white leading-tight">
        Remove Background With High <br /> Quality And Accuracy
      </h1>

      {/* Added explicit height (e.g., h-96 for 24rem/384px; adjust as needed) */}
      <div className=" mt-5 relative w-full max-w-3xl overflow-hidden m-auto rounded-xl h-96">
        {/* Both images now have h-full and object-cover for consistent sizing */}
        <img
          className="w-full h-full object-cover"
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt="Image with background"
        />
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Image without background"
        />

        {/* Slider input - added full width for better usability */}
        <input
          className=" slider absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-50 w-full h-6 cursor-pointer"
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />

      </div>

      <div className="w-full flex justify-center items-center mt-9">
                        <input type="file" id="upload1" hidden />
                        <label
                          htmlFor="upload1"
                          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
                        >
                          <img width={20} src={assets.upload_btn_icon} alt="Upload button" />
                          <p className="text-white text-sm font-extrabold">Upload your image</p>
                        </label>
                      </div>
    </div>
  );
}

export default Bgslider;
