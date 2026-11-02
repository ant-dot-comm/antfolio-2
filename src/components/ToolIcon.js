import React from "react";

// Renders a tool logo from toolLogos: an SVG component (`icon`) or an image file (`src`)
const ToolIcon = ({ icon: Icon, src, className }) =>
    Icon ? (
        <Icon className={className} aria-hidden="true" />
    ) : src ? (
        <img src={src} alt="" className={`${className} object-contain`} />
    ) : null;

export default ToolIcon;
