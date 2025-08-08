import { useAuth } from "@clerk/clerk-react";
import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credits, setCredit] = useState();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();
  const loadCreditData = async () => {
    try {
      const token = await getToken();
      const data = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      console.log(data.data.credits);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    credits,
    setCredit,
    loadCreditData,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;



