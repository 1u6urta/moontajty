"use client";

import "@/_Components/componentsStyle.css";

// import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
import LanguageSwitcher from "./LanguageSwitcher";
import CategorieMenu from "./CategorieMenu";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      const modalLanguage = document.querySelector(".modal-overlay");
      if (isOpenModal) {
        modalLanguage?.classList.add("modal-open");
      } else {
        modalLanguage?.classList.remove("modal-open");
      }
    }
  }, [isOpenModal]);
  const handleClickModal = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenModal(!isOpenModal);
  };

  const t = useTranslations("HeroPage");
  return (
    <>
      <nav className="navbar">
        <div className="buttonsL">
          <button className="Menu" onClick={() => setIsOpenMenu(!isOpenMenu)}>
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
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <WorldIcon height={height} width={width}></WorldIcon>
          </button>
        </div>
        <Link href="/" className="logoNavbar">
          <Logo isDarkMode={isDarkMode}></Logo>
        </Link>
        <div className="buttonsR">
          <Link href="/" className="removeOn600">
            <SearchIcon height={height} width={width}></SearchIcon>
          </Link>
          <button className="user">
            <UserIcon height={height} width={width}></UserIcon>
          </button>
          <Link href="/" className="removeOn600">
            <BagIcon height={height} width={width}></BagIcon>
          </Link>
        </div>
      </nav>

      <div className="navLinks">
        <div className="main-menu-title">{t("MainMenu")}</div>
        <div className="div">
          <div className="icon-menu">
            <Link href="/">
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
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              href="/#PrduitsArtisanaux"
            >
              {t("Home")}
            </Link>
          </li>
          <li className="menu-item">
            <CategorieMenu></CategorieMenu>
          </li>
        </ul>
        <button
          className="btn--close-menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <CloseIcon height={height} width={width}></CloseIcon>
        </button>
      </div>
      <LanguageSwitcher setIsOpenModal={setIsOpenModal}></LanguageSwitcher>
    </>
  );
};

export default Navbar;
