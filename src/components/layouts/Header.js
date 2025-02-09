import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const Header = () => {
    const ref = useRef(null);
    const { theme } = useContext(SiteContext);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const moveBottomTop = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [-250, -550] : [-50, -250]
    );
    const moveRightLeft = useTransform(scrollYProgress, [0, 1], [-25, 25]);

    return (
        <header className="header w-full relative pt-16 md:pt-16 bg-gradient-to-b from-theme-primary-dark to-theme-primary-light overflow-hidden">
            <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-gradient-to-b from-gray-900/40 to-gray-500/0 backdrop-blur-lg">
                {/* Social */}
                <div className="flex gap-4 text-gray-300">
                    <a href="https://www.linkedin.com/in/antonicommodore/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                        icon={{ prefix: "fab", iconName: "linkedin-in" }}
                        transform="shrink-4"
                        className="bg-theme-primary-light w-[24px] h-[24px] rounded-md"
                    />
                    </a>
                    <a href="https://www.behance.net/antonicommodore" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                        icon={{ prefix: "fab", iconName: "behance" }}
                        transform="shrink-4"
                        className="bg-theme-primary-light w-[24px] h-[24px] rounded-md"
                    />
                    </a>
                </div>
                {/* Links */}
                <ThemeSwitcher />
            </div>

            {theme === "sports" && (
                <motion.div
                    className="absolute top-0 left-0"
                    style={{ y: moveBottomTop }} // Moves based on scroll
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
                >
                    <BatLogos className="text-gray-50/5" />
                </motion.div>
            )}

            <HeaderNames />

            <div className="header__illustration w-fit relative left-[60%] -translate-x-1/2 -mt-4 md:-mt-8 lg:-mt-12 z-10">
                {theme === "developer" && <CodingAnimated />}
                {theme === "batman" && (
                    <div className="relative">
                        <BatmanAnimated />
                        <a
                            href="https://dcau.fandom.com/wiki/Twilight_in_Gotham"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-theme-primary px-1 rounded-sm absolute -right-12 bottom-2 shadow-md font-semibold text-gray-300 text-xs md:text-sm flex items-center gap-1"
                        >
                            Twilight in Gotham
                            <FontAwesomeIcon
                                icon={{
                                    prefix: "fas",
                                    iconName: "arrow-up-right-from-square",
                                }}
                                className="w-[12px] !h-[12px]"
                            />
                        </a>
                    </div>
                )}
                {theme === "sports" && (
                    <div className="mancave">
                        <img
                            src={`${
                                process.env.PUBLIC_URL + "/images/mancave.svg"
                            }`}
                            alt="man cave"
                            className="z-10 relative"
                        />
                        <div className="mancave__bg backdrop-blur-lg" />
                    </div>
                )}
                <div
                    className={classNames(
                        "text-xs md:text-base leading-[12px] font-semibold text-gray-300 absolute",
                        "top-[18px] md:top-[56px] w-32 md:w-48",
                        theme === "batman"
                            ? "-left-[140px] md:-left-[210px] lg:-left-[240px]"
                            : "-left-24"
                    )}
                >
                    <div className="text-right">Design Technologist</div>
                    <div className="text-right">UX/UI Developer</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
