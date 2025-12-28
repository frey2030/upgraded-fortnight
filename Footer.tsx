export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-bold text-white">تاج الجديدة</h3>
            <p className="text-sm">
              خبرة منذ 1988 في طلاء ومستلزمات السيارات.
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">روابط</h4>
            <ul className="space-y-1 text-sm">
              <li>الرئيسية</li>
              <li>من نحن</li>
              <li>الخدمات</li>
              <li>تواصل معنا</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">تواصل</h4>
            <p className="text-sm">طرابلس – ليبيا</p>
            <p className="text-sm">info@taj.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-4 text-center text-xs">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
