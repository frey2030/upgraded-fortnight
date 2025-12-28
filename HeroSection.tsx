export default function HeroSection() {
  return (
    <section className="relative bg-black">
      <img
        src="/images/hero-paint-workshop.png"
        alt="Hero"
        className="h-[75vh] w-full object-cover opacity-80"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 text-right text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            خبرة تمتد لأكثر من 30 عامًا
          </h1>
          <p className="max-w-xl text-base md:text-lg">
            رواد في مجال طلاء ومستلزمات السيارات منذ عام 1988
          </p>
        </div>
      </div>
    </section>
  );
}
