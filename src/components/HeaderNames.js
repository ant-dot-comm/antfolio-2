import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HeaderNames = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Transform scroll position into horizontal movement
    const moveLeftRight = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [-25, -50] : [-50, -100]
    ); // Moves antoni left-right
    const moveRightLeft = useTransform(scrollYProgress, [0, 1], [-50, 0]); // Moves commodore right-left

    return (
        <div ref={ref} className="flex flex-col text-center relative">
            <motion.h1
                className="header__firstName leading-none font-light text-gray-300 -mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10 xl:-mb-12"
                style={{
                    fontSize: `clamp(30px, 10vw, 300px)`,
                    x: moveLeftRight, // Controlled by scroll position
                }}
            >
                antoni
            </motion.h1>

            <motion.h2
                className="header__lastName leading-none font-semibold text-gray-300"
                style={{
                    fontSize: `clamp(50px, 12vw, 400px)`,
                    x: moveRightLeft, // Controlled by scroll position
                }}
            >
                commodore
                
            </motion.h2>
        </div>
    );
};

export default HeaderNames;
