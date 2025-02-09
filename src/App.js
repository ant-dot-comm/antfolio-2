import React, { useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import SiteContext from "./SiteContext";
import DividerShadow from "./components/DividerShadow";
import Experience from "./components/layouts/Experience";
import Work from "./components/layouts/Work";
import About from "./components/layouts/About";

import "./styles/App.scss";
import Header from "./components/layouts/Header";

library.add(fas, fab);

function App() {
    const { theme } = useContext(SiteContext);

    const quote =
        "Blending tech expertise with a flair for design, I enjoy bringing new ideas to life in the browser";

    return (
        <div className="App h-[2000px] text-gray-800">
            <Header />

            {theme === "sports" && (
                <div
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/twolves-pattern.svg)`,
                        backgroundRepeat: "repeat-x",
                        height: "36px",
                    }}
                />
            )}

            <div className="bg-gradient-to-b from-gray-300 to-white">
                <DividerShadow />
                <div className="max-w-screen-sm mx-auto px-4 pt-4 pb-14 font-semibold text-lg text-center">
                    {quote}
                </div>
            </div>

            <div className="">
                <DividerShadow />
                <Experience />
            </div>

            <div className="">
                <DividerShadow />
                <Work />
            </div>

            <div className="">
                <DividerShadow />
                <About />
            </div>
        </div>
    );
}

export default App;
