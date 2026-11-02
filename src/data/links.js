const PUBLIC_URL = process.env.PUBLIC_URL;

export const links = {
    email: "antonicommodore@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonicommodore/",
    behance: "https://www.behance.net/antonicommodore",
    hotWheelsInstagram: "https://www.instagram.com/batdadmobiles/",
    resume: `${PUBLIC_URL}/Antoni-Commodore-resume.pdf`,
};

export const navItems = [
    { label: "Work", href: "#work" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: links.resume, external: true },
];
