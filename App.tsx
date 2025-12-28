import { Switch, Route } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/services" component={Home} />
          <Route path="/products" component={Home} />
          <Route path="/contact" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}
