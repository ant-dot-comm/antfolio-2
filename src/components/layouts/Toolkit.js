import React, { useContext, useEffect, useRef, useState } from "react";

import SiteContext from "../../SiteContext";
import Section from "../Section";
import ToolIcon from "../ToolIcon";

import { toolLogos } from "../../data/toolLogos";
import { toolkitItems } from "../../data/themeCopy";

const disciplines = [
    {
        id: "design",
        title: "Design",
        statement: "Interfaces that make sense before they make an impression.",
        detail: "UI/UX, design systems, visual direction, prototyping, accessibility.",
        tools: [
            { label: "Figma", icon: toolLogos.figma.icon },
            { label: "Adobe Creative Suite", icon: toolLogos.adobe.icon },
        ],
    },
    {
        id: "engineering",
        title: "Engineering",
        statement: "Frontend that holds up when the team grows.",
        detail: "React, TypeScript, component architecture, testing, animation, performance.",
        tools: [
            { label: "React", icon: toolLogos.react.icon },
            { label: "Next.js", icon: toolLogos.nextjs.icon },
            { label: "TypeScript", icon: toolLogos.typescript.icon },
            { label: "Storybook", icon: toolLogos.storybook.icon },
            { label: "Jest", icon: toolLogos.jest.icon },
            { label: "Cypress", icon: toolLogos.cypress.icon },
        ],
    },
    {
        id: "exploration",
        title: "Exploration",
        statement: "Where the experiments live.",
        detail: "Three.js, Blender, D3, 3D scenes and creative coding.",
        tools: [
            { label: "Three.js", icon: toolLogos.threejs.icon },
            { label: "Blender", icon: toolLogos.blender.icon },
            { label: "D3.js", icon: toolLogos.d3.icon },
        ],
    },
    {
        id: "direction",
        title: "Agentic Workflows",
        statement: "Generative tools are part of how I work, and I stay close to what they make.",
        detail: "I use them to explore ideas and move faster, with guidance docs, focused tasks, and a real review before anything ships.",
        aiNote: true,
        tools: [],
    },
];

// "How I work with agents" note: opens on hover, focus or tap; closes on leave, blur or Escape
const AiNote = () => {
    const [open, setOpen] = useState(false);
    const closeTimer = useRef(null);

    const show = () => {
        clearTimeout(closeTimer.current);
        setOpen(true);
    };
    // Short delay so the pointer can cross the gap into the note
    const hide = () => {
        closeTimer.current = setTimeout(() => setOpen(false), 150);
    };

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useEffect(() => () => clearTimeout(closeTimer.current), []);

    return (
        <span onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
            <button
                type="button"
                aria-expanded={open}
                aria-controls="ai-note"
                onClick={show}
                className="font-semibold text-theme-accent underline decoration-dotted underline-offset-2"
            >
                How I work with agents
            </button>
            <div
                id="ai-note"
                hidden={!open}
                className="absolute left-0 top-full z-20 mt-2 w-full max-w-md rounded-lg bg-theme-primary-dark p-5 text-white shadow-lg"
            >
                <p className="type-body font-semibold text-white">I use them. I don't take their word for it.</p>
                <p className="type-small mt-2 text-white">
                    Agents help me work faster and sharper, not think for me.
                    The rules, tokens and conventions live in markdown files
                    that guide every agent I run, so generated work follows the
                    system instead of improvising its own. Years of building
                    things from scratch mean I can tell when generated work is
                    wrong, over-engineered, or just bland, and I'd rather catch
                    it than ship it.
                </p>
                <p className="type-label mt-3">Agents draft. I direct.</p>
            </div>
        </span>
    );
};

const Toolkit = () => {
    const { theme } = useContext(SiteContext);

    return (
        <Section id="what-i-do" title="What I Do">
            <ul className="flex flex-col">
                {disciplines.map((discipline) => {
                    const copy = { ...discipline, ...toolkitItems[theme]?.[discipline.id] };

                    return (
                        <li
                            key={discipline.id}
                            className="flex flex-col gap-2 py-6 border-t border-theme-line first:border-t-0 first:pt-0 last:pb-0"
                        >
                            <h3 className="type-h4">{copy.title}</h3>
                            <div className="relative">
                                <p className="type-body font-medium text-theme-ink">{copy.statement}</p>
                                <div className="type-small mt-1">
                                    {copy.detail}
                                    {discipline.aiNote && (
                                        <>
                                            {" "}
                                            <AiNote />
                                        </>
                                    )}
                                </div>
                            </div>
                            {discipline.tools.length > 0 && (
                                <ul
                                    aria-label={`${discipline.title} tools`}
                                    className="mt-2 flex flex-wrap gap-2"
                                >
                                    {discipline.tools.map((tool) => (
                                        <li
                                            key={tool.label}
                                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-theme-chip-from to-theme-chip-to px-3 py-1 type-label text-theme-ink"
                                        >
                                            <ToolIcon {...tool} className="w-5 h-5" />
                                            {tool.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
};

export default Toolkit;
