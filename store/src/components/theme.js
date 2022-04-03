import React from "react";

const theme = () => {
  const themeHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = "light";

    localStorage.theme = "dark";

    localStorage.removeItem("theme");
  };

  return (
    <div>
      <input type={"radio"} onChange={themeHandler} />
    </div>
  );
};

export default theme;
