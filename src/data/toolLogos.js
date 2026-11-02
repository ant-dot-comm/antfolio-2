// Tool logos by id, shared by the What I Do chips and project showcases
import { ReactComponent as Adobe } from "../components/Svgs/experience-logos/adobe.svg";
import { ReactComponent as Atlassian } from "../components/Svgs/experience-logos/atlassian.svg";
import { ReactComponent as Blender } from "../components/Svgs/experience-logos/blender.svg";
import { ReactComponent as Cypress } from "../components/Svgs/experience-logos/cypress.svg";
import { ReactComponent as D3js } from "../components/Svgs/experience-logos/d3js.svg";
import { ReactComponent as Figma } from "../components/Svgs/experience-logos/figma.svg";
import { ReactComponent as Git } from "../components/Svgs/experience-logos/git.svg";
import { ReactComponent as GitHub } from "../components/Svgs/experience-logos/github.svg";
import { ReactComponent as HTML5 } from "../components/Svgs/experience-logos/html5.svg";
import { ReactComponent as Jest } from "../components/Svgs/experience-logos/jest.svg";
import { ReactComponent as JS } from "../components/Svgs/experience-logos/js.svg";
import { ReactComponent as NextJs } from "../components/Svgs/experience-logos/nextjs.svg";
import { ReactComponent as ReactJs } from "../components/Svgs/experience-logos/react.svg";
import { ReactComponent as Sass } from "../components/Svgs/experience-logos/sass.svg";
import { ReactComponent as SemanticUI } from "../components/Svgs/experience-logos/semanticui.svg";
import { ReactComponent as Storybook } from "../components/Svgs/experience-logos/storybook.svg";
import { ReactComponent as Strapi } from "../components/Svgs/experience-logos/strapi.svg";
import { ReactComponent as Tailwind } from "../components/Svgs/experience-logos/tailwind.svg";
import { ReactComponent as ThreeJs } from "../components/Svgs/experience-logos/threejs.svg";
import { ReactComponent as TypeScript } from "../components/Svgs/experience-logos/typescript.svg";
import { ReactComponent as Vue } from "../components/Svgs/experience-logos/vue.svg";
import { ReactComponent as ZeroHeight } from "../components/Svgs/experience-logos/zeroheight.svg";

const iconFile = (name) => `${process.env.PUBLIC_URL}/icons/${name}`;

// Entries have either an SVG component (`icon`) or an image file (`src`)
export const toolLogos = {
    adobe: { label: "Adobe Creative Suite", icon: Adobe },
    atlassian: { label: "Atlassian", icon: Atlassian },
    blender: { label: "Blender", icon: Blender },
    chatgpt: { label: "ChatGPT", src: iconFile("chatgpt.webp") },
    claude: { label: "Claude", src: iconFile("claude.webp") },
    cypress: { label: "Cypress", icon: Cypress },
    d3: { label: "D3.js", icon: D3js },
    figma: { label: "Figma", icon: Figma },
    git: { label: "Git", icon: Git },
    github: { label: "GitHub", icon: GitHub },
    html5: { label: "HTML5", icon: HTML5 },
    jest: { label: "Jest", icon: Jest },
    javascript: { label: "JavaScript", icon: JS },
    nextjs: { label: "Next.js", icon: NextJs },
    react: { label: "React", icon: ReactJs },
    sass: { label: "Sass", icon: Sass },
    semanticui: { label: "Semantic UI", icon: SemanticUI },
    storybook: { label: "Storybook", icon: Storybook },
    strapi: { label: "Strapi", icon: Strapi },
    tailwind: { label: "Tailwind CSS", icon: Tailwind },
    threejs: { label: "Three.js", icon: ThreeJs },
    typescript: { label: "TypeScript", icon: TypeScript },
    vue: { label: "Vue.js", icon: Vue },
    zeroheight: { label: "Zeroheight", icon: ZeroHeight },
};
