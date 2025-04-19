"use client"

import { useState } from 'react';
import Navbar from "@/_Components/Navbar";
import Home from '@/_Components/Home';


const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Home ></Home>
    </>
  );
}
export default Index;