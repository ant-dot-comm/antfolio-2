import React, { useEffect, useId, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Native <dialog>: the browser handles the backdrop, focus trapping and Escape to close.
// Clicking the backdrop also closes it.
const Modal = ({ open, onClose, title, children }) => {
    const ref = useRef(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    return (
        <dialog
            ref={ref}
            aria-labelledby={titleId}
            onClose={onClose}
            onClick={(event) => event.target === ref.current && onClose()}
            className="w-[calc(100%-2rem)] max-w-2xl rounded-xl bg-theme-surface-raised p-0 text-theme-ink shadow-2xl backdrop:bg-gray-900/70"
        >
            <div className="p-6 sm:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <h2 id={titleId} className="type-h3">
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-1 text-theme-ink-muted hover:text-theme-ink"
                    >
                        <FontAwesomeIcon icon={{ prefix: "fas", iconName: "xmark" }} className="w-5 !h-5" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
