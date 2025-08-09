import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 10, // Centered offset (half of 20px width/height)
        y: clientY - 10,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);  

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 h-[22px] w-[22px] bg-orange-300 rounded-full z-[1] pointer-events-none"
    />
  );
};

export default Cursor;
