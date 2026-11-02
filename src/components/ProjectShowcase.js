import React from "react";
import classNames from "classnames";

import ButtonLink from "./ButtonLink";
import { sectionWidths } from "./Section";
import ToolIcon from "./ToolIcon";
import { BrowserFrame, LaptopFrame, PhoneFrame, Tile } from "./ShowcaseMedia";
import { toolLogos } from "../data/toolLogos";

/*
 * One project, shown in one of three layouts. Set on the project's `showcase`:
 *
 *   layout: "desktop"  images: [left window, laptop screen, right window]
 *   layout: "mobile"   images: phone screens left to right (5 color blocks if empty)
 *   layout: "preview"  images: [main image, bottom left, bottom right]
 *
 *   accent (optional, never a color block): a cut-out image layered on top.
 *     mobile: top right, like a hand holding a phone. preview: overlapping the bottom tiles.
 *
 * Each image is { src, alt }. A missing or null image renders as a color block.
 * The text comes from the project itself: title, description, tools (toolLogos ids),
 * url and ctaLabel, plus optional secondaryLinks: [{ label, url }] shown as outline buttons.
 */

const ShowcaseDetails = ({ project, narrow }) => {
    const tools = (project.tools || []).map((id) => toolLogos[id]).filter(Boolean);
    const secondaryLinks = project.secondaryLinks || [];

    return (
        // `narrow` keeps the text to the narrow section width, centered on the page
        <div className={classNames("flex flex-col items-start gap-4", narrow && ["mx-auto", sectionWidths.narrow])}>
            <h3 id={`${project.id}-title`} className="type-h3">
                {project.title}
            </h3>
            <p className="type-body">{project.description}</p>
            {tools.length > 0 && (
                <ul aria-label="Tools" className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                        <li
                            key={tool.label}
                            title={tool.label}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-gray-200 to-white"
                        >
                            <ToolIcon {...tool} className="h-7 w-7" />
                            <span className="sr-only">{tool.label}</span>
                        </li>
                    ))}
                </ul>
            )}
            {(project.url || secondaryLinks.length > 0) && (
                <div className="flex flex-wrap gap-3">
                    {project.url && (
                        <ButtonLink href={project.url} external>
                            {project.ctaLabel}
                        </ButtonLink>
                    )}
                    {secondaryLinks.map((link) => (
                        <ButtonLink key={link.url} href={link.url} variant="secondary" external>
                            {link.label}
                        </ButtonLink>
                    ))}
                </div>
            )}
        </div>
    );
};

// On hover the side windows ease outward a little to reveal more of them
const sideWindowMotion =
    "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

const DesktopLayout = ({ project, images }) => (
    <>
        <ShowcaseDetails project={project} narrow />
        <div className="group relative mx-auto mt-12 max-w-5xl">
            <BrowserFrame
                image={images[0]}
                className={classNames(
                    "absolute left-0 top-[12%] hidden w-[36%] lg:block motion-safe:group-hover:-translate-x-[14%] motion-safe:group-hover:-translate-y-[4%]",
                    sideWindowMotion
                )}
            />
            <BrowserFrame
                image={images[2]}
                className={classNames(
                    "absolute right-0 top-[12%] hidden w-[36%] lg:block motion-safe:group-hover:translate-x-[14%] motion-safe:group-hover:-translate-y-[4%]",
                    sideWindowMotion
                )}
            />
            {/* Laptop screen matches the narrow column, so it lines up with the text above */}
            <LaptopFrame image={images[1]} className={classNames("relative z-10 mx-auto", sectionWidths.narrow)} />
        </div>
    </>
);

const MobileLayout = ({ project, images, accent }) => {
    const phones = images.length ? images : Array(5).fill(null);
    const center = Math.floor((phones.length - 1) / 2);

    return (
        <>
            <ShowcaseDetails project={project} narrow />
            <div className="relative mt-12">
                {accent?.src && (
                    <img
                        src={accent.src}
                        alt={accent.alt || ""}
                        className="pointer-events-none absolute -top-[10%] right-0 z-20 hidden w-[22%] lg:block"
                    />
                )}
                <ul className="flex items-start justify-center gap-3 sm:gap-5">
                    {phones.map((image, index) => {
                        const distance = Math.abs(index - center);
                        return (
                            <li
                                key={index}
                                className={classNames(
                                    "shrink-0",
                                    distance === 0 ? "w-[36%] sm:w-[22%]" : "w-[26%] sm:w-[17%]",
                                    distance > 1 && "hidden sm:block"
                                )}
                                style={{ marginTop: `${distance * 2.5}rem` }}
                            >
                                <PhoneFrame image={image} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

const PreviewLayout = ({ project, images, accent }) => (
    <div className="relative grid gap-6 md:grid-cols-12">
        <div className="md:col-span-5 md:pt-10 md:pr-6">
            <ShowcaseDetails project={project} />
        </div>
        <Tile image={images[0]} className="md:col-span-7" />
        {/* Phones show only the main image */}
        <Tile image={images[1]} className="hidden md:block md:col-span-6" />
        <Tile image={images[2]} className="hidden md:block md:col-span-6" />
        {accent?.src && (
            <img
                src={accent.src}
                alt={accent.alt || ""}
                className="pointer-events-none absolute -bottom-[6%] left-1/2 z-10 hidden w-[24%] -translate-x-1/2 md:block"
            />
        )}
    </div>
);

const layouts = {
    desktop: DesktopLayout,
    mobile: MobileLayout,
    preview: PreviewLayout,
};

const ProjectShowcase = ({ project }) => {
    const { layout = "desktop", images = [], accent } = project.showcase || {};
    const Layout = layouts[layout] || DesktopLayout;

    return (
        <article aria-labelledby={`${project.id}-title`}>
            <Layout project={project} images={images} accent={accent} />
        </article>
    );
};

export default ProjectShowcase;
