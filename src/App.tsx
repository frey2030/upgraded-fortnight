import { Route, Switch } from "wouter";

// الهيدر الاحترافي
const Navbar = () => (
  <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-black/20 backdrop-blur-sm text-white border-b border-white/10">
    <div><button className="bg-[#800020] px-6 py-2 rounded-sm font-bold text-sm hover:bg-red-800 transition-all">تواصل معنا</button></div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:text-red-500 transition-colors font-bold">اتصل بنا</a>
      <a href="#" className="hover:text-red-500 transition-colors font-bold">الخدمات</a>
      <a href="#" className="hover:text-red-500 transition-colors font-bold">المنتجات</a>
      <a href="#" className="hover:text-red-500 transition-colors font-bold">عن الشركة</a>
      <a href="#" className="text-red-600 border-b-2 border-red-600 font-bold">الرئيسية</a>
    </div>
    <div className="text-right flex items-center gap-3">
      <div>
        <h1 className="text-xl font-black tracking-tighter leading-none">تاج الجديدة</h1>
        <p className="text-[10px] opacity-70">طلاء ومستلزمات السيارات</p>
      </div>
      <div className="bg-red-700 w-8 h-8 flex items-center justify-center font-bold">ت</div>
    </div>
  </nav>
);

// قسم البطولية (Hero Section) مطابق للصورة رقم 2
const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-end pr-[10%] bg-black overflow-hidden antialiased">
    <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />
    <div 
      className="absolute inset-0 grayscale opacity-50 bg-cover bg-center transition-transform duration-[20s] hover:scale-110" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590564310418-66304f55a2c2?q=80&w=2070')" }}
    />

    <div className="relative z-20 text-right max-w-2xl text-white">
      <div className="w-16 h-1 bg-red-700 mb-6 ml-auto" />
      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] drop-shadow-2xl">
        شركة تاج الجديدة
      </h1>
      <p className="text-lg md:text-xl opacity-80 mb-10 font-medium leading-relaxed max-w-xl ml-auto">
        أكثر من ثلاثة عقود من الخبرة في توفير أفضل طلاء ومستلزمات السيارات في ليبيا
      </p>
      <div className="flex gap-4 justify-end">
        <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl">
          استكشف منتجاتنا
        </button>
        <button className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-sm font-bold transition-all shadow-lg">
          عن الشركة
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Switch>
        <Route path="/" component={Hero} />
        <Route>
          <div className="flex items-center justify-center min-h-screen">404 - الصفحة غير موجودة</div>
        </Route>
      </Switch>
    </div>
  );
}        شركة تاج الجديدة
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
