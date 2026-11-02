import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
    primary: "bg-theme-primary-dark text-white border-theme-primary-dark",
    secondary: "bg-white text-theme-primary-dark border-theme-primary-dark",
    // For dark theme-color backgrounds
    light: "bg-white text-theme-primary-dark border-white",
    lightOutline: "bg-transparent text-white border-white",
};

const ButtonLink = ({ href, variant = "primary", external, download, className, children }) => (
    <a
        href={href}
        className={classNames(
            "type-button inline-flex items-center gap-2 whitespace-nowrap rounded-md border-2 px-4 py-2 transition-shadow duration-300 hover:shadow-md",
            variants[variant],
            className
        )}
        {...(external && { target: "_blank", rel: "noreferrer" })}
        {...(download && { download: true })}
    >
        {children}
        {download && (
            <FontAwesomeIcon icon={{ prefix: "fas", iconName: "download" }} className="w-[14px] !h-[14px]" />
        )}
        {external && (
            <>
                <FontAwesomeIcon
                    icon={{ prefix: "fas", iconName: "arrow-up-right-from-square" }}
                    className="w-[12px] !h-[12px]"
                />
                <span className="sr-only">(opens in a new tab)</span>
            </>
        )}
    </a>
);

export default ButtonLink;
