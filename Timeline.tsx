export default function Timeline() {
  const items = [
    { year: "1988", title: "التأسيس", desc: "بدأت الشركة مسيرتها في شارع عمر المختار" },
    { year: "1990s", title: "التوسع الأول", desc: "التوسع في سوق الثلاثاء" },
    { year: "2000s", title: "النمو المستمر", desc: "الانتقال لمنطقة الفلاح" },
    { year: "اليوم", title: "الحاضر", desc: "مقرنا في الدعوة الإسلامية" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-right mb-12">
          رحلتنا عبر الزمن
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 shadow text-right">
              <div className="text-[#7b0f24] font-bold mb-2">
                {item.year}
              </div>
              <div className="font-semibold mb-2">{item.title}</div>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

