import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { HomePage } from "./pages/HomePage";
import { StoryPage } from "./pages/StoryPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CraftPage } from "./pages/CraftPage";
import { ContactPage } from "./pages/ContactPage";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Check URL path
    const path = window.location.pathname;
    const pageMap: { [key: string]: string } = {
      "/": "home",
      "/story": "story",
      "/products": "products",
      "/craft": "craft",
      "/contact": "contact",
      "/privacy-policy": "privacy",
    };
    
    setCurrentPage(pageMap[path] || "home");

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(pageMap[path] || "home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Navigate function to be passed to Navigation
  const navigate = (page: string, path: string) => {
    setCurrentPage(page);
    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "privacy") {
    return <PrivacyPolicy />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} />;
      case "story":
        return <StoryPage />;
      case "products":
        return <ProductsPage />;
      case "craft":
        return <CraftPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} navigate={navigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}