import { Route, Switch } from "wouter";

// إضافة الامتداد .tsx يحل مشكلة الـ ENOENT في بيئات Linux
// جربنا Home (حرف كبير)، إذا فشل، تأكد من اسم الملف في GitHub
import Home from "./pages/Home.tsx"; 
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
