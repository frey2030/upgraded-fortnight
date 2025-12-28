export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-paint-workshop.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-right max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-6">شركة تاج الجديدة</h1>
        <p className="text-lg mb-8">
          أكثر من ثلاثة عقود من الخبرة في توفير أفضل طلاء ومستلزمات السيارات في ليبيا
        </p>

        <div className="flex gap-4 justify-end">
          <button className="bg-[#7b0f24] px-6 py-3 rounded">
            استكشف منتجاتنا
          </button>
          <button className="border border-white px-6 py-3 rounded">
            عن الشركة
          </button>
        </div>
      </div>
    </section>
  );
}

