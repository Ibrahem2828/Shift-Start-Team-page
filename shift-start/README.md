# Shift Start - موقع فريق التطوير

![Shift Start Banner](./public/banner.jpg)

## 🌟 نظرة عامة

شيفت ستارت هو موقع ويب احترافي لفريق تطوير متخصص في تقديم حلول تقنية مبتكرة. الموقع مصمم ليكون تطبيق صفحة واحدة (SPA) متعدد اللغات يدعم العربية والإنجليزية مع تصميم متجاوب وداعم لـ SEO.

## ✨ المميزات

### 🌐 دعم اللغات المتعددة
- دعم كامل للغة العربية والإنجليزية
- تبديل سلس بين اللغات
- دعم RTL/LTR
- خطوط محسنة لكل لغة

### 🎨 التصميم والواجهة
- تصميم حديث وأنيق
- تجربة مستخدم محسنة (UX)
- تصميم متجاوب لجميع الأجهزة
- رسوم متحركة سلسة
- وضع ليلي/نهاري

### 🚀 الأداء والتحسين
- تطبيق صفحة واحدة (SPA)
- تحميل مؤجل للمكونات
- محسن لمحركات البحث (SEO)
- صور محسنة
- كود مصغر

### 🛠️ التقنيات المستخدمة
- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة
- **Styled Components** - تنسيق المكونات
- **Framer Motion** - الرسوم المتحركة
- **React Router** - التنقل
- **React i18next** - دعم اللغات المتعددة
- **React Helmet** - إدارة HTML head للـ SEO

## 📁 هيكل المشروع

```
shift-start/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Footer/
│   │   └── SEO/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── Team/
│   │   └── Contact/
│   ├── styles/
│   │   ├── GlobalStyles.ts
│   │   └── theme.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── ar.json
│   │       └── en.json
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 🚀 البدء السريع

### المتطلبات المسبقة
- Node.js 16.0.0 أو أحدث
- npm 8.0.0 أو أحدث

### التثبيت

1. **استنساخ المستودع**
```bash
git clone https://github.com/shiftstart/website.git
cd shift-start
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **تشغيل الخادم المحلي**
```bash
npm start
```

4. **افتح المتصفح**
```
http://localhost:3000
```

### الأوامر المتاحة

```bash
# تشغيل التطوير
npm start

# إنشاء نسخة الإنتاج
npm build

# تشغيل الاختبارات
npm test

# فحص الكود
npm run lint

# إصلاح مشاكل الكود
npm run lint:fix

# فحص الأنواع
npm run type-check
```

## 🎯 المكونات الرئيسية

### Header
- شريط التنقل المثبت
- تبديل اللغة
- تبديل الوضع الليلي/النهاري
- قائمة محمولة متجاوبة

### Hero Section
- عرض رئيسي جذاب
- رسوم متحركة
- أزرار دعوة للعمل
- إحصائيات الشركة

### Footer
- معلومات الاتصال
- روابط التواصل الاجتماعي
- نشرة إخبارية
- روابط سريعة

### SEO Component
- إدارة meta tags
- Open Graph tags
- Twitter Cards
- Structured Data
- دعم اللغات المتعددة

## 🌍 إدارة اللغات

### إضافة ترجمة جديدة
1. إضافة ملف JSON جديد في `src/i18n/locales/`
2. تحديث ملف `src/i18n/index.ts`
3. إضافة الخيار في Header component

### تحديث الترجمات
قم بتحرير الملفات في `src/i18n/locales/`:
- `ar.json` - النصوص العربية
- `en.json` - النصوص الإنجليزية

## 📱 التصميم المتجاوب

الموقع محسن للعمل على:
- 📱 الهواتف المحمولة (320px+)
- 📟 الأجهزة اللوحية (768px+)
- 💻 أجهزة الحاسوب (1024px+)
- 🖥️ الشاشات الكبيرة (1440px+)

## 🔍 تحسين محركات البحث (SEO)

### المميزات المدمجة
- Meta tags محسنة
- Open Graph وTwitter Cards
- Structured Data (JSON-LD)
- Sitemap تلقائي
- روابط canonical
- دعم اللغات المتعددة (hreflang)

### أفضل الممارسات
- عناوين وصفية
- وصف محتوى مفيد
- كلمات مفتاحية مناسبة
- صور محسنة مع alt text
- URLs صديقة لمحركات البحث

## 🚀 النشر

### إنشاء نسخة الإنتاج
```bash
npm run build
```

### متغيرات البيئة
قم بإنشاء ملف `.env` في الجذر:
```
REACT_APP_SITE_URL=https://shiftstart.dev
```

### خيارات النشر
- **Vercel** - مستحسن للمشاريع React
- **Netlify** - سهولة في الاستخدام
- **GitHub Pages** - مجاني للمشاريع العامة
- **AWS S3 + CloudFront** - للمشاريع الكبيرة

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع هذه الخطوات:

1. Fork المشروع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add some amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 الاتصال

- **الموقع**: https://shiftstart.dev
- **البريد الإلكتروني**: info@shiftstart.dev
- **LinkedIn**: https://linkedin.com/company/shiftstart
- **GitHub**: https://github.com/shiftstart

## 🙏 شكر وتقدير

- [React](https://reactjs.org/) - مكتبة واجهة المستخدم
- [Styled Components](https://styled-components.com/) - CSS-in-JS
- [Framer Motion](https://www.framer.com/motion/) - الرسوم المتحركة
- [React Icons](https://react-icons.github.io/react-icons/) - الأيقونات
- [Google Fonts](https://fonts.google.com/) - الخطوط

---

**صنع بـ ❤️ من قبل فريق شيفت ستارت**
