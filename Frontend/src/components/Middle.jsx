import React from "react";
import { assets } from "../assets/assets";
import TextType from "../bg/TextType/TextType";

function Middle() {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40 z-40 relative">
      {/* Enhanced Centered TextType Animation */}
      <div className="min-h-[6rem] flex justify-center items-center mb-12">
        <TextType
          text={[
            "Remove Backgrounds Instantly ",
            "Professional Results in Seconds ",
            "Upload • Process • Download ",
            "100% Free & No Registration "
          ]}
          textColors={[
            "bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent",
            "bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent",
            "bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent",
            "bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"
          ]}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center max-w-4xl text-zinc-300 "
          cursorClassName="text-violet-500 animate-pulse font-bold"
          cursorCharacter="▎"
          typingSpeed={80}
          deletingSpeed={70}
          pauseDuration={2000}
          loop={true}
          startOnVisible={true}
          variableSpeed={{ min: 60, max: 120 }}
        />
      </div>

      {/* Interactive Steps Cards */}
      <div className="flex items-center flex-wrap gap-6 xl:gap-8 xl:mt-24 justify-center mt-12 ">
        {/* Upload Card */}
        <div className="group flex items-center gap-4 bg-white border border-gray-200 drop-shadow-lg p-8 pb-10 rounded-xl hover:scale-105 hover:shadow-2xl hover:border-violet-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 max-w-sm">
          <div className="relative">
            <img
              className="max-w-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              src={assets.upload_icon}
              alt="Upload"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 "></div>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
              1. Upload Image
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simply drag & drop or click to upload your image. <br />
              Supports JPG, PNG, WEBP formats
            </p>
          </div>
        </div>

        {/* Process Card */}
        <div className="group flex items-center gap-4 bg-white border border-gray-200 drop-shadow-lg p-8 pb-10 rounded-xl hover:scale-105 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 max-w-sm">
          <div className="relative">
            <img
              className="max-w-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              src={assets.remove_bg_icon}
              alt="Remove Background"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3  "></div>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              2. AI Processing
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our advanced AI automatically detects and removes <br />
              the background in seconds
            </p>
          </div>
        </div>

        {/* Download Card */}
        <div className="group flex items-center gap-4 bg-white border border-gray-200 drop-shadow-lg p-8 pb-10 rounded-xl hover:scale-105 hover:shadow-2xl hover:border-green-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 max-w-sm">
          <div className="relative">
            <img
              className="max-w-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              src={assets.download_icon}
              alt="Download"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 "></div>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">
              3. Download Result
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Download your processed image instantly in <br />
              high quality PNG format
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
