import React, { useContext } from "react";

import SiteContext from "../../SiteContext";
import Section from "../Section";
import { Avatar } from "../Avatar";

const avatarThemes = {
    batman: ["avatar-dad-bat", "avatar-mom-bat", "avatar-girl-bat", "avatar-boy-bat"],
    sports: ["avatar-dad-sports", "avatar-mom-sports", "avatar-girl-sports", "avatar-boy-sports"],
    default: ["avatar-dad", "avatar-mom", "avatar-girl", "avatar-boy"],
};

const About = () => {
    const { theme } = useContext(SiteContext);

    return (
        <Section id="about" title="How I Got Here">
            <div className="type-body flex flex-col gap-4">
                <p>A long time ago in a galaxy far, far away...</p>
                <p>
                    In a period of peace and freedom before the civil war
                    with The Empire (aka kids). While studying the art of
                    Film and Media Production at the Minnesota School of
                    Business I discovered the magic of post-production tools
                    such as Photoshop, Illustrator, After Effects, Final Cut
                    Pro, etc. This unlocked a new level of creative
                    midi-chlorians (IYKYK) inside me.
                </p>
                <p>
                    After finishing my film studies, I decided to join the
                    Graphic Design Jedi training program at St. Cloud State
                    University. There I earned the title of Jedi Knight
                    Designer.
                </p>
                <p>
                    My first assignment as a JKD was with LiveEdit. There I
                    worked with many clients around the galaxy designing and
                    developing websites into the LiveEdit Aurora CMS. The
                    success I achieved in this assignment led me to my next
                    great adventure at the quickly growing start-up GoFundMe.
                </p>
                <p>
                    In my time at GoFundMe I immersed myself in the powers of
                    front-end development and graduated to Jedi Master after
                    uniting my design and front-end abilities.
                </p>
                <p>
                    Throughout my journeys around the creative galaxy I
                    married the love of my life and she gave me the greatest
                    title of Father. We have two sweet, kind, adorable, and
                    chaotic little Sith Lords currently controlling most of
                    our known galaxy.
                </p>
                <p>
                    When the opportunity presents itself I enjoy spending
                    time with my family, traveling, creating custom-designed
                    Hotwheels, learning new technologies, golf, The Ohio
                    State football, Formula 1 racing, and playing drums.
                </p>
                <div
                    role="img"
                    aria-label="Illustrated avatars of my family"
                    className="mt-4 flex gap-3"
                >
                    {(avatarThemes[theme] || avatarThemes.default).map((imageName) => (
                        <Avatar
                            key={imageName}
                            imageUrl={`${process.env.PUBLIC_URL}/images/familyIcons/${imageName}.svg`}
                            className="w-14 h-14 rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
