import React from "react";
import classNames from "classnames";

// An image slot: shows the image, or a flat theme-color block when there's no image yet
export const ShowcaseImage = ({ image, className }) =>
    image?.src ? (
        <img src={image.src} alt={image.alt || ""} className={classNames("block w-full object-cover", className)} />
    ) : (
        <div aria-hidden="true" className={classNames("w-full bg-theme-primary-light", className)} />
    );

// The screen fills the wrapper's width; the bezel and base sit outside it,
// so the screen edges line up with whatever column the wrapper is sized to.
export const LaptopFrame = ({ image, className }) => (
    <div className={className}>
        <div className="relative -mx-3 rounded-t-2xl bg-gray-900 px-3 pt-3 pb-2 shadow-2xl">
            <span aria-hidden="true" className="absolute left-1/2 top-3 z-10 h-2.5 w-[14%] -translate-x-1/2 rounded-b-md bg-gray-900 sm:h-3" />
            <ShowcaseImage image={image} className="aspect-[16/10] rounded-sm" />
        </div>
        <div aria-hidden="true" className="relative -mx-[8%] h-3 sm:h-4 rounded-b-xl bg-gradient-to-b from-gray-300 to-gray-500">
            <span className="absolute left-1/2 top-0 h-1.5 w-[15%] -translate-x-1/2 rounded-b-md bg-gray-400" />
        </div>
    </div>
);

export const BrowserFrame = ({ image, className }) => (
    <div className={classNames("overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5", className)}>
        <ShowcaseImage image={image} className="aspect-[16/10]" />
    </div>
);

export const PhoneFrame = ({ image, className }) => (
    <div className={classNames("rounded-[1.75rem] bg-gray-900 p-[4%] shadow-xl", className)}>
        <ShowcaseImage image={image} className="aspect-[9/19.5] rounded-[1.4rem]" />
    </div>
);

export const Tile = ({ image, className }) => (
    <div className={classNames("overflow-hidden rounded-3xl", className)}>
        <ShowcaseImage image={image} className="aspect-[4/3] h-full" />
    </div>
);
