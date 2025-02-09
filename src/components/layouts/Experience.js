import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Import individual icons
import { ReactComponent as Adobe } from "../Svgs/experience-logos/adobe.svg";
import { ReactComponent as Atlassian } from "../Svgs/experience-logos/atlassian.svg";
import { ReactComponent as Blender } from "../Svgs/experience-logos/blender.svg";
import { ReactComponent as Cypress } from "../Svgs/experience-logos/cypress.svg";
import { ReactComponent as D3js } from "../Svgs/experience-logos/d3js.svg";
import { ReactComponent as Figma } from "../Svgs/experience-logos/figma.svg";
import { ReactComponent as Git } from "../Svgs/experience-logos/git.svg";
import { ReactComponent as GitHub } from "../Svgs/experience-logos/github.svg";
import { ReactComponent as HTML5 } from "../Svgs/experience-logos/html5.svg";
import { ReactComponent as Jest } from "../Svgs/experience-logos/jest.svg";
import { ReactComponent as JS } from "../Svgs/experience-logos/js.svg";
import { ReactComponent as NextJs } from "../Svgs/experience-logos/nextjs.svg";
import { ReactComponent as ReactJs } from "../Svgs/experience-logos/react.svg";
import { ReactComponent as SASS } from "../Svgs/experience-logos/sass.svg";
import { ReactComponent as SemanticUI } from "../Svgs/experience-logos/semanticui.svg";
import { ReactComponent as Storybook } from "../Svgs/experience-logos/storybook.svg";
import { ReactComponent as Strapi } from "../Svgs/experience-logos/strapi.svg";
import { ReactComponent as Tailwind } from "../Svgs/experience-logos/tailwind.svg";
import { ReactComponent as ThreJs } from "../Svgs/experience-logos/threejs.svg";
import { ReactComponent as TypeScript } from "../Svgs/experience-logos/typescript.svg";
import { ReactComponent as Vue } from "../Svgs/experience-logos/vue.svg";
import { ReactComponent as ZeroHeight } from "../Svgs/experience-logos/zeroheight.svg";

// Define icons for mapping (Now using component references)
const icons = [
    { id: "figma", label: "Figma", component: Figma },
    { id: "adobe", label: "Adobe", component: Adobe },
    { id: "reactjs", label: "React.js", component: ReactJs },
    { id: "nextjs", label: "Next.js", component: NextJs },
    { id: "typescript", label: "TypeScript", component: TypeScript },
    { id: "tailwind", label: "TailwindCSS", component: Tailwind },
    { id: "semanticui", label: "SemanticUI", component: SemanticUI },
    { id: "sass", label: "Sass", component: SASS },
    { id: "html5", label: "HTML5", component: HTML5 },
    { id: "js", label: "JavaScript", component: JS },
    { id: "storybook", label: "Storybook", component: Storybook },
    { id: "vue", label: "Vue.js", component: Vue },
    { id: "atlassian", label: "Atlassian", component: Atlassian },
    { id: "git", label: "Git", component: Git },
    { id: "github", label: "GitHub", component: GitHub },
    { id: "jest", label: "Jest", component: Jest },
    { id: "cypress", label: "Cypress", component: Cypress },
    { id: "strapi", label: "Strapi", component: Strapi },
    { id: "zeroheight", label: "Zeroheight", component: ZeroHeight },
    { id: "d3js", label: "D3.js", component: D3js },
    { id: "blender", label: "Blender", component: Blender },
    { id: "threejs", label: "Three.js", component: ThreJs },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Triggers fade-in when 30% visible
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Adjust title movement based on screen size
    const moveLeftRight = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [100, 0]
    );

    return (
        <div className="flex flex-col text-center md:text-left relative py-12 sm:py-20 px-2">
            {/* Section Title with Scroll Effect */}
            <motion.h2
                ref={ref}
                className="header__firstName leading-none font-light text-gray-300 mb-12"
                style={{
                    fontSize: `clamp(60px, 10vw, 300px)`,
                    x: moveLeftRight,
                }}
            >
                Experience
                <div className="text-xs text-gray-400 font-normal md:ml-[15%]">
                    Includes, but not limitied to
                </div>
            </motion.h2>

            {/* Icons Section */}
            <div className="flex flex-wrap justify-center gap-8">
                {icons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                        <motion.div
                            key={icon.id}
                            className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-200 to-white w-20 h-20 rounded-lg px-2 py-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.25, delay: index * 0.05 }}
                        >
                            <IconComponent className="w-12 h-12" />
                            <p className="mt-2 text-xs text-gray-800">{icon.label}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;