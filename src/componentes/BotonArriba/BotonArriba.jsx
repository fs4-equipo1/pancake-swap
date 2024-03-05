import  { useEffect, useState } from 'react';
import { MdOutlineArrowUpward } from "react-icons/md";
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
      <MdOutlineArrowUpward  size={20} color="var(--colors-invertedContrast)" />
    </button>
  );
}

export default BotonArriba;
