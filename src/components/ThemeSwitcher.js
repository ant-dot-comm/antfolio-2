import React, { useContext } from "react";
import classNames from "classnames";

import SiteContext from "../SiteContext";
import BaseIcon from "./BaseIcon";

import svgFile from "./Svgs/iconSprite.svg";

export const themeIcons = [
    { theme: "developer", icon: "icon-code", label: "Teal" },
    { theme: "batman", icon: "icon-bat", label: "Gotham" },
    { theme: "sports", icon: "icon-football", label: "Den" },
];

export const themeIconHref = (icon) => `${svgFile}#${icon}`;

const ThemeSwitcher = (props) => {
    const { className } = props;
    const { theme, setTheme } = useContext(SiteContext);

    return (
        <div className={classNames("theme-switcher z-10", className)}>
            <div className="list-unstyled flex gap-4 ">
                {themeIcons.map((item, key) => (
                    <button
                        key={key}
                        type="button"
                        aria-label={`${item.label} theme`}
                        aria-pressed={theme === item.theme}
                        className={classNames("bg-theme-primary-dark p-[2px] w-[24px] h-[24px] rounded-md", {
                            "active ring-2 ring-white": theme === item.theme,
                        })}
                        style={{ transitionDelay: `${key}00ms` }}
                        onClick={() => setTheme(item.theme)}
                    >
                        <BaseIcon
                            className="text-white"
                            href={themeIconHref(item.icon)}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
