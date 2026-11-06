// Copy that changes with the theme. Keys match the theme classes in SiteContext.
// The developer (Teal) tagline is also the link preview text in public/index.html.

// Original wording: "Blending tech expertise with a flair for design, I enjoy bringing new ideas to life in the browser"
export const taglines = {
    developer:
        "Design and code from the same brain. The way products get built keeps changing, and I change with it, so what’s designed is still what ships.",
    batman:
        "Designer and developer by day, with a utility belt of side projects by night. Every tool in it started as “I wonder if I could build that.”",
    sports:
        "I draw up the plays, run them, and study the film. Thirteen seasons in, the game keeps evolving, and so does my playbook.",
};

// Section titles by section id. Teal (developer) uses each section's own `title`, so it isn't listed.
// The header nav uses these same titles.
export const sectionTitles = {
    batman: {
        work: "The Case Files",
        "what-i-do": "The Utility Belt",
        experience: "Patrol Log",
        about: "Origin Story",
        contact: "Light the Signal",
    },
    sports: {
        work: "Highlight Reel",
        "what-i-do": "The Playbook",
        experience: "Season by Season",
        about: "Off the Field",
        contact: "Get in the Game",
    },
};

// "What I Do" items, keyed by discipline id. Teal keeps the copy in Toolkit.js.
// title, statement, and detail replace that item's heading and description.
export const toolkitItems = {
    batman: {
        design: {
            title: "Blueprints",
            statement: "The plan has to make sense before the cape comes out.",
            detail: "UI/UX, design systems, visual direction, prototyping, accessibility.",
        },
        engineering: {
            title: "Armor",
            statement: "Frontend built strong, and flexible enough to grow with the team.",
            detail: "React, TypeScript, component architecture, testing, animation, performance.",
        },
        exploration: {
            title: "Gadgets",
            statement: "The side of the belt where the experiments live.",
            detail: "Three.js, Blender, D3, 3D scenes and creative coding.",
        },
        direction: {
            title: "The Batcomputer",
            statement: "It runs the searches. I still decide what leaves the cave.",
            detail: "Generative tools help me move faster, with guidance docs, focused tasks, and a real review before anything ships.",
        },
    },
    sports: {
        design: {
            title: "The Scheme",
            statement: "The route has to read clearly before it looks like a highlight.",
            detail: "UI/UX, design systems, visual direction, prototyping, accessibility.",
        },
        engineering: {
            title: "The Reps",
            statement: "Frontend that holds its assignment when the roster grows.",
            detail: "React, TypeScript, component architecture, testing, animation, performance.",
        },
        exploration: {
            title: "Trick Plays",
            statement: "Where the experiments get drawn up.",
            detail: "Three.js, Blender, D3, 3D scenes and creative coding.",
        },
        direction: {
            title: "Film Study",
            statement: "Generative tools help me watch more film. I still make the call.",
            detail: "I use them to explore ideas and move faster, with guidance docs, focused tasks, and a real review before anything gets called.",
        },
    },
};

// "How I Got Here" story, one paragraph per string. Teal keeps the original Star Wars version.
export const aboutStories = {
    developer: [
        "A long time ago in a galaxy far, far away...",
        "In a period of peace and freedom before the civil war with The Empire (aka kids). While studying the art of Film and Media Production at the Minnesota School of Business I discovered the magic of post-production tools such as Photoshop, Illustrator, After Effects, Final Cut Pro, etc. This unlocked a new level of creative midi-chlorians (IYKYK) inside me.",
        "After finishing my film studies, I decided to join the Graphic Design Jedi training program at St. Cloud State University. There I earned the title of Jedi Knight Designer.",
        "My first assignment as a JKD was with LiveEdit. There I worked with many clients around the galaxy designing and developing websites into the LiveEdit Aurora CMS. The success I achieved in this assignment led me to my next great adventure at the quickly growing start-up GoFundMe.",
        "In my time at GoFundMe I immersed myself in the powers of front-end development and graduated to Jedi Master after uniting my design and front-end abilities.",
        "Throughout my journeys around the creative galaxy I married the love of my life and she gave me the greatest title of Father. We have two sweet, kind, adorable, and chaotic little Sith Lords currently controlling most of our known galaxy.",
        "When the opportunity presents itself I enjoy spending time with my family, traveling, creating custom-designed Hotwheels, learning new technologies, golf, The Ohio State football, Formula 1 racing, and playing drums.",
    ],
    batman: [
        "Every hero has an origin story.",
        "Mine started at the Minnesota School of Business, studying Film and Media Production. That’s where I found my first gadgets: Photoshop, Illustrator, After Effects and Final Cut Pro. One look at what they could do, and I knew I needed a bigger utility belt.",
        "Bruce Wayne trained around the world. I trained at St. Cloud State University, and came back with a degree in Graphic Design.",
        "My first patrol was with LiveEdit, designing and building websites for clients across the city on the LiveEdit Aurora CMS. Word got around, and the signal lit up at a fast-growing startup called GoFundMe.",
        "At GoFundMe I went deep into front-end development and finally put design and code on the same belt. That’s when the cape really started to fit.",
        "Along the way I married the love of my life, and we became the original Dynamic Duo. Then came two Robins: sweet, kind, adorable, and gloriously chaotic. They pretty much run the Batcave now, and they’re the best sidekicks I could ask for.",
        "Off duty, you’ll find me with my family, traveling, customizing Hot Wheels (Batmobiles especially), learning new tech, golfing, cheering on Ohio State football, watching Formula 1, and playing drums.",
    ],
    sports: [
        "Let’s go to the tape.",
        "I started out in Film and Media Production at the Minnesota School of Business. That’s where I learned the fundamentals: Photoshop, Illustrator, After Effects and Final Cut Pro. Something clicked, and I knew I’d found my position.",
        "After film school, I signed with the Graphic Design program at St. Cloud State University, put in the reps, and graduated ready for the pros.",
        "My rookie contract was with LiveEdit, designing and building websites for clients all over the league on the LiveEdit Aurora CMS. A strong rookie season got me picked up by a fast-growing startup called GoFundMe.",
        "At GoFundMe I learned to play both sides of the ball, pairing design with front-end development. That’s where I became a two-way player.",
        "Off the field, I married the love of my life, the best teammate I’ve ever had. Now we’ve got two kids on the roster: sweet, kind, adorable, and full of energy. Most days they’re the ones calling the plays at home, and we wouldn’t trade them for anything.",
        "In the off-season you’ll find me with my family, traveling, customizing Hot Wheels, learning new tech, golfing, cheering on Ohio State football, following Formula 1, and keeping the beat on the drums.",
    ],
};
