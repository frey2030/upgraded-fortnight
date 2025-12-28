import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#4b0f1b] to-[#7a1d2b]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          تاج الجديدة
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-white hover:opacity-80">الرئيسية</Link>
          <Link href="/about" className="text-white hover:opacity-80">من نحن</Link>
          <Link href="/services" className="text-white hover:opacity-80">الخدمات</Link>
          <Link href="/products" className="text-white hover:opacity-80">المنتجات</Link>
          <Link href="/contact" className="text-white hover:opacity-80">تواصل معنا</Link>
        </nav>
      </div>
    </header>
  );
}
