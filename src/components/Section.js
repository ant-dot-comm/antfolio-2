import React, { useContext } from "react";
import classNames from "classnames";

import SiteContext from "../SiteContext";
import { sectionTitles } from "../data/themeCopy";

// Content widths: "wide" for showcase-style sections, "narrow" for reading sections
export const sectionWidths = {
    wide: "max-w-screen-xl",
    narrow: "max-w-2xl",
};

// Page section. The title always sits on the narrow column, left-aligned, even in wide sections. `dark` uses the header color with a white title.
// `title` is the Teal (default) title; other themes can swap it via sectionTitles in data/themeCopy.js.
const Section = ({ id, title, dark, width = "narrow", className, children }) => {
    const { theme } = useContext(SiteContext);
    const heading = sectionTitles[theme]?.[id] || title;

    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className={classNames("relative py-16 md:py-24 lg:py-32 px-4", dark && "bg-theme-primary-dark", className)}
        >
            <div className={classNames("mx-auto", sectionWidths[width])}>
                <h2
                    id={`${id}-title`}
                    className={classNames(
                        "type-h2 mx-auto mb-12 md:mb-16 lg:mb-20",
                        sectionWidths.narrow,
                        dark ? "text-white" : "text-theme-primary"
                    )}
                >
                    {heading}
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section;
