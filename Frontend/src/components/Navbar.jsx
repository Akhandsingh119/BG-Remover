import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../Pages/AppContext'

import { useClerk, UserButton, useUser } from '@clerk/clerk-react';


import { useEffect } from 'react';

function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();   // fixed typo
  const { credit,loadCreditData}=useContext(AppContext)
  useEffect(()=>{
    if(isSignedIn)
      loadCreditData()  

  },[isSignedIn])
  
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44 z-50 backdrop-filter backdrop-blur-lg">
      <Link to="/">
        <h1 className="font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block leading-normal">
          bg.removal
        </h1>
      </Link>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 font-bold text-white flex items-center gap-4 px-4 py-2 cursor-pointer sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get Started
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
