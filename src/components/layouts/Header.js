import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

import SiteContext from "../../SiteContext";
import ThemeSwitcher from "../ThemeSwitcher";
import CodingAnimated from "../Svgs/CodingAnimated";
import BatmanAnimated from "../Svgs/BatmanAnimated";
import HeaderNames from "../HeaderNames";
import { ReactComponent as FieldMarks } from "../Svgs/field-marks.svg";
import { ReactComponent as BatLogos } from "../Svgs/BatLogos.svg";
import { links, navItems } from "../../data/links";

const socialLinks = [
    { label: "LinkedIn", href: links.linkedin, iconName: "linkedin-in" },
    { label: "Behance", href: links.behance, iconName: "behance" },
];

const Header = () => {
    const ref = useRef(null);
    const { theme } = useContext(SiteContext);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const reduceMotion = useReducedMotion();
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const fieldMarksRange = isMobile ? [-250, -550] : [-50, -250];
    const moveBottomTop = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [fieldMarksRange[0], fieldMarksRange[0]] : fieldMarksRange
    );
    const moveRightLeft = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [0, 0] : [-25, 25]
    );

    // Close the mobile menu with Escape
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    return (
        <header className="header w-full relative pt-24 md:pt-28 lg:pt-32 bg-gradient-to-b from-theme-primary-dark to-theme-primary-light overflow-hidden">
            <div className="fixed top-0 left-0 w-full z-50 flex items-center gap-4 p-4 lg:grid lg:grid-cols-[1fr_auto_1fr] bg-gradient-to-b from-gray-900/40 to-gray-500/0 backdrop-blur-lg">
                {/* Social */}
                <div className="flex gap-4 text-white mr-auto lg:mr-0">
                    {socialLinks.map((social) => (
                        <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-md">
                            <FontAwesomeIcon
                                icon={{ prefix: "fab", iconName: social.iconName }}
                                transform="shrink-4"
                                className="bg-theme-primary-dark w-[24px] h-[24px] rounded-md"
                            />
                            <span className="sr-only">{social.label} (opens in a new tab)</span>
                        </a>
                    ))}
                </div>

                {/* Links */}
                <nav aria-label="Primary" className="relative order-last lg:order-none">
                    <button
                        type="button"
                        className="lg:hidden flex items-center justify-center bg-theme-primary-dark text-white w-[24px] h-[24px] rounded-md"
                        aria-expanded={menuOpen}
                        aria-controls="primary-nav"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FontAwesomeIcon
                            icon={{ prefix: "fas", iconName: menuOpen ? "xmark" : "bars" }}
                            className="w-[14px] !h-[14px]"
                        />
                        <span className="sr-only">Menu</span>
                    </button>
                    <ul
                        id="primary-nav"
                        className={classNames(
                            "lg:flex lg:gap-2",
                            menuOpen
                                ? "flex flex-col absolute right-0 top-10 min-w-[10rem] p-2 rounded-lg bg-white shadow-lg lg:static lg:flex-row lg:min-w-0 lg:p-0 lg:bg-transparent lg:shadow-none"
                                : "hidden"
                        )}
                    >
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="type-label flex items-center gap-1 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 lg:h-[26px] lg:px-2 lg:py-0 lg:bg-theme-primary-dark lg:text-white lg:hover:bg-theme-primary-dark lg:hover:shadow-md"
                                    {...(item.external && { target: "_blank", rel: "noreferrer" })}
                                >
                                    {item.label}
                                    {item.external && (
                                        <>
                                            <FontAwesomeIcon
                                                icon={{ prefix: "fas", iconName: "arrow-up-right-from-square" }}
                                                className="w-[10px] !h-[10px]"
                                            />
                                            <span className="sr-only">(opens in a new tab)</span>
                                        </>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ThemeSwitcher className="lg:justify-self-end" />
            </div>

            {theme === "sports" && (
                <motion.div
                    className="absolute top-0 left-0"
                    style={{ y: moveBottomTop }} // Moves based on scroll
                    aria-hidden="true"
                >
                    <FieldMarks className="w-1/2 md:w-auto sm:w-auto" />
                </motion.div>
            )}
            {theme === "batman" && (
                <motion.div
                    style={{
                        x: moveRightLeft,
                    }}
                    className="w-[200%] absolute top-0"
                    aria-hidden="true"
                >
                    <BatLogos className="text-gray-50/5" />
                </motion.div>
            )}

            <HeaderNames />

            <div className="header__illustration w-fit relative left-[60%] -translate-x-1/2 -mt-4 md:-mt-8 lg:-mt-12 z-10">
                {theme === "developer" && (
                    <div role="img" aria-label="Illustrated desk setup with a monitor and laptop">
                        <CodingAnimated />
                    </div>
                )}
                {theme === "batman" && (
                    <div className="relative">
                        <div role="img" aria-label="Illustrated Gotham City skyline at twilight">
                            <BatmanAnimated />
                        </div>
                        <a
                            href="https://dcau.fandom.com/wiki/Twilight_in_Gotham"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-theme-primary-dark px-1 rounded-sm absolute -right-12 bottom-2 shadow-md type-label text-white flex items-center gap-1"
                        >
                            Twilight in Gotham
                            <FontAwesomeIcon
                                icon={{
                                    prefix: "fas",
                                    iconName: "arrow-up-right-from-square",
                                }}
                                className="w-[12px] !h-[12px]"
                            />
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </div>
                )}
                {theme === "sports" && (
                    <div className="mancave">
                        <img
                            src={`${
                                process.env.PUBLIC_URL + "/images/mancave.svg"
                            }`}
                            alt="Illustrated gaming den"
                            className="z-10 relative"
                        />
                        <div className="mancave__bg backdrop-blur-lg" />
                    </div>
                )}
                {/* Sized to the text and anchored by its right edge, so it never wraps */}
                <p
                    className={classNames(
                        "type-label md:text-base text-white absolute w-max whitespace-nowrap",
                        "top-[18px] md:top-[56px]",
                        theme === "batman"
                            ? "right-[calc(100%+12px)] md:right-[calc(100%+18px)] lg:right-[calc(100%+48px)]"
                            : "right-[calc(100%-2rem)] md:right-[calc(100%-6rem)]"
                    )}
                >
                    Creative Technologist
                </p>
            </div>
        </header>
    );
};

export default Header;
