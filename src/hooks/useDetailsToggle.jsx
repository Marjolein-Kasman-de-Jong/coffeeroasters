import { useEffect, useState, useRef } from "react";

function useDetailsToggle() {
  const detailsRef = useRef(null);
  const [isOpen, toggleIsOpen] = useState(false);

  useEffect(() => {
    const detailsElement = detailsRef.current;

    const handleToggle = () => {
      toggleIsOpen(detailsElement.open);
    }

    if (detailsElement) {
      detailsElement.addEventListener("toggle", handleToggle);
    }

    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("toggle", handleToggle);
      }
    }
  }, [])

  return { detailsRef, isOpen };
}

export default useDetailsToggle;