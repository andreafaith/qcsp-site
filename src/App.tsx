
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import MemberDashboard from "./pages/MemberDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Events from "./pages/dashboard/Events";
import Resources from "./pages/dashboard/Resources";
import Courses from "./pages/dashboard/Courses";
import Community from "./pages/dashboard/Community";
import Notifications from "./pages/dashboard/Notifications";
import QuantumApps from "./pages/dashboard/QuantumApps";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import Support from "./pages/dashboard/Support";

const App = () => {
  // Create QueryClient instance inside the component
  const [queryClient] = React.useState(() => new QueryClient());
  
  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <TooltipProvider delayDuration={300}>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/member-dashboard" element={<MemberDashboard />} />
                <Route path="/member-dashboard/events" element={<Events />} />
                <Route path="/member-dashboard/resources" element={<Resources />} />
                <Route path="/member-dashboard/courses" element={<Courses />} />
                <Route path="/member-dashboard/community" element={<Community />} />
                <Route path="/member-dashboard/notifications" element={<Notifications />} />
                <Route path="/member-dashboard/quantum-apps" element={<QuantumApps />} />
                <Route path="/member-dashboard/profile" element={<Profile />} />
                <Route path="/member-dashboard/settings" element={<Settings />} />
                <Route path="/member-dashboard/support" element={<Support />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
