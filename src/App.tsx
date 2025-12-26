import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";

// استيراد الصفحات بمساراتها المؤكدة
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// ملاحظة: قمنا بإزالة ThemeProvider مؤقتاً لضمان عمل البناء (Build) 
// حتى تتأكد من وجود المجلد والملف في GitHub بالاسم الصحيح
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* توجيه أي مسار غير معروف إلى صفحة 404 */}
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
