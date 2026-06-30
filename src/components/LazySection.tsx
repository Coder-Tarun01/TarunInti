import { lazy, Suspense, useEffect, useRef, useState, type ComponentType, type LazyExoticComponent } from "react";

type LazySectionProps = {
  component: LazyExoticComponent<ComponentType>;
  minHeight?: string;
  rootMargin?: string;
};

const LazySection = ({
  component: Component,
  minHeight = "400px",
  rootMargin = "300px",
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
};

export const LazyAbout = lazy(() => import("@/components/portfolio/About"));
export const LazySkills = lazy(() => import("@/components/portfolio/Skills"));
export const LazyProjects = lazy(() => import("@/components/portfolio/Projects"));
export const LazyContact = lazy(() => import("@/components/portfolio/Contact"));
export const LazyFooter = lazy(() => import("@/components/portfolio/Footer"));

export default LazySection;
