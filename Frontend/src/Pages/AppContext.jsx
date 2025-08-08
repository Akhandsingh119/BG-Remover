import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credits, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const loadCreditData = async () => {
    try {
      const token = await getToken();
      const data = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      setCredit(data.data.credits);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // In AppContext.jsx, update the removebg function:
  // Pages/AppContext.jsx - Updated removebg function
  const removebg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }

      // ✅ Preventive check for zero credits
      if (credits === 0) {
        toast.error("No credits remaining! Please purchase more credits.");
        navigate("/buy");
        return;
      }

      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance !== undefined && setCredit(data.creditBalance);
      } else {
        // ✅ Handle zero credits response from backend
        
        if (data.creditBalance === 0 || data.redirectTo === "/buy") {
          toast.error(
            data.message || "No credits left! Please buy more credits."
          );
          setCredit(0);
          navigate("/buy");
          return;
        }

        toast.error(data.message);
        data.creditBalance !== undefined && setCredit(data.creditBalance);
      }
    } catch (error) {
      console.log(error);

      // ✅ Handle zero credits error (400 status)
      if (
        error.response?.status === 400 &&
        error.response?.data?.creditBalance === 0
      ) {
        toast.error("No credits left! Please purchase more credits.");
        setCredit(0);
        navigate("/buy");
        return;
      }

      // ✅ Handle authentication errors (401 status) - FIXED
      if (error.response?.status === 401) {
        toast.error("Session expired. Please refresh the page and try again.");
        // ✅ DON'T call openSignIn() if user is already signed in
        if (!isSignedIn) {
          openSignIn();
        } else {
          // User is signed in but token is invalid - suggest refresh
          toast.error("Please refresh the page and try again.");
        }
        return;
      }

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  const value = {
    credits,
    setCredit,
    loadCreditData,
    backendUrl,
    image,
    setImage,
    removebg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
