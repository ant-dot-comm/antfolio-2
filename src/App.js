import React, { useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import SiteContext from "./SiteContext";
import Header from "./components/layouts/Header";
import Intro from "./components/layouts/Intro";
import Work from "./components/layouts/Work";
import Toolkit from "./components/layouts/Toolkit";
import Route from "./components/layouts/Route";
import About from "./components/layouts/About";
import Contact from "./components/layouts/Contact";

import "./styles/App.scss";

library.add(fas, fab);

const sections = [Work, Toolkit, Route, About, Contact];

function App() {
    const { theme } = useContext(SiteContext);

    return (
        <div className="App text-gray-800 overflow-x-clip">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-14 focus:left-4 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:rounded-md type-label"
            >
                Skip to content
            </a>

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

            <main id="main">
                <Intro />

                {/* Alternate white and light neutral, starting white after the gray intro */}
                {sections.map((SectionComponent, index) => (
                    <div key={index} className={index % 2 ? "bg-gray-100" : "bg-white"}>
                        <SectionComponent />
                    </div>
                ))}
            </main>

        </div>
    );
}

export default App;
