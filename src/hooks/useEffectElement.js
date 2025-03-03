import { useEffect, useRef } from 'react';

export function useEffectElement({ styles }) {
  const node = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('class', styles);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, [node, styles]);

  return {
    node,
  };
}