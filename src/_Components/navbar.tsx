"use client";

import "@/_Components/componentsStyle.css";

// import Image from "next/image";
import Link from "next/link";
import { Switch } from "@heroui/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useState, useEffect } from "react";
import { MenuIcon } from "./MenuIcon";
import { CloseIcon } from "./CloseIcon";
import { WorldIcon } from "./WorldIcon";
import { UserIcon } from "./UserIcon";
import { SearchIcon } from "./SearchIcon";
import { BagIcon } from "./BagIcon";
import { Logo } from "./Logo";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal , setIsOpenModal] = useState(false)
  const height = 25;
  const width = 25;

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (!isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "light");
      }
    }
    console.log(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const navLinks = document.querySelector(".navLinks");
      if (isOpenMenu) {
        navLinks?.classList.add("menu-open");
      } else {
        navLinks?.classList.remove("menu-open");
      }
    }
  }, [isOpenMenu]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const modalLanguage = document.querySelector(".modalLanguage");
      if (isOpenModal) {
        modalLanguage?.classList.add("modal-open");
      } else {
        modalLanguage?.classList.remove("modal-open");
      }
    }
  }, [isOpenModal]);

  return (
    <>
      <nav className="navbar">
        <div className="buttonsL">
          <button className="Menu" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <MenuIcon isDarkMode={isDarkMode} height={height} width={width} />
          </button>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            className="switch removeOn600"
            onClick={() => setIsDarkMode(!isDarkMode)}
            thumbIcon={({ isSelected }: { isSelected: any }) =>
              isSelected ? (
                <SunIcon isDarkMode={isDarkMode} height={height} width={width} />
              ) : (
                <MoonIcon isDarkMode={isDarkMode} height={height} width={width}/>
              )
            }
          ></Switch>
          <button className="removeOn600" onClick={() => setIsOpenModal(!isOpenModal)}>
            <WorldIcon isDarkMode={isDarkMode} height={height} width={width}></WorldIcon>
          </button>
        </div>
        <Link href="/" className="logoNavbar">
          <Logo isDarkMode={isDarkMode}></Logo>
        </Link>
        <div className="buttonsR">
          <Link href="/" className="removeOn600">
            <SearchIcon isDarkMode={isDarkMode} height={height} width={width}></SearchIcon>
          </Link>
          <button className="user">
            <UserIcon isDarkMode={isDarkMode} height={height} width={width}></UserIcon>
          </button>
          <Link href="/" className="removeOn600">
            <BagIcon isDarkMode={isDarkMode} height={height} width={width}></BagIcon>
          </Link>
      </div>
      </nav>

      <div className="navLinks">
        <div className="main-menu-title">Main Menu</div>
        <div className="div">
        <div className="icon-menu">
          <Link href="/" >
            <SearchIcon isDarkMode={isDarkMode} height={height} width={width}></SearchIcon>
          </Link>
          <button onClick={() => setIsOpenModal(!isOpenModal)}>
            <WorldIcon isDarkMode={isDarkMode} height={height} width={width}></WorldIcon>
          </button>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            className="switch"
            onClick={() => setIsDarkMode(!isDarkMode)}
            thumbIcon={({ isSelected }: { isSelected: any }) =>
              isSelected ? (
                <SunIcon isDarkMode={isDarkMode} height={height} width={width} />
              ) : (
                <MoonIcon isDarkMode={isDarkMode} height={height} width={width}/>
              )
            }
          ></Switch>
        </div>
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              href="/#PrduitsArtisanaux"
            >
              Produits Artisanaux
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              href="./#"
            >
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              href="./#"
            >
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              href="./#"
            >
              Home
            </Link>
          </li>
        </ul>
        <button
          className="btn--close-menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <CloseIcon isDarkMode={isDarkMode} height={height} width={width}></CloseIcon>
        </button>
      </div>

      <div className="modalLanguage">
        <div className="modalHeader">
          <button className="modalCose"
          onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <CloseIcon isDarkMode={isDarkMode} height={height} width={width}></CloseIcon>
          </button>
          <div className="modalInner">
            <div className="modalSection">
                <div className="modalTitle">
                  Language 
                </div>
                <div className="s-localization-modal-section-inner">
                
                <div className="s-localization-modal-item">
                  <input className="s-localization-modal-input" type="radio" name="language" id="lang-ar" value="ar"/>
                  <div className="s-localization-modal-label-slot">
                  <label htmlFor="lang-ar" className="s-localization-modal-label">
                    <span>العربية</span>
                    <div className="s-localization-modal-flag">
                    </div>
                  </label>
                  </div>
                </div>
                <div className="s-localization-modal-item">
                </div>
                <div className="s-localization-modal-item">
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
