import React from "react";
import { ThemeContext } from "./themeContext";

const ChangeTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      {theme === "dark" ? (
        <label className="inline-flex justify-center items-center mb-20">
          <input
            type="checkbox"
            checked={theme}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="form-checkbox w-9 h-9 md:h-12 md:w-12"
          />
          <span className="ml-4 text-4xl md:text-7xl">Dark Mode</span>
        </label>
      ) : (
        <label className="inline-flex justify-center items-center mb-20">
          <input
            type="checkbox"
            checked={!theme}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="form-checkbox w-9 h-9 md:h-12 md:w-12"
          />
          <span className="ml-4 text-4xl md:text-7xl">Dark Mode</span>
        </label>
      )}
    </div>
  );
};

export default ChangeTheme;
