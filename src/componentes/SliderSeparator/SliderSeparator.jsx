import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./SliderSeparator.module.scss";
import { IoMdEgg } from "react-icons/io";

function SliderSeparator() {
  const { theme } = useTheme();
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add(styles.animating);
        }else {
          entry.target.classList.remove(styles.animating);
        }
      });
    });
    
    const img = imgRef.current;
    if(img){
      observer.observe(img);
    }

    return () => {
      if(img){
        observer.unobserve(img)
      }
    };
  }, []);

  return (
    <>
      <div className={styles.imgSeparator}>
        <img ref={imgRef} src="..\src\assets\conejito.png" alt="Slider Separator" className={styles.coin}/>
        {theme === "dark" ? (
          <div className={styles.imgSeparatorDark}></div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SliderSeparator;
