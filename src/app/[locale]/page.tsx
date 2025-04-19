"use client"

import { useEffect, useState } from 'react';
import Navbar from "@/_Components/navbar";
import Home from '@/_Components/Home';


const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Home isDarkMode={isDarkMode} ></Home>
    </>
  );
}
export default Index;