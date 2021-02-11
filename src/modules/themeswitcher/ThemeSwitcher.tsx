import React, { FC, useState } from "react";

const ThemeSwitcher: FC<{}> = (): JSX.Element => {
  const [theme, setTheme] = useState("");
  const themeClass = theme ? theme.toLowerCase() : "default";

  const chooseTheme = (
    theme: string,
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    setTheme(theme);
  };

  return (
    <li className="nav-item dropdown">
      <button
        className={`nav-link dropdown-toggle btn btn-${themeClass}`}
        id="dropdown02"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Theme
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdown02">
        <li>
          <span className={`dropdown-item text-${themeClass}`}>
            {theme || "Default"}
          </span>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={(e) => chooseTheme("Primary", e)}
          >
            Primary Theme
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={(e) => chooseTheme("Danger", e)}
          >
            Danger Theme
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={(e) => chooseTheme("Success", e)}
          >
            Success Theme
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={(e) => chooseTheme("", e)}>
            Default Theme
          </button>
        </li>
      </ul>
    </li>
  );
};

export default ThemeSwitcher;
