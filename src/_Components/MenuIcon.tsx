import React from "react";

export const MenuIcon = (
  {width , height }: { width : number , height : number }
) => (

  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    role="presentation"
    viewBox="0 0 24 24"
    fill="#00bf63"//{isDarkMode? "#FFFFFF" : "#000000"}
  >
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);
