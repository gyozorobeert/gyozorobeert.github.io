import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTheTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateVisibility = () => setIsVisible(window.scrollY > 0);

        updateVisibility();
        window.addEventListener("scroll", updateVisibility, { passive: true });
        return () => window.removeEventListener("scroll", updateVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-md bg-(--color-text-accent) text-(--color-bg) shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-text-accent)"
        >
            <FaArrowUp size={18} aria-hidden="true" />
        </button>
    );
}