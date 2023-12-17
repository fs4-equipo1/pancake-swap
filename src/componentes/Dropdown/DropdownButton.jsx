import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownButton.module.scss';
import { TbWorld } from 'react-icons/tb';

const DropdownButton = () => {
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

  return (
    <div className={styles['dropdown-container']}>
      <button
        className={styles['dropdown-button']}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        style={{ fontSize: '24px' }}
      >
        <TbWorld />
      </button>
      {isDropdownOpen && (
        <div
          className={styles['dropdown-content']}
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
        >
          <p>English</p>
          <p>Deutsch</p>
          <p>Spanish</p>
          <p>Français</p>
          <p>English</p>
          <p>Deutsch</p>
          <p>Spanish</p>
          <p>Français</p>
          <p>English</p>
          <p>Deutsch</p>
          <p>Spanish</p>
          <p>Français</p>
          <p>English</p>
          <p>Deutsch</p>
          <p>Spanish</p>
          <p>Français</p>
          <p>English</p>
          <p>Deutsch</p>
          <p>Spanish</p>
          <p>Français</p>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;