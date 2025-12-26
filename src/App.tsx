import { Route, Switch } from "wouter";
import { motion } from "framer-motion";
import { LucidePhone, LucideMail, LucideMapPin, LucideChevronRight } from "lucide-react";

// مكون الهيدر (Navbar)
const Navbar = () => (
  <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-black/20 backdrop-blur-sm text-white border-b border-white/10">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <button className="bg-[#8B0000] px-6 py-2 rounded-sm font-bold text-sm hover:bg-red-700 transition-all shadow-lg">
        تواصل معنا
      </button>
    </motion.div>

    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:text-red-500 transition-colors">اتصل بنا</a>
      <a href="#" className="hover:text-red-500 transition-colors">الخدمات</a>
      <a href="#" className="hover:text-red-500 transition-colors">المنتجات</a>
      <a href="#" className="hover:text-red-500 transition-colors">عن الشركة</a>
      <a href="#" className="text-red-600 border-b-2 border-red-600">الرئيسية</a>
    </div>

    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-right flex items-center gap-3"
    >
      <div>
        <h1 className="text-xl font-black tracking-tighter leading-none">تاج الجديدة</h1>
        <p className="text-[10px] opacity-70 text-red-500 font-bold tracking-widest uppercase">Taj Al-Jadida</p>
      </div>
      <div className="bg-red-800 w-10 h-10 flex items-center justify-center font-bold rounded-sm text-xl shadow-inner">
        ت
      </div>
    </motion.div>
  </nav>
);

// مكون القسم الرئيسي (Hero Section)
const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-end pr-[10%] bg-black overflow-hidden">
    {/* تأثيرات الخلفية */}
    <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
    <motion.div 
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 grayscale bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590564310418-66304f55a2c2?q=80&w=2070')" }}
    />

    {/* المحتوى النصي */}
    <div className="relative z-20 text-right max-w-3xl text-white">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        className="h-1 bg-red-700 mb-8 ml-auto"
      />
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] drop-shadow-2xl"
      >
        شركة تاج الجديدة <br />
        <span className="text-red-700">للطلاء</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl opacity-80 mb-12 font-light leading-relaxed max-w-xl ml-auto"
      >
        رواد استيراد طلاء السيارات ومستلزماتها في ليبيا. خبرة تمتد لأكثر من 30 عاماً من الجودة والاحترافية.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 justify-end"
      >
        <button className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-sm font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2 group shadow-2xl">
          <LucideChevronRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
          منتجاتنا
        </button>
        <button className="border-2 border-white/30 hover:border-white hover:bg-white/5 text-white px-10 py-4 rounded-sm font-bold transition-all">
          من نحن
        </button>
      </motion.div>

      {/* معلومات التواصل السريعة */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex justify-end gap-10 opacity-50 text-sm"
      >
        <div className="flex items-center gap-2"><span>Tripoli, Libya</span> <LucideMapPin className="w-4 h-4 text-red-600" /></div>
        <div className="flex items-center gap-2"><span>info@tlcp.ly</span> <LucideMail className="w-4 h-4 text-red-600" /></div>
        <div className="flex items-center gap-2"><span>+218 XX XXX XXX</span> <LucidePhone className="w-4 h-4 text-red-600" /></div>
      </motion.div>
    </div>
  </div>
);

// المكون الرئيسي للتطبيق
export default function App() {
  return (
    <div className="font-sans antialiased bg-black min-h-screen selection:bg-red-800 selection:text-white">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Hero} />
          {/* يمكنك إضافة مسارات أخرى هنا مستقبلاً */}
          <Route>
            <div className="flex items-center justify-center min-h-screen text-white">
              404 | الصفحة غير موجودة
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
