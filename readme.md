# Checkpoint 1: Semantik HTML Hesabatı

Bu hesabatda "NovaTech" layihəsinin ilkin mərhələsində görülən işlər, tətbiq olunmuş yanaşma, qarşılaşdığımız semantik HTML problemləri və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 1 tələblərinə uyğun olaraq, layihənin HTML strukturu standartlara və müasir semantik qaydalara uyğun olaraq tamamilə yenidən quruldu. Səhifənin skeletindəki qeyri-semantik (div-əsaslı) və əlçatanlıq (accessibility) cəhətdən zəif olan bütün elementlər düzəldildi:
*   Səhifəyə `<footer>` bölməsi əlavə edildi.
*   Bütün əsas bölmələr (Sections) üçün `id` atributları təyin edildi və naviqasiya menyusu ilə əlaqələndirildi.
*   Başlıq iyerarxiyası (`<h1>` - `<h2>`) və şəkillərin `alt` təsvirləri tənzimləndi.
*   Əlaqə forması üçün `<label>` və `<input>` teqləri əlaqələndirildi.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
Layihənin həm axtarış sistemləri (SEO), həm də ekran oxuyucuları (screen readers) üçün maksimum optimal olması üçün **Semantik HTML5 və Əlçatanlıq (Accessibility) prinsipləri** əsas götürüldü:
*   **Strukturun Bölünməsi:** Səhifənin yuxarı hissəsi `<header>`, əsas məzmunu `<main>` və alt hissəsi `<footer>` daxilinə yığıldı.
*   **Naviqasiya:** Siyahı elementlərinin (`<ul>`, `<li>`) və `<nav>` teqinin birgə istifadəsi ilə semantik menyu yaradıldı.
*   **İyerarxiya:** Səhifədə yalnız bir əsas başlıq (`<h1>`) saxlanıldı və digər bölmələr ardıcıl şəkildə `<h2>` və `<h3>` teqləri ilə strukturlaşdırıldı.

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
İlkin HTML kodunun analizində aşağıdakı problemlər müəyyən olundu:
1.  **Footer Eksikliyi:** Səhifənin sonunu bildiriş və müəllif hüquqları ilə tamamlayan heç bir `<footer>` teqi yox idi.
2.  **Başlıq İyerarxiyasının Pozulması:** Statistika kartlarında olan "150+" və "99%" rəqəmləri üçün `<h2>` başlıq teqlərindən istifadə olunmuşdu ki, bu da HTML strukturunu pozurdu (çünki bu rəqəmlər başlıq deyil, sadəcə məlumat göstəriciləridir). Həmçinin, Qalereya bölməsinin heç bir başlığı yox idi.
3.  **İşləməyən Naviqasiya Linkləri:** Naviqasiya linklərində (`href="#haqqımızda"`) Azərbaycan şriftləri istifadə olunmuşdu və bölmələrin (Sections) özlərində uyğun `id` yox idi. Bu, səhifədaxili keçidi (scroll) qeyri-mümkün edirdi.
4.  **Əlçatanlıq (Form və Şəkil) Problemləri:** Form etiketləri (`<label>`) və daxiletmə sahələri (`<input>`) bir-birinə bağlı deyildi (`for` və `id` boş idi). Qalereyadakı şəkillərin `alt` atributları boş idi, bu da görmə məhdudiyyətli istifadəçilər üçün səhifəni anlaşılmaz edirdi.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  Səhifənin ən sonuna müəllif hüquqlarını əks etdirən **`<footer>`** elementi əlavə etdik.
2.  Statistika kartlarında `<h2>` yerinə CSS ilə dizayn edilə bilən **`<span>`** (`class="stat-number"`) elementindən istifadə etdik. Qalereya bölməsinə isə düzgün struktur üçün `<h2>Bizim Qalereya</h2>` başlığını əlavə etdik.
3.  Bölmələri ingilis şriftlərinə uyğun **`id="haqqimizda"`**, **`id="galereya"`**, **`id="elaqe"`** ilə işarələdik və menyudakı keçidləri (`href`) bunlara uyğunlaşdırdıq.
4.  Form elementlərinin hər birinə unikal `id` verdik və label teqlərinin `for` atributlarını bu `id`-lərlə eşləşdirdik (məsələn: `for="fullname"` və `id="fullname"`). Şəkillərə isə məzmunu təsvir edən **`alt`** mətnləri yazdıq.

---

# Checkpoint 2: Mobil-ilk (Mobile-First) Responsive Dizayn Hesabatı

Bu hesabatda "NovaTech" layihəsinin ikinci mərhələsində (Checkpoint 2) görülən işlər, tətbiq olunmuş yanaşma, istifadə olunan BEM CSS strukturu, qarşılaşdığımız responsivlik problemləri və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 2 tələblərinə uyğun olaraq, səhifənin dizaynı tamamilə mobil-ilk (mobile-first) və responsiv şəkildə quruldu. Bütün ekran ölçülərinə (mobil, planşet, desktop) uyğunlaşma təmin edildi:
*   **BEM Metodologiyası:** CSS faylındakı bütün siniflər BEM (Block, Element, Modifier) standartlarına uyğun olaraq yenidən yazıldı.
*   **Responsive Grid & Flexbox:** Səhifənin bütün bölmələri (Hero, Haqqımızda statistika kartları, Qalereya şəkilləri, Əlaqə forması və Footer) müxtəlif ekran breakpointlərinə uyğun olaraq çevik şəkildə strukturlaşdırıldı.
*   **Footer Yenilənməsi:** Footer bölməsinin rəngləri videoya uyğun olaraq tünd fon (`#0f172a` Slate 900) və açıq boz mətn (`#94a3b8` Slate 400) olaraq yeniləndi.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
Müasir frontend dizayn standartlarına cavab vermək üçün aşağıdakı yanaşmalardan istifadə olundu:
*   **Mobile-First CSS:** Bütün CSS kodları ilk olaraq mobil ekranlar üçün yazıldı və daha böyük ekranlar üçün `@media` sorğuları (Media Queries) vasitəsilə tədricən genişləndirildi.
*   **Breakpoint İyerarxiyası:** 3 əsas breakpoint təyin olundu:
    1.  **Mobil (Default):** `< 768px` ölçülü ekranlar.
    2.  **Planşet (Tablet):** `min-width: 768px` olan ekranlar.
    3.  **Masaüstü (Desktop):** `min-width: 1024px` olan ekranlar.
*   **BEM Strukturlaşdırması:** Bütün elementlər `.blok__element--modifier` formatında siniflərlə işarələndi. Məsələn:
    *   `.header` (Blok)
    *   `.header__toggle` (Element)
    *   `.header__toggle--active` (Modifier)

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
1.  **Grid faiz hesablama çətinlikləri:** Flexbox ilə en ölçülərini faizlərlə vermək müxtəlif mobil ekranlarda sürüşmələrə səbəb olurdu.
2.  **Mobil menyunun desktopda qalması:** Mobil görünüşdə açılmış menyu paneli ekran böyüdüldükdə (məsələn, planşet və ya desktop rejiminə keçdikdə) ekranın sağ tərəfində sabit (fixed) olaraq qalır və ekranı örtürdü.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **Grid Layout tətbiqi:** `.gallery__grid` və `.about__container` bölmələrində faiz hesablama yerinə CSS Grid (`grid-template-columns`) tətbiq olundu. Bu, responsive keçidləri tamamilə stabil etdi.
2.  **Desktop Reseti:** `styles.css` faylında `min-width: 768px` media sorğusunun daxilində mobil menyu drawer-i, overlay və hamburger düyməsi üçün bütün üslublar sıfırlandı (`transform: none`, `position: static`, `display: none` və s.).
3.  **Z-Index İyerarxiyası:** `.header` üçün `z-index: 100`, mobil drawer `.header__nav` üçün `z-index: 1000` və hamburger toggler `.header__toggle` üçün `z-index: 1100` təyin olundu. Beləliklə, düymə və menyu həmişə bütün səhifənin ən üstündə düzgün şəkildə nümayiş olunur.

---

# Checkpoint 3: Vanilla JS ilə İnteraktiv Elementlər

Bu hesabatda "NovaTech" layihəsinin üçüncü mərhələsində (Checkpoint 3) görülən işlər, tətbiq olunmuş yanaşma, qarşılaşdığımız problemlər və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 3 tələblərinə uyğun olaraq, xalis JavaScript (Vanilla JS) ilə aşağıdakı interaktiv elementlər tətbiq olundu:
*   **Mobil Menyu Toggle:** Hamburger düyməsi (`header__toggle`) kliklənəndə mobil naviqasiya paneli (drawer) sağdan sürüşərək açılır. Yenidən klikləndiqdə bağlanır.
*   **Hamburger → X Animasiyası:** Menyu açıq olduqda hamburger xətlərinin ikisi `rotate(45deg)` və `rotate(-45deg)` ilə X şəklinə çevrilir, ortadakı isə gizlənir.
*   **Overlay ilə Bağlama:** Menyu açıq olduqda arxa fona (overlay) klikləmək menyunu avtomatik bağlayır.
*   **Link klikləndikdə Bağlama:** Naviqasiya linklərindən birinə klikləndikdə menyu bağlanır və `html { scroll-behavior: smooth }` sayəsində hədəf bölməyə rəvan sürüşmə (smooth scroll) həyata keçirilir.
*   **Klaviatura Dəstəyi (Accessibility):** `Escape` düyməsinə basıldıqda menyu bağlanır və fokus hamburger düyməsinə qaytarılır.
*   **Resize Hadisəsi:** Pəncərə ölçüsü `768px`-dən böyük olan ölçüyə keçdikdə, əgər mobil menyu açıqdırsa, avtomatik bağlanır.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
*   **`DOMContentLoaded`:** Bütün JS məntiqi `document.addEventListener('DOMContentLoaded', ...)` içərisindən başladılır ki, HTML tam yüklənmədən element axtarışı aparılmasın.
*   **Modul Funksiyaları:** `openMenu()`, `closeMenu()` və `toggleMenu()` ayrı funksiyalar kimi yazıldı ki, hər event listener eyni məntiqi paylaşsın, kod təkrarlanmasın.
*   **`aria-expanded` Atributu:** Menyu açıldıqda `aria-expanded="true"`, bağlandıqda `aria-expanded="false"` dinamik olaraq yenilənir — ekran oxuyucuları üçün əlçatanlığı təmin edir.
*   **Body Scroll Lock:** Menyu açıq olduqda `document.body.style.overflow = 'hidden'` ilə arxa fonun sürüşməsi dondurulur, bağlandıqda açılır.
*   **CSS Class Toggle:** JS birbaşa DOM-u dəyişmir; `.header__nav--open`, `.header__toggle--active`, `.header__overlay--visible` siniflərini əlavə/silir — bütün vizual keçidlər CSS tərəfindən idarə olunur.

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
1.  **Logo Toqquşması:** Mobil menyu açıldıqda "NovaTech" loqosu `z-index: 1100` ilə menyu panelinin üzərinə çıxırdı.
2.  **Scroll Kilidi Yenilənməməsi:** Resize hadisəsindən sonra `body.style.overflow` `'hidden'` olaraq qalırdı ki, bu da istifadəçinin səhifəni sürüşdürməsinə mane olurdu.
3.  **ESC Düyməsi Fokus İtirilməsi:** Menyu ESC ilə bağlandıqdan sonra fokus itirilirdi, istifadəçi klaviatura ilə davam edə bilmirdi.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **Logo Z-Index Silindi:** `.header__logo` sinfindən `z-index: 1100` dəyəri silindi. Artıq loqo menyu panelinin arxasında qalır.
2.  **`closeMenu()` Mərkəzləşdirildi:** `closeMenu()` funksiyası bütün bağlama ssenarilərini (overlay klik, link klik, ESC, resize) əhatə edir və hər dəfə `document.body.style.overflow = ''` çağırılır.
3.  **`menuToggle.focus()`:** ESC basıldıqdan sonra `closeMenu()` çağırılır və ardınca `menuToggle.focus()` ilə fokus düyməyə qaytarılır.
