import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Soft card: image (or icon, or a flat theme-color placeholder), title, gray body, optional external CTA.
// When there's a url the CTA link stretches over the whole card.
export function MediaCard({ className, children, image, imageAlt = "", imageClassName, icon, title, url, ctaLabel }) {
    const mediaCardClasses = classNames(
        className,
        "relative flex flex-col rounded-lg overflow-hidden bg-white",
        url && "transition-transform duration-300 motion-safe:sm:hover:scale-105 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-theme-primary-dark has-[:focus-visible]:ring-offset-2"
    );

    return (
        <article className={mediaCardClasses}>
            {image ? (
                <img src={image} alt={imageAlt} className={classNames("w-full h-48 object-cover", imageClassName)} />
            ) : (
                !icon && (
                    <div
                        aria-hidden="true"
                        className="w-full h-48 flex items-center justify-center px-4 bg-theme-primary-dark text-white text-xl font-semibold text-center"
                    >
                        {title}
                    </div>
                )
            )}

            {/* Content */}
            <div className="p-4 flex flex-col items-start bg-gradient-to-b from-gray-200 to-white grow">
                {icon && <img src={icon} alt="" className="w-8 h-8 mb-3" />}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                </h3>
                <div className="text-sm text-gray-600 grow">{children}</div>
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-theme-primary-dark after:absolute after:inset-0 focus-visible:shadow-none"
                    >
                        {ctaLabel}
                        <FontAwesomeIcon
                            icon={{ prefix: "fas", iconName: "arrow-up-right-from-square" }}
                            className="w-[12px] !h-[12px]"
                        />
                        <span className="sr-only">: {title} (opens in a new tab)</span>
                    </a>
                )}
            </div>
        </article>
    );
}
