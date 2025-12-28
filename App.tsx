import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";

export default function App() {
  return (
    <div dir="rtl">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <StatsBar />
      <Services />
    </div>
  );
}

