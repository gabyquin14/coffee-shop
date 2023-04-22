import { useEffect } from "react";

const fadeUpObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add("faded");
        console.log(entry, "after intersection");
        fadeUpObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

const useFadeUpObserver = () => {
  useEffect(() => {
    document.querySelectorAll(".fade-up").forEach((el) => {
      fadeUpObserver.observe(el);
    });

    return () => {
      document.querySelectorAll(".fade-up").forEach((el) => {
        fadeUpObserver.unobserve(el);
      });
    };
  }, []);
};

export default useFadeUpObserver;
