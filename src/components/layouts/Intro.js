import React from "react";

// Original wording: "Blending tech expertise with a flair for design, I enjoy bringing new ideas to life in the browser"
const quote =
    "Designer and developer by day, with a utility belt of side projects by night. Every tool in it started as “I wonder if I could build that.”";

const Intro = () => (
    <div className="bg-gray-100 px-4">
        <p className="type-lead max-w-2xl mx-auto py-14 text-center">
            {quote}
        </p>
    </div>
);

export default Intro;
