import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div className="theme-selector">
      <button
        type="button"
        onClick={toggleTheme}
        className="btn border-0 bg-transparent p-0 pointer"
        aria-label={label}
        title={label}
      >
        <i
          className={`ms-2 bi ${isDark ? "bi-sun-fill text-white" : "bi-moon-fill"}`}
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}
