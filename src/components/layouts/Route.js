import React from "react";

import Section from "../Section";
import ButtonLink from "../ButtonLink";
import { links } from "../../data/links";

// Same order as the resume
const route = [
    {
        years: "2025–present",
        company: "Files.com",
        title: "Senior UX/UI Designer & Developer",
        description:
            "Shaping the user experience across Files.com by finding friction and making complex workflows easier to understand and use. Led the design and implementation of the Mover and ExpanDrive product experiences, from early concepts to shipped product, and explore AI-assisted product development with Claude, structured documentation, generated UI and agent-based systems.",
    },
    {
        years: "2024–2026",
        company: "Origin",
        title: "Senior UX/UI Designer & Developer",
        description:
            "Partnered with teams to solve design challenges through both design and code: user experiences, prototypes and scalable interfaces for client projects, plus design systems and reusable component libraries.",
    },
    {
        years: "2024–present",
        company: "A2 Odyssey Labs",
        title: "Design Technologist",
        description:
            "My own studio for building products that combine design, code and personal interests, including F1nsight.com and the AI-powered event products LumTags and Lumetry AI Photo Booth.",
    },
    {
        years: "2023–2024",
        company: "LeagueSpot",
        title: "Senior UX/UI Designer & Developer",
        description:
            "Designed and built LeagueSpot's design system from the ground up, improving the experience for players, coaches, managers and organizations across the esports ecosystem.",
    },
    {
        years: "2015–2023",
        company: "GoFundMe",
        title: "Web Developer & Web Developer II, then Design System Engineer II",
        description:
            "Built and maintained features across the Home Page, Create Flow, Campaign Page and Donation Flow, with A/B testing through Optimizely. Then helped build and maintain Heart, GoFundMe's internal design system in React, TypeScript and Sass, with Storybook docs and office hours.",
    },
    {
        years: "2013–2015",
        company: "LiveEdit",
        title: "UX/UI Designer & Developer",
        description:
            "Designed, built and launched custom websites for health, wellness and fitness businesses on the LiveEdit Aurora CMS, then trained clients to manage their own content.",
    },
];

const Route = () => (
    <Section id="experience" title="Experience">
        <div>
            <ol className="border-l-2 border-theme-heading ml-2">
                {route.map((stop) => (
                    <li key={stop.company} className="relative pl-8 pb-10 last:pb-0">
                        <span
                            aria-hidden="true"
                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-theme-accent ring-4 ring-theme-surface"
                        />
                        <p className="type-label text-theme-accent">{stop.years}</p>
                        <h3 className="type-h4">{stop.company}</h3>
                        <p className="type-body font-medium text-theme-ink">{stop.title}</p>
                        <p className="type-body mt-2">{stop.description}</p>
                    </li>
                ))}
            </ol>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-theme-line">
                {/* Stacked like the timeline entries: label, degree, school */}
                <div>
                    <p className="type-label text-theme-accent">Education</p>
                    <p className="type-body font-medium text-theme-ink">BFA Graphic Design</p>
                    <p className="type-small">St. Cloud State University</p>
                </div>
                <ButtonLink href={links.resume} download className="self-start sm:self-auto">
                    Download the full resume
                </ButtonLink>
            </div>
        </div>
    </Section>
);

export default Route;
