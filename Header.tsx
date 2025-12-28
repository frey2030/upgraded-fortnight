export default function Header() {
  return (
    <header className="w-full bg-gradient-to-l from-[#3b0a1a] to-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        <button className="bg-[#7b0f24] px-6 py-2 rounded text-sm font-semibold">
          تواصل معنا
        </button>

        <nav className="flex gap-8 text-sm">
          <a href="#">الرئيسية</a>
          <a href="#">عن الشركة</a>
          <a href="#">المنتجات</a>
          <a href="#">الخدمات</a>
          <a href="#">اتصل بنا</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="bg-[#7b0f24] w-10 h-10 flex items-center justify-center font-bold">
            ت
          </div>
          <div className="text-right">
            <div className="font-bold">تاج الجديدة</div>
            <div className="text-xs opacity-70">طلاء ومستلزمات السيارات</div>
          </div>
        </div>

      </div>
    </header>
  );
}

