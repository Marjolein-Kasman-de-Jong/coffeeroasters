import { useState, useEffect } from "react";

function useScreenWidth(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < breakpoint);
    }

    useEffect(() => {
        // Initial setting
        updateMedia();
        
        // Resize listener
        window.addEventListener("resize", updateMedia);

        // Cleanup
        return () => window.removeEventListener("resize", updateMedia);
    }, [breakpoint])

    return isMobile;
}

export default useScreenWidth;