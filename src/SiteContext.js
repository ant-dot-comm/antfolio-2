import React, { createContext, useEffect, useState } from "react";

const SiteContext = createContext();

export function SiteProvider({ children }) {
    const storedTheme = localStorage.getItem("theme") || "developer";
    const [theme, setTheme] = useState(storedTheme);
    const [themeOptionsOpen, setThemeOptionsOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.remove("developer", "batman", "sports");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <SiteContext.Provider
            value={{
                theme,
                setTheme,
                themeOptionsOpen,
                setThemeOptionsOpen,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
}

export default SiteContext;
