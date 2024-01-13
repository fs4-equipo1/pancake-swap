import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import classes from "./BotonArriba.module.scss";

const BotonArriba = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none'}}
    className={classes.buttonToTop}
    >
      <FaArrowUp size={20} color="white" />
    </button>
  );
}

export default BotonArriba;
