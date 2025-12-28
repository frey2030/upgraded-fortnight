import { motion } from "framer-motion";
import { LucidePhone, LucideMail, LucideMapPin, LucideClock, LucideChevronLeft, LucideCheckCircle2, LucideLayoutGrid, LucideSettings, LucideShieldCheck } from "lucide-react";
import "./index.css"; // ضروري جداً لظهار التصميم

// 1. قسم الهيدر (Navbar) - مطابق للصورة 1
const Navbar = () => (
  <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-[5%] py-6 bg-gradient-to-b from-black/80 to-transparent">
    <div className="flex gap-6 text-white font-medium">
      <a href="#contact" className="hover:text-red-600 transition-colors">اتصل بنا</a>
      <a href="#services" className="hover:text-red-600 transition-colors">خدماتنا</a>
      <a href="#about" className="hover:text-red-600 transition-colors">من نحن</a>
    </div>
    <div className="text-2xl font-black text-white italic">
      TAJ <span className="text-red-700">AL JADIDAH</span>
    </div>
  </nav>
);

// 2. قسم البطولة (Hero) - مطابق للصورة 1 و 2
const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1590564310418-66304f55a2c2?q=80&w=2070" 
        className="w-full h-full object-cover opacity-50"
        alt="Workshop Technician"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-[5%] text-right text-white">
      <motion.h1 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-7xl md:text-9xl font-black mb-4 leading-none"
      >
        شركة <br/> <span className="text-red-700">تاج الجديدة</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl mb-10 max-w-2xl ml-auto opacity-90 leading-relaxed"
      >
        الرائدون في استيراد طلاء السيارات ومستلزماتها في ليبيا منذ عام 1988. خبرة تتوارثها الأجيال لتقديم أعلى معايير الجودة العالمية.
      </motion.p>
      
      <div className="flex gap-4 justify-end">
        <button className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 font-bold text-lg transition-all transform hover:scale-105">
          عرض المنتجات
        </button>
        <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold text-lg transition-all">
          من نحن
        </button>
      </div>
    </div>
  </section>
);

// 3. قسم التاريخ (Timeline) - مطابق للصورة 3
const Timeline = () => (
  <section id="about" className="py-24 bg-neutral-900 text-white">
    <div className="container mx-auto px-[5%]">
      <h2 className="text-4xl font-black mb-16 text-center italic">رحلتنا <span className="text-red-700">عبر الزمن</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { year: "1988", title: "التأسيس", desc: "بداية الانطلاق من طرابلس كأول الموردين لطلاء السيارات عالي الجودة." },
          { year: "2005", title: "التوسع الإقليمي", desc: "فتح فروع جديدة وتغطية كافة المدن الليبية بأحدث التقنيات." },
          { year: "2024", title: "الريادة الرقمية", desc: "إدخال أنظمة خلط الألوان المحوسبة والوكالات الحصرية العالمية." }
        ].map((item, i) => (
          <div key={i} className="bg-neutral-800 p-8 border-r-4 border-red-700 hover:bg-neutral-700 transition-colors">
            <div className="text-5xl font-black text-red-700 mb-4">{item.year}</div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="opacity-70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. قسم التواصل (Contact) - مطابق للصورة 8 و 9
const Contact = () => (
  <section id="contact" className="py-24 bg-black text-white relative">
    <div className="container mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="text-right order-2 lg:order-1">
        <h2 className="text-5xl font-black mb-8 italic">تواصل <span className="text-red-700">معنا</span></h2>
        <div className="space-y-6">
          <div className="flex items-center justify-end gap-4">
            <div>
              <p className="font-bold">العنوان</p>
              <p className="opacity-70 text-lg">طرابلس، ليبيا - طريق المطار</p>
            </div>
            <div className="bg-red-800 p-3 rounded-full"><LucideMapPin className="w-6 h-6"/></div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div>
              <p className="font-bold">الهاتف</p>
              <p className="opacity-70 text-lg" dir="ltr">+218 91 000 0000</p>
            </div>
            <div className="bg-red-800 p-3 rounded-full"><LucidePhone className="w-6 h-6"/></div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div>
              <p className="font-bold">ساعات العمل</p>
              <p className="opacity-70 text-lg">السبت - الخميس: 9:00 ص - 6:00 م</p>
            </div>
            <div className="bg-red-800 p-3 rounded-full"><LucideClock className="w-6 h-6"/></div>
          </div>
        </div>
      </div>

      <form className="bg-neutral-900 p-10 rounded-xl border border-neutral-800 order-1 lg:order-2">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="الاسم" className="bg-black border border-neutral-700 p-4 rounded text-right focus:border-red-700 outline-none" />
          <input type="email" placeholder="البريد الإلكتروني" className="bg-black border border-neutral-700 p-4 rounded text-right focus:border-red-700 outline-none" />
        </div>
        <textarea placeholder="رسالتك" rows={5} className="w-full bg-black border border-neutral-700 p-4 rounded text-right mb-4 focus:border-red-700 outline-none"></textarea>
        <button className="w-full bg-red-800 hover:bg-red-700 py-4 font-black text-xl transition-all">إرسال الرسالة</button>
      </form>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="font-['Cairo',_sans-serif] selection:bg-red-700 selection:text-white">
      <Navbar />
      <Hero />
      <Timeline />
      <Contact />
      <footer className="py-10 bg-black text-center border-t border-neutral-900 text-neutral-500">
        <p>© 2024 جميع الحقوق محفوظة لشركة تاج الجديدة</p>
      </footer>
    </main>
  );
}
