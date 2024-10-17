import { useCallback } from "react";

function useScrollToSection() {
    const scrollToSection = useCallback((id, offset) => {
        const element = document.getElementById(id);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }, [])

    return scrollToSection;
}

export default useScrollToSection;