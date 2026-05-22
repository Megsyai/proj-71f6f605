import { motion } from "framer-motion";
import { fadeUp, easeOutExpo } from "@/lib/motion";
import { MapPin, Briefcase, Award, Star } from "lucide-react";

const sections = [
  {
    year: "1904",
    title: "النشأة والطفولة",
    text: `وُلدت فتنة إبراهيم السيد البلتاجي في قرية طماي الزهايرة بمحافظة الدقهلية في مصر يوم 31 ديسمبر 1898. بسبب جمالها، لُقبت بأم كلثوم تيمناً باسم أختها الكبرى. نشأت في بيئة فقيرة ولكنها غنية بالتراث الشعري والحضور الصوفي والمَواويل والإنشاد الديني. كان أبوها قارئاً وصوتها يتردد في حفلات الزفاف ومجالس الذكر وفي مسقط رأسها منذ نعومة أظفارها.`
  },
  {
    year: "1919",
    title: "الظهور على مسارح القاهرة",
    text: `في عام 1919 وصلت أم كلثوم القاهرة، وغنت في مجالس الأعيان والأثرياء ثم على المسارح الكبيرة. بدأت تتعلم من كبار شيوخ الأداء كأبو العلا محمد وأحمد شفيق الكامل، ودرست تلاوة القرآن مع الشيخ أبو العلا محمد وأخذت دروساً في العزف والمقامات وأصول الغناء العربي. وسعت مداركها فتعلمت العزف على العود وقرأت الشعر العربي القديم والمعاصر.`
  },
  {
    year: "1926",
    title: "البدايات الإذاعية والجوائز الأولى",
    text: `في العشرينيات بدأت الإذاعة المصرية بث حفلاتها، وامتد صوتها ليشمل كل بيت عربي. كان يكتب لها قصائد من كبار الشعراء كأحمد شوقي وحافظ إبراهيم وأحمد رامي ومحمد عبد الوهاب الذي عزف لها ولحّن لها أغانٍ خالدة. حصدت جوائز عديدة ومنحتها المجالس الثقافية الجوائز الأولى للأداء والتجديد في موسيقى القرن العشرين.`
  },
  {
    year: "1952–1973",
    title: "عصر الذهب والمسارح العالمية",
    text: `من خمسينيات القرن العشرين حتى وفاتها عام 1973، كانت حفلاتها أهم حدث ثقافي في العالم العربي. أقامت حفلات في باريس ولندن وواشنطن وحولها الآلاف في كل حفل. أغانيها مثل "الأطلال" و"أنت عمري" و"سيرة الحب" و"أمل حياتي" و"فكروني" و"مددت يداي بالدعاء" أصبحت جواهر موسيقية لا تُنسى. كانت صلاة المغرب في أول يوم من كل شهر توقف مصرياً وراء المذياع والتليفزيون.`
  },
];

const stats = [
  { icon: Briefcase, value: "300+", label: "أغنية" },
  { icon: Star, value: "50+", label: "سنة مسيرة" },
  { icon: Award, value: "12", label: "جائزة عالمية" },
  { icon: MapPin, value: "100+", label: "مدينة زارتها" },
];

export default function About() {
  return (
    <div className="min-h-[100dvh] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            سيرة حياة
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            أم كلثوم
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            من قرية الصعيد إلى قلب كل عربي، رحلة فنانة لم يعرف العالم مثيلاً لها.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.1 * i }}
              className="text-center p-5 rounded-xl bg-card border border-border"
            >
              <s.icon className="w-5 h-5 mx-auto mb-2.5 text-muted-foreground" />
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.05 * idx }}
              className="flex gap-5"
            >
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {sec.year}
                </div>
                <div className="w-px h-full bg-border mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <span className="sm:hidden inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
                  {sec.year}
                </span>
                <h2 className="text-xl font-semibold tracking-tight text-foreground mb-2">
                  {sec.title}
                </h2>
                <p className="text-muted-foreground leading-[1.8] text-sm sm:text-base">
                  {sec.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
