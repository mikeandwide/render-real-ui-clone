
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShirtPage from "./pages/ShirtPage";
import TrouserPage from "./pages/TrouserPage";
import BlazerPage from "./pages/BlazerPage";
import TiePage from "./pages/TiePage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";

// Footer pages
import OrderTrackingPage from "./pages/OrderTrackingPage";
import ShippingPage from "./pages/ShippingPage";
import ReturnsPage from "./pages/ReturnsPage";
import ContactPage from "./pages/ContactPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import HistoryPage from "./pages/HistoryPage";
import WorldPage from "./pages/WorldPage";
import CareersPage from "./pages/CareersPage";
import LegalPage from "./pages/LegalPage";
import PrivacyPage from "./pages/PrivacyPage";
import SitemapPage from "./pages/SitemapPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <WishlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shirts" element={<ShirtPage />} />
              <Route path="/trousers" element={<TrouserPage />} />
              <Route path="/blazers" element={<BlazerPage />} />
              <Route path="/ties" element={<TiePage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              
              {/* Footer page routes */}
              <Route path="/order-tracking" element={<OrderTrackingPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product-info" element={<ProductInfoPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/world" element={<WorldPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
