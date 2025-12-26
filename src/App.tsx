import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";

// استخدام @ للإشارة إلى مجلد src مباشرة لتجنب أخطاء المسارات
// تأكد أن الملف في GitHub اسمه Home.tsx (بـ H كبيرة)
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
