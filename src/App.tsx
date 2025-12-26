import { Route, Switch } from "wouter";

// كود الصفحة الرئيسية مدمج مباشرة لحل مشكلة الملفات المفقودة
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
    <header className="text-center mb-8">
      <h1 className="text-5xl font-bold text-primary mb-4">شركة تاج الجديدة</h1>
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
