import React, { useState } from "react";

const NavItems = ({ destination, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Perform navigation
    console.log(`Navigating to ${destination}`);
  };

  return (
    <button
      className="group flex items-center py-3"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
          isHovered || isClicked ? "w-16 bg-slate-200" : ""
        } group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
          isHovered || isClicked ? "text-slate-200" : ""
        } group-focus-visible:text-slate-200`}
      >
        {text}
      </span>
    </button>
  );
};

// function YourComponent() {
//   return (
//     <div>
//       <NavButton destination="about" text="About" />
//       <NavButton destination="experience" text="Experience" />
//       <NavButton destination="projects" text="Projects" />
//       <NavButton destination="contact" text="Contact" />
//     </div>
//   );
// }

export default NavItems;
