"use client";

import "@/_Components/componentsStyle.css";

// import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Switch } from "@heroui/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useState, useEffect, useRef } from "react";
import { MenuIcon } from "./MenuIcon";
import { CloseIcon } from "./CloseIcon";
import { WorldIcon } from "./WorldIcon";
import { UserIcon } from "./UserIcon";
import { SearchIcon } from "./SearchIcon";
import { BagIcon } from "./BagIcon";
import { Logo } from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import CategorieMenu from "./CategorieMenu";
import UserMenu from "./UserMenu";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const height = 25;
  const width = 25;
  
  // References to detect clicks outside components
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  // const router = useRouter();

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
      const modalLanguage = document.querySelector(".modal-overlay");
      if (isOpenModal) {
        modalLanguage?.classList.add("modal-open");
      } else {
        modalLanguage?.classList.remove("modal-open");
      }
    }
  }, [isOpenModal]);

  // Handle clicks outside menu and modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menu if click outside
      if (
        isOpenMenu &&
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.Menu')
      ) {
        setIsOpenMenu(false);
      }
      
      // Close modal if click outside
      if (
        isOpenModal &&
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button[aria-label="Language Switcher"]')
      ) {
        setIsOpenModal(false);
      }
      
      // Close user menu if click outside
      if (
        isMenuVisible &&
        userMenuRef.current && 
        !userMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.user')
      ) {
        setIsMenuVisible(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu, isOpenModal, isMenuVisible]);

  // Close menus on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpenMenu(false);
      setIsOpenModal(false);
      setIsMenuVisible(false);
    };

    // This is a simplified approach since we're using Next.js
    // In a real implementation, you might need to use the router events
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleClickModal = () => {
    // Close menu if opening modal
    if (!isOpenModal && isOpenMenu) {
      setIsOpenMenu(false);
    }
    setIsOpenModal(!isOpenModal);
  };

  const handleClickMenu = () => {
    // Close modal if opening menu
    if (!isOpenMenu && isOpenModal) {
      setIsOpenModal(false);
    }
    // Close user menu if opening main menu
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleMenu = () => {
    // Close other menus if opening user menu
    if (!isMenuVisible) {
      if (isOpenMenu) setIsOpenMenu(false);
      if (isOpenModal) setIsOpenModal(false);
    }
    setIsMenuVisible(prev => !prev);
  };

  const t = useTranslations("HeroPage");
  
  return (
    <>
      <nav className="navbar">
        <div className="buttonsL">
          <button className="Menu" onClick={handleClickMenu} aria-label="Main Menu">
            <MenuIcon height={height} width={width} />
          </button>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            className="switch removeOn600"
            onClick={() => setIsDarkMode(!isDarkMode)}
            thumbIcon={({ isSelected }: { isSelected: boolean }) =>
              isSelected ? (
                <SunIcon height={height} width={width} />
              ) : (
                <MoonIcon height={height} width={width} />
              )
            }
          ></Switch>
          <button
            className="removeOn600"
            onClick={handleClickModal}
            aria-label="Language Switcher"
          >
            <WorldIcon height={height} width={width}></WorldIcon>
          </button>
        </div>
        <Link href="/" className="logoNavbar" onClick={() => {
          setIsOpenMenu(false);
          setIsOpenModal(false);
          setIsMenuVisible(false);
        }}>
          <Logo isDarkMode={isDarkMode}></Logo>
        </Link>
        <div className="buttonsR">
          <Link href="/search" className="removeOn600" onClick={() => {
            setIsOpenMenu(false);
            setIsOpenModal(false);
            setIsMenuVisible(false);
          }}>
            <SearchIcon height={height} width={width}></SearchIcon>
          </Link>
          <div className="relative">
            <button className="user" onClick={toggleMenu}>
              <UserIcon height={height} width={width}></UserIcon>
            </button>
            {isMenuVisible && <div ref={userMenuRef}><UserMenu /></div>}
          </div>
          <Link href="/cart" className="removeOn600" onClick={() => {
            setIsOpenMenu(false);
            setIsOpenModal(false);
            setIsMenuVisible(false);
          }}>
            <BagIcon height={height} width={width}></BagIcon>
          </Link>
        </div>
      </nav>

      <div className="navLinks" ref={menuRef}>
        <div className="main-menu-title">{t("MainMenu")}</div>
        <div className="div">
          <div className="icon-menu">
            <Link href="/search" onClick={() => setIsOpenMenu(false)}>
              <SearchIcon height={height} width={width}></SearchIcon>
            </Link>
            <button onClick={handleClickModal}>
              <WorldIcon height={height} width={width}></WorldIcon>
            </button>
            <Switch
              defaultSelected
              size="lg"
              color="secondary"
              className="switch"
              onClick={() => setIsDarkMode(!isDarkMode)}
              thumbIcon={({ isSelected }: { isSelected: boolean }) =>
                isSelected ? (
                  <SunIcon height={height} width={width} />
                ) : (
                  <MoonIcon height={height} width={width} />
                )
              }
            ></Switch>
          </div>
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(false)}
              href="/#PrduitsArtisanaux"
            >
              {t("Home")}
            </Link>
          </li>
          <li className="menu-item">
            <CategorieMenu></CategorieMenu>
          </li>
          <li className="menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(false)}
              href="/#PrduitsArtisanaux"
            >
              {t("Home")}
            </Link>
          </li>
        </ul>
        <button
          className="btn--close-menu"
          onClick={() => setIsOpenMenu(false)}
        >
          <CloseIcon height={height} width={width}></CloseIcon>
        </button>
      </div>
      
      <div ref={modalRef}>
        <LanguageSwitcher setIsOpenModal={setIsOpenModal}></LanguageSwitcher>
      </div>
    </>
  );
};

export default Navbar;