import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="w-full text-white relative z-[2]">
      <div className="max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        {/* Main container - center everything */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 items-center">
          {/* Brand section - centered */}
          <div className="basis-full lg:basis-1/2 flex justify-center lg:justify-start">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-none tracking-tight text-center">
                bg.Remove
              </h1>
            </Link>
          </div>
          
          {/* Links section - centered */}
          <div className="basis-full lg:basis-1/2 flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 items-center justify-center">
            
            {/* First social column - centered content */}
            <div className="basis-full sm:basis-1/3 text-center sm:text-left">
              <h4 className="mb-6 lg:mb-10 text-zinc-400 capitalize">socials</h4>
              <div className="flex flex-col items-center sm:items-start">
                {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                  <a key={index} className="block mt-2 capitalize text-zinc-600 hover:text-zinc-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Second company column - centered content */}
            <div className="basis-full sm:basis-1/3 text-center sm:text-left">
              <h4 className="mb-6 lg:mb-10 text-zinc-400 capitalize">company</h4>
              <div className="flex flex-col items-center sm:items-start">
                {["about", "careers", "contact"].map((item, index) => (
                  <a key={index} className="block mt-2 capitalize text-zinc-600 hover:text-zinc-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Description and logo section - centered */}
            <div className="basis-full sm:basis-1/2 flex flex-col items-center">
              <p className="text-center text-sm sm:text-base leading-relaxed">
                bg remover is cutting-edge photo solution driven by innovation and empowered by AI technology.
              </p>
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img 
                  className="w-24 sm:w-28 md:w-32 mt-8 sm:mt-10 lg:mt-12" 
                  src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" 
                  alt="Enterprise - Webflow logo" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
