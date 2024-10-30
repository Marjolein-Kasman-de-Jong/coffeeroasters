import { useLayoutEffect } from "react";

const useScrollToTop = () => {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
}

export default useScrollToTop;