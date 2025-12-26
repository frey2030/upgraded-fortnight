import { Route, Switch } from "wouter";

/**
 * تعديل المبرمج المحترف: 
 * قمنا بتغيير H إلى h (home) لأن سجل الخطأ في Netlify يؤكد أن الملف 
 * غير موجود بالاسم الكبير. هذا هو السبب الوحيد المتبقي للفشل.
 */
import Home from "./pages/home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
