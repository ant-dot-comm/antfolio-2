import React from "react";

import Section from "../Section";
import ProjectShowcase from "../ProjectShowcase";

const projectImage = (file, alt) => ({ src: `${process.env.PUBLIC_URL}/images/projects/${file}`, alt });

// Each project renders with its showcase layout (see ProjectShowcase.js for the image slots).
// `tools` are ids from src/data/toolLogos.js.
const projects = [
    {
        id: "f1nsight",
        title: "F1nsight",
        url: "https://www.f1nsight.com/",
        ctaLabel: "Open F1nsight",
        secondaryLinks: [{ label: "View on Behance", url: "https://www.behance.net/gallery/209342955/F1NSIGHTCOM" }],
        description:
            "Formula 1 data made explorable: leaderboards, lap times, tire strategies, fastest laps for every driver, and an interactive telemetry display.",
        // TODO: add tools used
        tools: [],
        showcase: {
            layout: "desktop",
            images: [
                projectImage("F1nsight-head-to-head.webp", "F1nsight head-to-head comparison of two Mercedes drivers' qualifying, race, wins and points"),
                projectImage("F1nsight-home.webp", "F1nsight home page with race results, teammate comparisons, race viewer and team history"),
                projectImage("F1nsight-race-viewer.webp", "F1nsight race viewer with Las Vegas Grand Prix results, a 3D track map and live telemetry"),
            ],
        },
    },
    {
        id: "leaguespot",
        title: "LeagueSpot",
        url: "https://www.behance.net/gallery/196153135/LeagueSpot",
        ctaLabel: "View on Behance",
        description:
            "A design system, product features, and a theming layer for an esports and gaming platform.",
        // TODO: add tools used
        tools: [],
        showcase: {
            layout: "desktop",
            images: [
                projectImage("LeagueSpot-chat.jpg", "LeagueSpot team chat screens with match threads and a message view"),
                projectImage("LeagueSpot.jpg", "LeagueSpot logo over screens from the platform's interface"),
                projectImage("LeagueSpot-forms.jpg", "LeagueSpot form components: checkboxes, dropdowns, a server picker and preferences"),
            ],
        },
    },
    {
        id: "lumtags",
        title: "LumTags",
        // TODO [VERIFY]: add link (CTA "See the product").
        url: null,
        ctaLabel: "See the product",
        description:
            "Purpose-built event photo software that gives every event its own branded gallery. Facial recognition sorts each photo into a private gallery for every attendee, and attendees can polish their shots with AI edits.",
        // TODO: add tools used
        tools: [],
        showcase: {
            layout: "desktop",
            images: [
                projectImage("LumTags-client-gallery.webp", "LumTags client gallery for Cvent @ IMEX 2025 with favorites, search and download"),
                projectImage("LumTags-admin.webp", "LumTags admin dashboard for an event, with uploaders, collections and photo counts"),
                projectImage("LumTags-attendee-gallery.webp", "LumTags attendee gallery showing one person's photos from Cvent @ IMEX 2025"),
            ],
        },
    },
    {
        id: "overtake-club",
        title: "Overtake Club",
        url: "https://www.behance.net/gallery/230667145/Overtake-Club-F1-Fantasy-Leauge",
        ctaLabel: "View on Behance",
        description:
            "A friendly fantasy F1 league where redemption begins behind the frontrunners. Pick drivers from the back half of the grid (P11–P22) and score points for every position they gain.",
        // TODO: add tools used
        tools: [],
        showcase: {
            layout: "mobile",
            images: [
                projectImage("OvertakeClub-race-picks.png", "Overtake Club race picks list for the 2026 British Grand Prix, choosing two drivers from P11 back"),
                projectImage("OvertakeClub-season-picks.png", "Overtake Club season picks for SlipstreamDream, with drivers, bonus picks and points for each Grand Prix"),
                projectImage("OvertakeClub-leaders.webp", "Overtake Club 2026 leaders podium and the league leaderboard"),
                projectImage("OvertakeClub-race-week.webp", "Overtake Club home screen with this race's picks, Carlos Sainz and Fernando Alonso, above the leaderboard"),
                projectImage("OvertakeClub-bonus-picks.png", "Overtake Club bonus picks: choose the driver who will lose the most positions and predict DNFs"),
            ],
        },
    },
    {
        id: "grails",
        title: "The Grails Collection",
        url: "http://thegrailsclub.com",
        ctaLabel: "Visit the site",
        secondaryLinks: [
            { label: "View on Behance", url: "https://www.behance.net/gallery/162768383/The-Grails-Club" },
            {
                label: "Hot Wheels collab",
                url: "https://www.behance.net/gallery/170076113/TheGrailsClub-x-Hot-Wheels-Collaboration-Concept",
            },
        ],
        description:
            "Custom cars inspired by my favorite sneakers, designed and rendered with Blender and Three.js.",
        tools: [],
        showcase: {
            layout: "desktop",
            images: [
                projectImage("Grails-hot-wheels-collab.webp", "Five Grails Club cars in Hot Wheels collab packaging, each on a display stand against a different colored backdrop"),
                projectImage("Grails-garage.webp", "The Grails Club garage: a lounge looking into a showroom of sneaker-inspired cars"),
                projectImage("Grails-six-wheeler.webp", "Render of a gray six-wheel truck with pink and purple accents"),
            ],
        },
    },
];

const Work = () => (
    <Section id="work" title="Selected Work" width="wide">
        {/* Large space between projects, split around a divider */}
        <div className="divide-y divide-gray-200">
            {projects.map((project) => (
                <div key={project.id} className="py-16 md:py-24 lg:py-[7.5rem] first:pt-0 last:pb-0">
                    <ProjectShowcase project={project} />
                </div>
            ))}
        </div>
    </Section>
);

export default Work;
