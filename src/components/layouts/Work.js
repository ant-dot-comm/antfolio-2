import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { MediaCard } from "../MediaCard";

// Define project data
const projects = [
    {
        id: 1,
        title: "LeagueSpot",
        url: "https://www.behance.net/gallery/196153135/LeagueSpot",
        tags: ["design, development"],
        image: `${process.env.PUBLIC_URL + "/images/projects/LeagueSpot.jpg"}`,
        content:
            "During my tenure at LeagueSpot, I led the creation and implementation of a comprehensive design system, product features, and custom theming capabilities.",
    },
    {
        id: 2,
        title: "F1nsight.com",
        url: "https://www.f1nsight.com/",
        tags: ["design, development"],
        image: `${
            process.env.PUBLIC_URL + "/images/projects/F1nsightMeta.jpg"
        }`,
        content:
            "Welcome to F1NSIGHT! This project is dedicated to providing Formula 1 enthusiasts with detailed analyses of past race data, including leaderboards, lap times, tire strategies, and the fastest laps for each driver",
    },
    {
        id: 3,
        title: "The Grails Club",
        url: "http://thegrailsclub.com",
        tags: ["design, development"],
        image: `${process.env.PUBLIC_URL + "/images/projects/grails.png"}`,
        content:
            "I embarked on a creative project using Blender and Three.js to design and render custom cars inspired by my favorite sneakers.",
    },
    {
        id: 4,
        title: "Custom Hot Wheels",
        url: "https://www.instagram.com/batdadmobiles/",
        tags: ["design"],
        image: `${process.env.PUBLIC_URL + "/images/projects/customs.png"}`,
        content:
            "I love customizing Hot Wheels and collecting unique cars and Batmobiles. Here's a showcase of some of my favorite creations and collectibles.",
    },
    {
        id: 5,
        title: "LoremPickSum.com",
        url: "https://www.behance.net/gallery/162760141/Logos",
        tags: ["development"],
        image: `${
            process.env.PUBLIC_URL + "/images/projects/LoremPickSum.png"
        }`,
        content:
            "If you're tired of the same old Lorem Ipsum, look no further! Welcome to LoremPickSum, where you'll find a refreshing alternative to spice up your placeholder text needs.",
    },
];

// Define tabs
const tabs = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
];

const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const moveLeftRight = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [-100, 0]
    ); 

    const [activeTab, setActiveTab] = useState("all");

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter((p) => p.tags.includes(activeTab));

    return (
        <div className="flex flex-col relative py-12 sm:py-20 px-2">
            {/* Section Title with Scroll Effect */}
            <motion.div
                ref={ref} 
                className="header__firstName text-center md:text-right leading-none font-light text-theme-primary mb-12"
                style={{
                    fontSize: `clamp(60px, 10vw, 300px)`,
                    x: moveLeftRight,
                }}
            >
                Work
            </motion.div>

            {/* Tab Navigation */}
            <nav className="tabs flex justify-center gap-6 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`p-2 text-sm font-semibold border-b-2 ${
                            activeTab === tab.id
                                ? "border-theme-primary text-theme-primary"
                                : "border-transparent text-gray-400"
                        } transition-all duration-300`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            {/* Project Cards */}
            <motion.div
                className="tab-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeTab} // Ensures animation resets when changing tabs
            >
                {filteredProjects.map((project) => (
                    <MediaCard
                        title={project.title}
                        url={project.url}
                        image={project.image}
                    >
                        {project.content}
                    </MediaCard>
                ))}
            </motion.div>
        </div>
    );
};

export default Work;
