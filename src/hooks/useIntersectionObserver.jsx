import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Create new instance of IntersectionObserver
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

       // Stop observing once the element is visible
       if (entry.isIntersecting) {
        observer.disconnect();
      }
    }, options);

    // Start observing target element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;