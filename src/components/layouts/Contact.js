import React from "react";

import Section from "../Section";
import ButtonLink from "../ButtonLink";
import { links } from "../../data/links";

const Contact = () => (
    <Section id="contact" title="Say Hello" dark>
        <div className="flex flex-col items-start gap-6">
            <p className="type-body text-white">
                Whether it's a job, a collaboration, a design system that
                needs a champion, or a Formula 1 data nerd looking for a
                co-pilot, my inbox is open.
            </p>
            <div className="flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${links.email}`} variant="light">
                    Email me
                </ButtonLink>
                <ButtonLink href={links.linkedin} variant="lightOutline" external>
                    LinkedIn
                </ButtonLink>
                <ButtonLink href={links.behance} variant="lightOutline" external>
                    Behance
                </ButtonLink>
                <ButtonLink href={links.resume} variant="lightOutline" download>
                    Download resume
                </ButtonLink>
            </div>
        </div>
    </Section>
);

export default Contact;
