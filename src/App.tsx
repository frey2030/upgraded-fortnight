import { Route, Switch } from "wouter";

// استخدام @ يضمن الوصول للمجلد الصحيح بغض النظر عن المسارات النسبية
// جربنا Home (حرف كبير)، إذا فشل، فغالباً اسم ملفك هو home (حرف صغير)
import Home from "@/pages/Home"; 
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
