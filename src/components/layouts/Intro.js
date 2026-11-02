import React from "react";

// Original wording: "Blending tech expertise with a flair for design, I enjoy bringing new ideas to life in the browser"
const quote =
    "Designer by training, developer by curiosity. I like taking an idea from a rough sketch to something you can actually click.";

const Intro = () => (
    <div className="bg-gray-100 px-4">
        <p className="type-lead max-w-2xl mx-auto py-14 text-center">
            {quote}
        </p>
    </div>
);

export default Intro;
