import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Linkedin, Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the generic GalleryItem type matching prompt spec
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

// Define the TestimonialItem type for client reviews
export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyOrProject: string;
  photoUrl: string;
  quote: string;
  linkedInUrl?: string;
  rating?: number;
  badge?: string;
}

// Define props for CircularGallery component
export interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items?: GalleryItem[];
  testimonials?: TestimonialItem[];
  radius?: number;
  autoRotateSpeed?: number;
  enableControls?: boolean;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      testimonials,
      className,
      radius = 320,
      autoRotateSpeed = 0,
      enableControls = true,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startRotation = useRef(0);

    // Determine dataset
    const isTestimonialMode = Boolean(testimonials && testimonials.length > 0);
    const totalItems = isTestimonialMode ? testimonials!.length : items ? items.length : 0;

    // Wheel listener: Trapped ONLY on desktop (window.innerWidth >= 640).
    // On mobile (< 640px), wheel/scroll interception is completely disabled so mobile page scrolling works 100% naturally.
    useEffect(() => {
      const el = galleryRef.current;
      if (!el) return;

      const handleWheelNative = (e: WheelEvent) => {
        if (window.innerWidth < 640) return; // Disable scroll rotation on mobile
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY || e.deltaX;
        setRotation((prev) => prev - delta * 0.25);
      };

      el.addEventListener('wheel', handleWheelNative, { passive: false });
      return () => {
        el.removeEventListener('wheel', handleWheelNative);
      };
    }, []);

    // Optional auto-rotation loop
    useEffect(() => {
      if (!autoRotateSpeed || autoRotateSpeed === 0) return;

      const autoRotate = () => {
        if (!isHovered && !isDragging.current) {
          setRotation((prev) => (prev + autoRotateSpeed) % 360);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isHovered, autoRotateSpeed]);

    if (totalItems === 0) return null;

    const anglePerItem = 360 / totalItems;

    // Active front card index calculation
    const normalizedCurrentRotation = ((-rotation % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedCurrentRotation / anglePerItem) % totalItems;

    // Navigation Controls
    const rotateLeft = () => {
      setRotation((prev) => prev + anglePerItem);
    };

    const rotateRight = () => {
      setRotation((prev) => prev - anglePerItem);
    };

    const jumpToIndex = (index: number) => {
      const targetAngle = -index * anglePerItem;
      setRotation(targetAngle);
    };

    // Dragging Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startRotation.current = rotation;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - startX.current;
      setRotation(startRotation.current + deltaX * 0.4);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Touch Handlers for Mobile Dragging
    const handleTouchStart = (e: React.TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      startRotation.current = rotation;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.touches[0].clientX - startX.current;
      setRotation(startRotation.current + deltaX * 0.4);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    return (
      <div className="relative w-full flex flex-col items-center justify-center select-none py-2">
        {/* Mobile-Only Side Navigation Buttons (Vertically Centered at Card Level) */}
        {enableControls && (
          <>
            <button
              onClick={rotateLeft}
              aria-label="Previous testimonial"
              className="sm:hidden absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full border border-primary/40 bg-slate-950/90 hover:bg-primary text-primary hover:text-white flex items-center justify-center backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.6)] active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={rotateRight}
              aria-label="Next testimonial"
              className="sm:hidden absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full border border-primary/40 bg-slate-950/90 hover:bg-primary text-primary hover:text-white flex items-center justify-center backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.6)] active:scale-95 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Main 3D Stage Container */}
        <div
          ref={(node) => {
            galleryRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="region"
          aria-label="3D Circular Gallery Stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            isDragging.current = false;
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={cn(
            "relative w-full h-[380px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden",
            className
          )}
          style={{ perspective: '1600px' }}
          {...props}
        >
          <div
            className="relative w-full h-full"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transformStyle: 'preserve-3d',
              transition: isDragging.current ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {isTestimonialMode
              ? testimonials!.map((testi, i) => {
                  const itemAngle = i * anglePerItem;
                  const currentModRotation = rotation % 360;
                  const relativeAngle = (itemAngle + currentModRotation + 360) % 360;
                  const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);

                  const isFacingBack = normalizedAngle > 88;
                  const opacity = isFacingBack
                    ? 0
                    : Math.max(0.2, 1 - normalizedAngle / 110);
                  const isFrontCard = Math.abs(normalizedAngle) < 15;

                  return (
                    <div
                      key={testi.id}
                      role="group"
                      aria-label={`Testimonial from ${testi.clientName}`}
                      onClick={() => !isFrontCard && jumpToIndex(i)}
                      className={cn(
                        "absolute w-[215px] sm:w-[250px] h-[255px] sm:h-[285px] rounded-2xl transition-opacity duration-300",
                        !isFrontCard && "cursor-pointer"
                      )}
                      style={{
                        transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-107.5px',
                        marginTop: '-127.5px',
                        opacity: opacity,
                        pointerEvents: opacity < 0.15 ? 'none' : 'auto',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl border border-primary/30 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-black/98 p-3.5 sm:p-4 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.75)] flex flex-col justify-between overflow-hidden group hover:border-primary/60 transition-colors duration-300">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none group-hover:bg-primary/20 transition-all" />

                        {/* Top Header: Badge & Rating Stars */}
                        <div className="relative z-10 flex items-center justify-between gap-1 border-b border-white/10 pb-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-primary">
                            {testi.badge || "Client Review"}
                          </span>
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(testi.rating || 5)].map((_, idx) => (
                              <Star key={idx} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        {/* Middle Body: Quote Text */}
                        <div className="relative z-10 my-1.5 flex-1 overflow-hidden space-y-1">
                          <Quote className="w-3.5 h-3.5 text-primary/50 shrink-0 mb-0.5" />
                          <p className="text-[10px] sm:text-[11px] text-foreground/95 leading-snug font-sans italic line-clamp-5">
                            "{testi.quote}"
                          </p>
                        </div>

                        {/* Bottom Footer: Client Identity & LinkedIn CTA */}
                        <div className="relative z-10 border-t border-white/10 pt-2 flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-primary/40 shrink-0 bg-primary/20 shadow-inner">
                              <img
                                src={testi.photoUrl}
                                alt={testi.clientName}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-display text-[10px] sm:text-[11px] font-bold text-foreground truncate">
                                {testi.clientName}
                              </h4>
                              <p className="text-[8px] text-primary/90 font-mono truncate">
                                {testi.clientRole}
                              </p>
                            </div>
                          </div>

                          {testi.linkedInUrl && (
                            <a
                              href={testi.linkedInUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`LinkedIn profile of ${testi.clientName}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-0.5 text-[8px] font-bold text-primary hover:text-white bg-primary/10 hover:bg-primary border border-primary/30 px-1.5 py-0.5 rounded-md transition-all shrink-0 group/link shadow-sm"
                            >
                              <Linkedin className="w-2.5 h-2.5" />
                              <span>LinkedIn</span>
                              <ExternalLink className="w-2 h-2 opacity-70 group-hover/link:opacity-100" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              : items!.map((item, i) => {
                  const itemAngle = i * anglePerItem;
                  const currentModRotation = rotation % 360;
                  const relativeAngle = (itemAngle + currentModRotation + 360) % 360;
                  const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);

                  const isFacingBack = normalizedAngle > 88;
                  const opacity = isFacingBack
                    ? 0
                    : Math.max(0.2, 1 - normalizedAngle / 110);

                  return (
                    <div
                      key={item.photo.url}
                      role="group"
                      aria-label={item.common}
                      className="absolute w-[215px] h-[255px]"
                      style={{
                        transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-107.5px',
                        marginTop: '-127.5px',
                        opacity: opacity,
                        pointerEvents: opacity < 0.15 ? 'none' : 'auto',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden border border-border bg-card/70 backdrop-blur-lg">
                        <img
                          src={item.photo.url}
                          alt={item.photo.text}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: item.photo.pos || 'center' }}
                        />
                        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent text-white">
                          <h2 className="text-xs font-bold">{item.common}</h2>
                          <em className="text-[9px] italic opacity-80">{item.binomial}</em>
                          <p className="text-[8px] mt-0.5 opacity-70">Photo by: {item.photo.by}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>

        {/* Controls Bar inside the Box Container */}
        {enableControls && (
          <div className="flex flex-col items-center gap-1.5 mt-2 z-30">
            <div className="flex items-center gap-4">
              {/* Desktop-Only Left Arrow */}
              <button
                onClick={rotateLeft}
                aria-label="Previous testimonial"
                className="hidden sm:flex w-7 h-7 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary hover:text-white text-primary items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              >
                <ArrowLeft className="w-3 h-3" />
              </button>

              {/* Page Indicator Dots (Visible on both Mobile & Desktop) */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                {[...Array(totalItems)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToIndex(idx)}
                    aria-label={`Jump to testimonial ${idx + 1}`}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      idx === activeIndex
                        ? "w-3.5 bg-primary shadow-[0_0_6px_hsl(var(--primary))]"
                        : "bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>

              {/* Desktop-Only Right Arrow */}
              <button
                onClick={rotateRight}
                aria-label="Next testimonial"
                className="hidden sm:flex w-7 h-7 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary hover:text-white text-primary items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              >
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70">
              <span className="sm:hidden">Tap Arrows Left / Right</span>
              <span className="hidden sm:inline">Scroll Mouse Wheel Inside Box • Drag • Click Arrows</span>
            </span>
          </div>
        )}
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
