import { useState, useEffect } from "react";

function useScreenWidth(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < breakpoint);
    };

    useEffect(() => {
        // Initial check
        updateMedia();
        
        // Resize listener
        window.addEventListener("resize", updateMedia);

        return () => window.removeEventListener("resize", updateMedia);
    }, [breakpoint]);

    return isMobile;
}

export default useScreenWidth;