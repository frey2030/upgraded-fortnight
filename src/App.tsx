import { Route, Switch } from "wouter";

// استيراد ديناميكي لتجاوز مشاكل المسارات الصلبة أثناء البناء
import Home from "./pages/Home"; 
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
