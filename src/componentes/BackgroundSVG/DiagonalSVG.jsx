import { useTheme } from "../../context/ThemeContext";
import "./BackgroundSVG.scss";
export function DiagonalSVG() {
  const { theme } = useTheme();
  return (
    <div className="diagonalSVG">
      {theme === "dark" ? (
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          fill="#201335"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      ) : (
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          fill="#d8cbed"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      )}
    </div>
  );
}
