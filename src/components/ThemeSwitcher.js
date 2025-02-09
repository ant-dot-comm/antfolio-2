import React, { useContext } from "react";
import classNames from "classnames";

import SiteContext from "../SiteContext";
import BaseIcon from "./BaseIcon";

import svgFile from "./Svgs/iconSprite.svg";

export const themeIcons = [
    { theme: "developer", icon: "icon-code" },
    { theme: "batman", icon: "icon-bat" },
    { theme: "sports", icon: "icon-football" },
];

const ThemeSwitcher = (props) => {
    const { className } = props;
    const { theme, setTheme } = useContext(SiteContext);

    return (
        <div className={classNames("theme-switcher z-10", className)}>
            <div className="list-unstyled flex gap-4 ">
                {themeIcons.map((item, key) => (
                    <button
                        key={key}
                        className={classNames("bg-theme-primary p-[2px] w-[24px] h-[24px] rounded-md", {
                            active: theme === item.theme,
                        })}
                        style={{ transitionDelay: `${key}00ms` }}
                        onClick={() => setTheme(item.theme)}
                    >
                        <BaseIcon
                            className="text-gray-300"
                            href={`${svgFile}#${item.icon}`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
