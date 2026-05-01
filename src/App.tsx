import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Index from "./pages/Index";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import MapPage from "./pages/Map";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { getSupportedLanguage } from "@/lib/site";

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      trackPageView(
        `${location.pathname}${location.search}${location.hash}`,
        getSupportedLanguage(i18n.resolvedLanguage || i18n.language),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, [i18n.language, i18n.resolvedLanguage, location.hash, location.pathname, location.search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
