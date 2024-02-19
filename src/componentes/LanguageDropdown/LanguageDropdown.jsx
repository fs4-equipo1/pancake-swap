import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageDropdown.module.scss";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const LanguageDropdown = ({reverse}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef(null);

  const showDropdown = () => {
    clearTimeout(dropdownTimerRef.current);
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    // DELAY antes de que esconder el dropdown
    dropdownTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleContentMouseEnter = () => {
    //Borra el temporizador cuando el mouse ingrese al contenido desplegable
    clearTimeout(dropdownTimerRef.current);
  };

  const handleContentMouseLeave = () => {
    // oculta el menú desplegable cuando el mouse abandone el contenido
    hideDropdown();
  };

  useEffect(() => {
    // Borra el temporizador cuando el componente se desmonte
    return () => {
      clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  const { i18n } = useTranslation();
  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  }

return (
    <div className={`${styles["dropdown-container"]} ${reverse ? styles["reverse"] : ""}`}>
      
      <button
        className={styles["dropdown-button"]}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        style={{ fontSize: "24px" }}
      >
        <TbWorld />
        {reverse && <p style={{ marginLeft:"2px",fontSize: "16px"}}>EN</p>}
      </button>
      {isDropdownOpen && (
        <div
          className={`${styles["dropdown-content"]} ${
            reverse ? styles["reverse-content"] : ""
          }`}
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
        >
           {i18n.language === "es" ? (
          <button className={styles.item} onClick={() => handleLanguage('en')}>English</button>
           ) : ( 
          <button className={styles.item} onClick={() => handleLanguage('es')}>Español</button>
           )}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
