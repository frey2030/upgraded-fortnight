export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">

        <div className="text-right">
          <h2 className="text-4xl font-bold mb-6">
            رحلة من الاحترافية والموثوقية
          </h2>
          <p className="mb-6">
            على مدى أكثر من ثلاثة عقود، حافظت شركة تاج الجديدة على مكانتها
            كوجهة موثوقة للمهنيين وأصحاب ورش الطلاء.
          </p>
          <p>
            نواصل تطوير خدماتنا وتوسيع شبكة توريدنا لتلبية احتياجات السوق.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            <div className="border p-6">
              <div className="text-3xl font-bold text-[#7b0f24]">100%</div>
              <div className="text-sm">جودة مضمونة</div>
            </div>
            <div className="border p-6">
              <div className="text-3xl font-bold text-[#7b0f24]">4</div>
              <div className="text-sm">مواقع رئيسية</div>
            </div>
            <div className="border p-6">
              <div className="text-3xl font-bold text-[#7b0f24]">+30</div>
              <div className="text-sm">سنة خبرة</div>
            </div>
          </div>
        </div>

        <img
          src="/images/car-paint-detail.png"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}

