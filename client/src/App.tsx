import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/mui/ThemeProvider";
import { DynamicThemeProvider } from "@/components/theme/DynamicThemeProvider";
import NotFound from "@/pages/not-found";
import StorybookPage from "@/pages/storybook";
import ShowcasePage from "@/pages/showcase";

function Router() {
  // Wouter expects the base path to not differ between dev and prod if the app is served from a subdirectory
  // We strip the trailing slash because wouter's base prop usually expects clean paths
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={ShowcasePage} />
        <Route path="/storybook" component={StorybookPage} />
        <Route path="/showcase" component={ShowcasePage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </DynamicThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
