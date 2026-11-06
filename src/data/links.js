const PUBLIC_URL = process.env.PUBLIC_URL;

export const links = {
    email: "antonicommodore@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonicommodore/",
    behance: "https://www.behance.net/antonicommodore",
    hotWheelsInstagram: "https://www.instagram.com/batdadmobiles/",
    resume: `${PUBLIC_URL}/Antoni-Commodore-resume.pdf`,
};

// `label` is the Teal title, matching each section's heading. Other themes swap it in the header.
export const navItems = [
    { id: "work", label: "Selected Work", href: "#work" },
    { id: "what-i-do", label: "What I Do", href: "#what-i-do" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "about", label: "How I Got Here", href: "#about" },
    { id: "contact", label: "Say Hello", href: "#contact" },
    { label: "Resume", href: links.resume, external: true },
];
