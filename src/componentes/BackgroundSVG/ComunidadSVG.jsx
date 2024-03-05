import { useTheme } from "../../context/ThemeContext";
import "./BackgroundSVG.scss";
export function ComunidadSVG() {
  const { theme } = useTheme();
  return (
    <div className="comunidadSVG">
      {theme === "dark" ? (
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          fill="#0b4576"
          color="text"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0C520.985 1.81132 1323.74 32.7547 1660 48H0V0Z"></path>
        </svg>
      ) : (
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          fill="#72b8f2"
          color="text"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0C520.985 1.81132 1323.74 32.7547 1660 48H0V0Z"></path>
        </svg>
      )}
    </div>
  );
}

<svg
  viewBox="0 0 1660 48"
  preserveAspectRatio="none"
  color="text"
  width="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 0C520.985 1.81132 1323.74 32.7547 1660 48H0V0Z"></path>
</svg>;
