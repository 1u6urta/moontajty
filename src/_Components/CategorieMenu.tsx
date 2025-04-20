import { useState } from "react";
import { useTranslations } from "next-intl";

import NextIcon from "./NextIcon"; // adapte le chemin selon ton projet
import Link from "next/link";

const CategorieMenu = ( ) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const t = useTranslations("HeroPage");
    const p = useTranslations("Products");
  return (
    <div>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="buttonCategorie navLink group flex items-center gap-2"
      >
        <p className={`transition-colors group-hover:text-blue-600`}>
          {t("Categories")}
        </p>
        <NextIcon
          className={`transition-transform duration-300`}
          rotated={isOpenMenu}
        />
      </button>

      <ul
        className={`categorie-list transition-all duration-300 ease-in-out ${
          isOpenMenu ? "block mt-2" : "hidden"
        }`}
      >
        {[
          { label: p("Artisan"), href: "/#PrduitsArtisanaux" },
          { label: p("Alimentaire"), href: "./#" },
          { label: p("Cosmetique"), href: "./#" },
          { label: p("Agricole"), href: "./#" },
        ].map((item, index) => (
          <li key={index} className="categorie-menu-item menu-item">
            <Link
              className="navLink"
              onClick={() => setIsOpenMenu(false)}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorieMenu;
