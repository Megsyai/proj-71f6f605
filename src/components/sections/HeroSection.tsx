import { motion } from "framer-motion";
import { fadeUp, easeOutExpo } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            صوت القرن العشرين
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.1 }}
        >
          أم كلثوم
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.2 }}
        >
          الكوكب الشرق
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.3 }}
        >
          أيقونة الفن العربي التي أذهلت العالم بصوتها العذب وصلاتها الطويلة، لُقبت بـ"كوكب الشرق" و"سيدة الغناء العربي"، وما زالت أغانيها تصدح في قلوب الملايين عبر الأجيال.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.45 }}
        >
          <Button size="lg" className="h-12 px-6 text-base rounded-full gap-2" asChild>
            <a href="/works">
              <Play className="w-4 h-4" />
              استكشف أعمالها
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6 text-base rounded-full" asChild>
            <a href="/about">سيرتها الذاتية</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="#legacy"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs">اكتشف المزيد</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
