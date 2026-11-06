import React, { useContext } from "react";

import SiteContext from "../../SiteContext";
import Section from "../Section";
import { Avatar } from "../Avatar";
import { aboutStories } from "../../data/themeCopy";

const avatarThemes = {
    batman: ["avatar-dad-bat", "avatar-mom-bat", "avatar-girl-bat", "avatar-boy-bat"],
    sports: ["avatar-dad-sports", "avatar-mom-sports", "avatar-girl-sports", "avatar-boy-sports"],
    default: ["avatar-dad", "avatar-mom", "avatar-girl", "avatar-boy"],
};

const About = () => {
    const { theme } = useContext(SiteContext);
    const story = aboutStories[theme] || aboutStories.developer;

    return (
        <Section id="about" title="How I Got Here">
            <div className="type-body flex flex-col gap-4">
                {story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
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
