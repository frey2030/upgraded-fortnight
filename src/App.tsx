import { Route, Switch } from "wouter";

// استيراد الصفحات من مجلد src مباشرة
import Home from "./Home"; 
import NotFound from "./NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
