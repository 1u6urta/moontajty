"use client";
import { CloseIcon } from "./CloseIcon";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = ({
    setIsOpenModal,
}: {
  setIsOpenModal: (value: boolean) => void;
}
) => {

    const pathname = usePathname();
    const currentLang = pathname.split("/")[1]; // e.g., "fr", "en", "ar"
    const [selectedLang, setSelectedLang] = useState(currentLang || "fr");


    const router = useRouter();

    const handleSave = () => {
        if (typeof window === "undefined") return;

        const currentPath = window.location.pathname;
        const pathParts = currentPath.split("/");

      
        // Replace the first part after '/' with the selected language
        pathParts[1] = selectedLang; // assuming locale is always in the first segment
        const newPath = pathParts.join("/");
      
        router.push(newPath);
        setIsOpenModal(false); // close the modal
      };
      
    // const onSelectChange = (e : ChangeEvent<HTMLSelectElement>) => {
    //     console.log(e.target.value)
    // }
    return (  
        <div className="modal-overlay">
        <div className="language-modal">
          <div className="language-modal-header">
            <h2 className="language-modal-title">Sélectionnez la langue</h2>
            <button
              className="language-modal-close"
              onClick={() => setIsOpenModal(false)}
            >
              <CloseIcon height={24} width={24} />
            </button>
          </div>

          <div className="language-modal-content">
            <div className="language-option">
              <input
                type="radio"
                name="language"
                id="lang-ar"
                value="ar"
                className="language-radio"
                onChange={(e) => setSelectedLang(e.target.value)}
                checked={selectedLang === "ar"}
              />
              <label htmlFor="lang-ar" className="language-label">
                <div className="language-flag algerian-flag"></div>
                <span className="language-name">العربية</span>
              </label>
            </div>

            <div className="language-option">
              <input
                type="radio"
                name="language"
                id="lang-fr"
                value="fr"
                className="language-radio"
                onChange={(e) => setSelectedLang(e.target.value)}
                checked={selectedLang === "fr"}
              />
              <label htmlFor="lang-fr" className="language-label">
                <div className="language-flag french-flag"></div>
                <span className="language-name">Français</span>
              </label>
            </div>

            <div className="language-option">
              <input
                type="radio"
                name="language"
                id="lang-en"
                value="en"
                className="language-radio"
                onChange={(e) => setSelectedLang(e.target.value)}
                checked={selectedLang === "en"}
              />
              <label htmlFor="lang-en" className="language-label">
                <div className="language-flag english-flag"></div>
                <span className="language-name">English</span>
              </label>
            </div>
          </div>

          <div className="language-modal-footer">
            <button
              className="language-modal-save-btn"
              onClick={handleSave}
            >
              Enregistrer la sélection
            </button>
          </div>
        </div>
      </div>
    );
}
 
export default LanguageSwitcher;