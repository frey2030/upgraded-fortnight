export default function StatsBar() {
  return (
    <section className="w-full bg-[#3b0a1a] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        <div>
          <div className="text-3xl font-bold text-[#7b0f24]">100%</div>
          <div>جودة مضمونة</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#7b0f24]">24/7</div>
          <div>خدمة العملاء</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#7b0f24]">+500</div>
          <div>منتج متاح</div>
        </div>
      </div>
    </section>
  );
}

