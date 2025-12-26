import { Route, Switch } from "wouter";

// كود الصفحة الرئيسية مدمج مباشرة لحل مشكلة الملفات المفقودة
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
    <header className="text-center mb-8">
      <h1 className="text-5xl font-bold timport { Route, Switch } from "wouter";

// المكون الجمالي للهيدر (Navigation)
const Navbar = () => (
  <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-transparent text-white border-b border-white/10">
    <div><button className="bg-primary px-6 py-2 rounded-sm font-bold text-sm">تواصل معنا</button></div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
      <a href="#" className="hover:text-primary transition-colors">الخدمات</a>
      <a href="#" className="hover:text-primary transition-colors">المنتجات</a>
      <a href="#" className="hover:text-primary transition-colors">عن الشركة</a>
      <a href="#" className="text-primary border-b-2 border-primary">الرئيسية</a>
    </div>
    <div className="text-right">
      <h1 className="text-xl font-black tracking-tighter">تاج الجديدة</h1>
      <p className="text-[10px] opacity-70">طلاء ومستلزمات السيارات</p>
    </div>
  </nav>
);

// مكون الـ Hero (التصميم الرئيسي في الصورة 2)
const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-end pr-[10%] bg-black overflow-hidden">
    {/* الخلفية - تأكد من رفع صورة مناسبة أو سنستخدم خلفية داكنة */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
    <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1590564310418-66304f55a2c2?q=80&w=2070')] bg-cover bg-center" />

    <div className="relative z-20 text-right max-w-2xl text-white">
      <div className="w-20 h-1 bg-primary mb-6 ml-auto" />
      <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
        شركة تاج الجديدة
      </h1>
      <p className="text-xl md:text-2xl opacity-90 mb-10 font-light leading-relaxed">
        أكثر من ثلاثة عقود من الخبرة في توفير أفضل طلاء ومستلزمات السيارات في ليبيا
      </p>
      <div className="flex gap-4 justify-end">
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:scale-105">
          استكشف منتجاتنا
        </button>
        <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold transition-all">
          عن الشركة
        </button>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="font-sans antialiased">
    <Navbar />
    <Switch>
      <Route path="/" component={Hero} />
      <Route>
        <div className="flex items-center justify-center min-h-screen text-2xl font-bold">404 - الصفحة غير موجودة</div>
      </Route>
    </Switch>
  </div>
);

export default App;ext-primary mb-4">شركة تاج الجديدة</h1>
      <p className="text-xl">لاستيراد طلاء ومستلزمات السيارات وقطع الغيار</p>
    </header>
    <main className="max-w-2xl text-center">
      <div className="card-elevated p-8 border-t-4 border-primary">
        <h2 className="text-2xl mb-4">أهلاً بكم في موقعنا</h2>
        <p className="mb-6">نحن نعمل حالياً على تحديث المحتوى لنوفر لكم أفضل تجربة تسوق لطلاء ومستلزمات السيارات في ليبيا.</p>
        <div className="button-industrial inline-block">ترقبوا الإطلاق الكامل قريباً</div>
      </div>
    </main>
    <footer className="mt-12 text-sm text-muted-foreground">
      خبرة تمتد لأكثر من ثلاثة عقود في السوق الليبي
    </footer>
  </div>
);

// كود صفحة الخطأ
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1>404 - الصفحة غير موجودة</h1>
  </div>
);

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
