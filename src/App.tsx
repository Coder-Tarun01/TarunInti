import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "@/lib/motion";
import Loader from "@/components/ui/Loader";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <HelmetProvider>
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen">
          <AnimatePresence mode="wait">
            {loading && (
              <Loader
                key="loader"
                onComplete={() => {
                  // small hold after the last piece lands, then fade to site
                  setTimeout(() => setLoading(false), 400);
                }}
              />
            )}
          </AnimatePresence>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
