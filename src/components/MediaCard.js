import { motion } from "framer-motion";
import classNames from "classnames";

export function MediaCard({ className, children, image, title, url }) {
    const mediaCardClasses = classNames(
        className,
        "relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 sm:hover:scale-105 bg-white"
    );

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={mediaCardClasses}
        >
            {/* Background Image */}
            <div
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url("${image}")` }}
            />

            {/* Content */}
            <div className="p-4 flex flex-col items-start bg-gradient-to-b from-gray-200 to-white grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">{children}</p>
            </div>
        </motion.a>
    );
}