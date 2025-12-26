import { Route, Switch } from "wouter";

// استيراد الصفحات بمسارات مباشرة وامتدادات واضحة
// ملاحظة: إذا فشل البناء، تأكد فوراً هل الملف في GitHub اسمه Home.tsx أم home.tsx
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* أي مسار غير معروف سيذهب لصفحة 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
