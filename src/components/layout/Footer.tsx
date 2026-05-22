import { Music, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Music className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-base font-semibold text-foreground">أم كلثوم</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              موقع تذكاري يحتفي بإرث السيدة أم كلثوم، صوت القرن العشرين وملكة الأغنية العربية.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">التنقل</h4>
            <ul className="space-y-2">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "سيرتها", href: "/about" },
                { label: "أعمالها", href: "/works" },
                { label: "معرض الصور", href: "/gallery" },
                { label: "أقوالها", href: "/quotes" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">مصادر</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              المعلومات والصور مستقاة من مصادر موثوقة عن تاريخ الفن العربي وسيرة أم كلثوم.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            جميع الحقوق محفوظة {year}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>صُنع بحب</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>لأم كلثوم</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
