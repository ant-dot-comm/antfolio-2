import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HeaderNames = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const reduceMotion = useReducedMotion();

    // Transform scroll position into horizontal movement
    const firstNameRange = isMobile ? [-25, -50] : [-50, -100];
    const moveLeftRight = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [firstNameRange[0], firstNameRange[0]] : firstNameRange
    ); // Moves antoni left-right
    const moveRightLeft = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [-50, -50] : [-50, 0]
    ); // Moves commodore right-left

    return (
        <h1 ref={ref} className="flex flex-col text-center relative">
            <motion.span
                className="header__firstName block leading-none font-light text-white -mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10 xl:-mb-12"
                style={{
                    fontSize: `clamp(30px, 10vw, 300px)`,
                    x: moveLeftRight, // Controlled by scroll position
                }}
            >
                antoni
            </motion.span>

            <motion.span
                className="header__lastName block leading-none font-semibold text-white"
                style={{
                    fontSize: `clamp(50px, 12vw, 400px)`,
                    x: moveRightLeft, // Controlled by scroll position
                }}
            >
                commodore
            </motion.span>
        </h1>
    );
};

export default HeaderNames;
