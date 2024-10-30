import { useState, useEffect } from "react";

const useParentFlexDirection = (ref) => {
  const [isColumn, setIsColumn] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const parentElement = ref.current.parentElement;
      const parentStyle = window.getComputedStyle(parentElement);

      // Check if parent's flex-direction is column
      if (parentStyle.flexDirection === 'column') {
        setIsColumn(true);
      }
    }
  }, [ref])

  return isColumn;
}

export default useParentFlexDirection;