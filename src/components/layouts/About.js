import React, { useState, useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import SiteContext from "../../SiteContext";
import { Avatar } from "../Avatar";

const avatarThemes = {
    batman: ["avatar-dad-bat", "avatar-mom-bat", "avatar-girl-bat", "avatar-boy-bat"],
    sports: ["avatar-dad-sports", "avatar-mom-sports", "avatar-girl-sports", "avatar-boy-sports"],
    default: ["avatar-dad", "avatar-mom", "avatar-girl", "avatar-boy"],
};

const about = (
    <>
        <p>A long time ago in a galaxy far, far away...</p>
        <p>
            In a period of peace and freedom before the civil war with The
            Empire (aka kids). While studying the art of Film and Media
            Production at the Minnesota School of Business I discovered the
            magic of post-production tools such as Photoshop, Illustrator, After
            Effects, Final Cut Pro, etc. This unlocked a new level of creative
            midi-chlorians (IYKYK) inside me.
        </p>
        <p>
            After finishing my film studies, I decided to join the Graphic
            Design Jedi training program at St. Cloud State University. There I
            earned the title of Jedi Knight Designer.
        </p>
        <p>
            My first assignment as a JKD was with LiveEdit. There I worked with
            many clients around the galaxy designing and developing websites
            into the LiveEdit Aurora CMS. The success I achieved in this
            assignment led me to my next great adventure at the quickly growing
            start-up GoFundMe.
        </p>
        <p>
            In my time at GoFundMe I immersed myself in the powers of front-end
            development and graduated to Jedi Master after uniting my design and
            front-end abilities.
        </p>
        <p>
            Throughout my journeys around the creative galaxy I married the love
            of my life and she gave me the greatest title of Father. We have two
            sweet, kind, adorable, and chaotic little Sith Lords currently
            controlling most of our known galaxy.
        </p>
        <p>
            When the opportunity presents itself I enjoy spending time with my
            family, traveling, creating custom-designed Hotwheels, learning new
            technologies, golf, The Ohio State football, Formula 1 racing, and
            playing drums.
        </p>
    </>
);

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const { theme } = useContext(SiteContext);

    // Title motion effect
    const moveLeftRight = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [10, -50]
    );

    // Active Tab State
    const [activeTab, setActiveTab] = useState("story");

    return (
        <div
            ref={ref}
            className="flex flex-col md:flex-row relative py-12 sm:py-20 px-2 gap-12"
        >
            <div className="md:w-1/3">
                {/* Section Title with Motion */}
                <motion.h2
                    className="header__firstName text-center md:text-right font-light text-theme-primary"
                    style={{
                        fontSize: `clamp(60px, 10vw, 300px)`,
                        x: moveLeftRight,
                    }}
                >
                    About
                </motion.h2>

                {/* Tabs */}
                <nav className="flex justify-self-center md:flex-col md:justify-self-end gap-8 w-fit">
                    <button
                        onClick={() => setActiveTab("story")}
                        className={`px-4 text-sm font-semibold border-b-2 text-right ${
                            activeTab === "story"
                                ? "border-theme-primary text-theme-primary"
                                : "border-transparent text-gray-400"
                        } transition-all duration-300`}
                    >
                        Story
                    </button>
                    <button
                        onClick={() => setActiveTab("resume")}
                        className={`px-4 text-sm font-semibold border-b-2 text-right ${
                            activeTab === "resume"
                                ? "border-theme-primary text-theme-primary"
                                : "border-transparent text-gray-400"
                        } transition-all duration-300`}
                    >
                        Resume
                    </button>
                </nav>
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                className="md:w-2/3 md:mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {activeTab === "story" && (
                    <div className="flex flex-col gap-4">
                        {about}
                        <div className="flex items-center gap-4 max-w-full">
                            {(avatarThemes[theme] || avatarThemes.default).map((imageName) => (
                                <Avatar
                                    key={imageName}
                                    imageUrl={`${process.env.PUBLIC_URL}/images/familyIcons/${imageName}.svg`}
                                    className="w-16 h-16 rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "resume" && (
                    <div className="w-full flex flex-col gap-4">
                        <img src={`${process.env.PUBLIC_URL}/images/Antoni-Commodore-resume-1.jpg`} alt="Antoni Commodore" />
                        <img src={`${process.env.PUBLIC_URL}/images/Antoni-Commodore-resume-2.jpg`} alt="Antoni Commodore" />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default About;
