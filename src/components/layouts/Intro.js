import React, { useContext } from "react";

import SiteContext from "../../SiteContext";
import { taglines } from "../../data/themeCopy";

const Intro = () => {
    const { theme } = useContext(SiteContext);

    return (
        <div className="bg-theme-surface-muted px-4">
            <p className="type-lead max-w-2xl mx-auto py-14 text-center">
                {taglines[theme] || taglines.developer}
            </p>
        </div>
    );
};

export default Intro;
