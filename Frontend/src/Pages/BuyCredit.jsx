import React, { useContext } from "react";
import SpotlightCard from "../bg/SpotlightCard/SpotlightCard";
import { assets, plans } from "../assets/assets";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ Added missing import

function BuyCredit() {
  // ✅ All hooks moved INSIDE the component
  const { loadCreditData, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  // ✅ Functions defined INSIDE the component
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,


      handler: async (response) => {
      

        const token=await getToken()
        
        try {
          const {data}=await axios.post(backendUrl+'/api/user/verify-razor',response,{headers:{token}})
          if(data.success){
                toast.success("Payment successful!");
        await loadCreditData(); // Refresh credits
        navigate('/');
        toast.success("credit is added")

          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }

      },

      theme: {
        color: "#4f46e5"
      }
    };

    // ✅ Check if Razorpay is loaded
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      toast.error("Payment system not loaded. Please refresh the page.");
    }
  };

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/pay-razor', 
        { planId }, 
        { headers: { token } }
      );
      
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error("Failed to create payment order");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 text-white">
      <button className="text-2xl border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-5xl md:text-3xl lg:text-4xl mt-4 font-bold mb-10">
        Choose the Plans that&apos;s right for you
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((items, index) => (
          <SpotlightCard
            key={items.id || index} // ✅ Added key prop
            className="custom-spotlight-card drop-shadow-sm rounded-lg py-12 px-8 hover:scale-105 transition-all duration-500"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src={assets.logo_icon} alt="" width={40} />
            <p className="mt-3 font-semibold">{items.id}</p>
            <p className="text-sm">{items.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${items.price}</span>/{items.credits}
            </p>
            <button 
              onClick={() => paymentRazorpay(items.id)} 
              className="w-full bg-white text-black mt-8 text-sm rounded-md py-2.5 min-w-52 font-semibold"
            >
              Purchase {/* ✅ Fixed typo */}
            </button>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

export default BuyCredit;
