import React from "react";
import SpotlightCard from "../bg/SpotlightCard/SpotlightCard";

import { assets, plans } from "../assets/assets";

function BuyCredit() {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 text-white">
      <button className=" text-2xl border border-gray-400 px-10 py-2 rounded-full mb-6">Our Plans</button>
      <h1 className="text-center text-5xl md:text-3xl lg:text-4xl mt-4 font-bold mb-10">Choose the Plans that,s right for you</h1>

      <div className="flex flex-wrap justify-center gap-6 text-left ">
        {plans.map((items, index) => (
          <SpotlightCard
            className="custom-spotlight-card drop-shadow-sm rounded-lg py-12 px-8 hover:scale-105 transition-all duration-500"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src={assets.logo_icon} alt="" width={40}  />
            <p className="mt-3 font-semibold">{items.id}</p>
            <p className="text-sm" >{items.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium" >${items.price}</span>/{items.credits}
            </p>
            <button className="w-full bg-white text-black mt-8 text-sm rounded-md py-2.5 min-w-52 font-semibold">Purchases</button>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

export default BuyCredit;
