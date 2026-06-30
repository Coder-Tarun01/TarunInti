import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import PageSeo from "@/components/seo/PageSeo";
import JsonLd from "@/components/seo/JsonLd";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import LazySection, {
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyContact,
  LazyFooter,
} from "@/components/LazySection";

const Index = () => {
  return (
    <>
      <PageSeo ogType="profile" />
      <JsonLd />

      <div className="min-h-screen bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <LazySection component={LazyAbout} minHeight="500px" />
          <LazySection component={LazySkills} minHeight="400px" />
          <LazySection component={LazyProjects} minHeight="600px" />
          <LazySection component={LazyContact} minHeight="700px" />
        </main>
        <LazySection component={LazyFooter} minHeight="120px" rootMargin="100px" />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
