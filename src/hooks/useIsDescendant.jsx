import { useEffect, useState, useRef } from "react";

function useIsDescendant(targetClass) {
  const elementRef = useRef(null);
  const [isDescendant, setIsDescendant] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const result = element.closest(`.${targetClass}`);
      setIsDescendant(!!result);
    }
  }, [targetClass])

  return [elementRef, isDescendant];
}

export default useIsDescendant;