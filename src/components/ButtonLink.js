import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
    primary: "bg-theme-button-primary text-theme-button-primary-ink border-theme-button-primary-border",
    secondary: "bg-theme-button-secondary text-theme-button-secondary-ink border-theme-button-secondary-border",
    // For brand-color bands (the contact section), not the content canvas
    light: "bg-theme-button-light text-theme-button-light-ink border-theme-button-light-border",
    lightOutline: "bg-transparent text-theme-button-light-outline border-theme-button-light-outline-border",
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
