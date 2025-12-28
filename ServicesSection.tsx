const services = [
  "طلاء السيارات",
  "مستلزمات الطلاء",
  "قطع الغيار",
  "استشارات فنية",
];

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-right text-2xl font-bold">
          خدماتنا
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border p-6 text-center shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
