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
*   **Qalereyada Elementlərin Örtüşməsi (Overlapping & Z-Index):** Qalereya şəkilləri üçün sadə tor yerinə dinamik örtüşmə (overlapping) və z-index iyerarxiyası tətbiq olundu.
*   **BEM Metodologiyası:** CSS faylındakı bütün siniflər BEM (Block, Element, Modifier) standartlarına uyğun olaraq yenidən yazıldı.
*   **Responsive Grid & Flexbox:** Səhifənin bütün bölmələri (Hero, Haqqımızda statistika kartları, Qalereya şəkilləri, Əlaqə forması və Footer) müxtəlif ekran breakpointlərinə uyğun olaraq çevik şəkildə strukturlaşdırıldı.
*   **Footer Yenilənməsi:** Footer bölməsinin rəngləri videoya uyğun olaraq tünd fon (`#0f172a` Slate 900) və açıq boz mətn (`#94a3b8` Slate 400) olaraq yeniləndi.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
Müasir frontend dizayn standartlarına cavab vermək üçün aşağıdakı yanaşmalardan istifadə olundu:
*   **Mobile-First CSS:** Bütün CSS kodları ilk olaraq mobil ekranlar üçün yazıldı və daha böyük ekranlar üçün `@media` sorğuları (Media Queries) vasitəsilə tədricən genişləndirildi.
*   **Örtüşən Qalereya Məntiqi (Overlapping Gallery):** 
    *   `position: relative` və iyerarxik `z-index: 1, 2, 3` təyin olunaraq `.gallery__item` elementləri mənfi marjinlər (`margin-top`, `margin-left`) ilə bir-birinin üzərinə keçirildi.
    *   Mobil görünüşdə şaquli örtüşmə, planşetdə 12-kolonkalı tor kəsişməsi, desktopda isə üfüqi mənfi ofsetli pilləli dizayn quruldu.
    *   İstifadəçi şəklin üzərinə geldikdə (`:hover`) və ya fokuslandıqda (`:focus-within`), həmin element `z-index: 10` (desktopda `z-index: 20`) yüksəkliyinə qalxaraq `transform: translateY(...) scale(...)` effekti ilə ən önə çıxarılır.
*   **Breakpoint İyerarxiyası:** 3 əsas breakpoint təyin olundu:
    1.  **Mobil (Default):** `< 768px` ölçülü ekranlar.
    2.  **Planşet (Tablet):** `min-width: 768px` olan ekranlar.
    3.  **Masaüstü (Desktop):** `min-width: 1024px` olan ekranlar.
*   **BEM Strukturlaşdırması:** Bütün elementlər `.blok__element--modifier` formatında siniflərlə işarələndi. Məsələn:
    *   `.header` (Blok)
    *   `.header__toggle` (Element)
    *   `.header__toggle--active` (Modifier)
    *   `.gallery__item--1` (Modifier)

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
1.  **Grid faiz hesablama çətinlikləri:** Flexbox ilə en ölçülərini faizlərlə vermək müxtəlif mobil ekranlarda sürüşmələrə səbəb olurdu.
2.  **Qalereya elementlərinin sadə tor düzülüşü:** Sadə Grid istifadə edildikdə şəkillərin bir-birinin üzərinə keçməsi və laylı vizual iyerarxiya tam əks olunmurdu.
3.  **Mobil menyunun desktopda qalması:** Mobil görünüşdə açılmış menyu paneli ekran böyüdüldükdə (məsələn, planşet və ya desktop rejiminə keçdikdə) ekranın sağ tərəfində sabit (fixed) olaraq qalır və ekranı örtürdü.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **Qalereyada Elementlərin Örtüşməsi və Z-Index Tətbiqi:** `.gallery__item` strukturu yaradıldı, mənfi marjinlər və `z-index` iyerarxiyası tətbiq edildi. Hover və fokus hallarında şəkillər dinamik şəkildə ön qata çıxarıldı.
2.  **Grid Layout tətbiqi:** `.gallery__grid` və `.about__container` bölmələrində faiz hesablama yerinə CSS Grid və Flexbox overlapping tətbiq olundu. Bu, responsive keçidləri tamamilə stabil etdi.
3.  **Desktop Reseti:** `styles.css` faylında `min-width: 768px` media sorğusunun daxilində mobil menyu drawer-i, overlay və hamburger düyməsi üçün bütün üslublar sıfırlandı (`transform: none`, `position: static`, `display: none` və s.).
4.  **Z-Index İyerarxiyası:** `.header` üçün `z-index: 100`, mobil drawer `.header__nav` üçün `z-index: 1000` və hamburger toggler `.header__toggle` üçün `z-index: 1100` təyin olundu. Qalereya kartları üçün isə `z-index: 1..3` və hover üçün `z-index: 10 / 20` istifadə olundu. Beləliklə, naviqasiya və menyu həmişə səhifənin ən üstündə qorunur, qalereya kartları isə interaktiv şəkildə öz aralarında önə çıxır.

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

---

# Checkpoint 4: Əlaqə Formasının Müştəri Tərəfli Validasiyası

Bu hesabatda "NovaTech" layihəsinin dördüncü mərhələsində (Checkpoint 4) görülən işlər, tətbiq olunmuş yanaşma, qarşılaşdığımız problemlər və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 4 tələblərinə uyğun olaraq, əlaqə formasına tam müştəri tərəfli (client-side) validasiya tətbiq olundu. Brauzer default `required` validasiyasından istifadə edilmir — bütün yoxlanma məntiqi xalis JavaScript ilə yazılıb:
*   **Boş Sahə Yoxlanması:** Hər üç sahə (Ad, E-mail, Mesaj) boş göndərilsə, müvafiq xəta mesajı göstərilir.
*   **Email Regex Yoxlanması:** E-mail sahəsinin `user@domain.com` formatına uyğunluğu regex ilə yoxlanılır.
*   **Uzunluq Yoxlanması:** Ad sahəsi minimum 2 simvol, Mesaj sahəsi minimum 10 simvol olmalıdır.
*   **Real-time Validasiya:** İstifadəçi sahəni tərk etdikdə (`blur`) xəta göstərilir; xətalı sahədə yazarkən (`input`) xəta anlıq düzəlir.
*   **Vizual Feedback:** Xətalı sahələr qırmızı, düzgün sahələr yaşıl rəngə boyanır.
*   **Uğurlu Göndərim:** Bütün sahələr doğruysa form sıfırlanır və yaşıl uğur mesajı 6 saniyə görünür.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
*   **IIFE (Immediately Invoked Function Expression):** Bütün validasiya kodu `(function() { ... })()` daxilindədir ki, qlobal dəyişənlər yaranmasın və mövcud `DOMContentLoaded` kodu ilə toqquşmasın.
*   **`e.preventDefault()`:** Formanın default göndərilməsi bloklanır; göndərmə prosesi tamamilə JS tərəfindən idarə olunur.
*   **BEM Modifier sinifləri:** Vizual vəziyyət dəyişiklikləri üçün birbaşa `style` yazılmır; `.contact__input--invalid`, `.contact__input--valid` və `.contact__form--shake` sinifləri əlavə/silinir — CSS tərəfindən idarə olunur.
*   **`aria-invalid` atributu:** Xətalı sahəyə `aria-invalid="true"` əlavə edilir, düzgün sahəyə `"false"` təyin olunur — ekran oxuyucuları üçün əlçatanlıq təmin edilir.
*   **`aria-live="polite"`:** Xəta mesajı `<span>`-larına bu atribut əlavə edilib ki, ekran oxuyucuları dəyişikliyi istifadəçiyə bildirsin.

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
1.  **Brauzer Default Validasiyası ilə Toqquşma:** `required` atributu saxlanılsaydı, brauzer öz xəta baloncuğunu göstərərdi — bu, bizim JS mesajları ilə toqquşurdu.
2.  **Shake Animasiyasının Yenidən İşə Düşməməsi:** `contact__form--shake` sinifini əlavə etdikdə, eyni sinif artıq mövcud olduğu üçün animasiya yenidən başlamırdı.
3.  **Textarea üçün Modifier Toqquşması:** `setInvalid` funksiyasında `contact__input--invalid` sinifini textarea-ya da əlavə etmək lazım idi, çünki textarea fərqli bir elementdir.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **`required` Atributunun Silinməsi:** Bütün form sahələrindən `required` atributu çıxarıldı. Validasiya tamamilə JS tərəfindən idarə olunur.
2.  **`void form.offsetWidth` ilə Reflow:** Animasiyanı yenidən başlatmaq üçün sinif silinir, `void form.offsetWidth` ilə brauzerin yenidən hesablama (reflow) aparması məcbur edilir, sonra sinif yenidən əlavə olunur.
3.  **Hər iki sinif əlavə edildi:** `setInvalid` / `setValid` funksiyalarında həm `.contact__input--invalid` həm də `.contact__textarea--invalid` sinifləri eyni vaxtda əlavə/silinir ki, hər iki element tipi düzgün işləsin.

---

# Checkpoint 5: Əlçatanlıq (Accessibility) Hesabatı

Bu hesabatda "NovaTech" layihəsinin beşinci mərhələsində (Checkpoint 5) görülən işlər, tətbiq olunmuş yanaşma, qarşılaşdığımız əlçatanlıq problemləri və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 5 tələblərinə uyğun olaraq, veb-səhifənin əlçatanlığı (a11y) standartlara və qaydalara uyğunlaşdırıldı:
*   **Skip to Content Linki:** Klaviatura vasitəsilə naviqasiya edən istifadəçilərin təkrar olunan menyu elementlərini atlayaraq birbaşa əsas məzmuna keçməsi üçün səhifənin ən əvvəlinə gizli "Skip to content" linki əlavə edildi.
*   **Klaviatura Fokus Çərçivələri (Focus Ring):** Bütün düymələr, linklər və form sahələri üçün aydın, yüksək kontrastlı və estetik `:focus-visible` fokus xüsusiyyətləri təyin olundu.
*   **İnert Atributu Tətbiqi:** Mobil menyu açıldıqda arxa plandakı elementlərin (`<main>` və `<footer>`) klaviatura fokusunu almaması və ekran oxuyucuları tərəfindən oxunmaması üçün HTML5 `inert` atributundan istifadə edildi.
*   **Focus Trap (Fokus Tələsi):** Mobil menyu açıq olduqda, fokusun menyunun hüdudlarından kənara çıxmaması və menyu daxilində dövr etməsi təmin edildi.
*   **Menyu Fokus İdarəetməsi:** Mobil menyu açıldıqda fokus ilk linkə yönləndirilir, menyu bağlandıqda isə fokus avtomatik olaraq onu açan hamburger düyməsinə geri qayıdır.
*   **ARIA Təkmilləşdirmələri:** Form sahələri `aria-describedby` atributu ilə öz müvafiq xəta mesajı span-larına bağlandı.
*   **Kontrast Artımı:** Xəta mesajlarının rəngi daha tünd çalara dəyişdirilərək ağ fon üzərində minimum 4.5:1 kontrast tələbi 6.5:1 kontrast nisbəti ilə təmin edildi.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
*   **Müasir Fokus Standartı:** `:focus` yerinə `:focus-visible` istifadə olundu ki, yalnız klaviatura istifadəçiləri fokus çərçivəsini görsünlər, siçan ilə klikləyənlər üçün dizayn təmiz qalsın.
*   **`inert` ilə Tam Bloklama:** Menyu açıq olduqda klaviatura fokusunu və ekran oxuyucularını tamamilə bloklamaq üçün ən müasir və etibarlı üsul olan `inert` atributundan istifadə edildi.
*   **Scroll & Focus İnteqrasiyası:** Naviqasiya linkləri klikləndikdə təkcə səhifə sürüşmür, həm də fokus hədəf bölməyə (`tabindex="-1"` vasitəsilə) yönləndirilir ki, ekran oxuyucuları oxumağa doğru yerdən başlasın.

---

## 3. Qarşılaşdığımız Problemlər (Problems Faced)
1.  **Gizli Menyudakı Fokus Sızması:** Mobil menyu bağlı və ekranın kənarında (`transform: translateX(100%)`) gizli olduqda belə, klaviatura ilə Tab basdıqda menyu linkləri fokus qəbul edirdi. Bu, klaviatura istifadəçiləri üçün çaşqınlıq yaradırdı.
2.  **Kontrast Yetersizliyi:** Ağ fon üzərində istifadə olunan `#dc2626` xəta rənginin kontrastı minimal limitdə idi və bəzi ekranlarda görmə çətinliyi olan istifadəçilər üçün kifayət qədər aydın deyildi.
3.  **Klaviatura Fokusunun İtirilməsi:** Mobil menyunu klaviatura ilə gəzərkən fokusun menyudan çıxıb səhifənin görünməyən hissələrinə sızması problemi var idi.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **`visibility: hidden` İnteqrasiyası:** Mobil naviqasiya panelinə (`.header__nav`) varsayılan olaraq `visibility: hidden` verildi və menyu açıldıqda `visibility: visible` sinfi tətbiq olundu. Bu, keçid animasiyasını pozmadan bağlı menyunun fokuslanmasının qarşısını aldı.
2.  **Daha Yüksək Kontrastlı Rəng:** Xəta rəngi `#dc2626`-dan `#b91c1c` tonuna dəyişdirildi. Bu, vizual dizayna zərər vermədən kontrast nisbətini 6.5:1-ə qaldırdı.
3.  **JavaScript ilə Focus Trap:** `script.js` faylında klaviatura hadisələrini izləyərək Tab və Shift+Tab basıldıqda fokusun yalnız hamburger düyməsi və menyu linkləri arasında dövr etməsinə nəzarət edən məntiq quruldu.

---

# Checkpoint 6: Kod Keyfiyyəti — Adlandırma Konvensiyası və Inline Style Hesabatı

Bu hesabatda "NovaTech" layihəsinin altıncı mərhələsində (Checkpoint 6) görülən işlər, tətbiq olunmuş yanaşma, aşkar edilmiş problemlər və onların həlli yolları əks olunmuşdur.

---

## 1. Görülən İş (Work Done)
Checkpoint 6 tələblərinə uyğun olaraq, layihənin bütün CSS, HTML və JavaScript faylları kod keyfiyyəti baxımından audita tabe tutuldu. Aşağıdakı düzəlişlər aparıldı:

*   **CSS Dəyişkənlərinin Genişləndirilməsi:** Validasiya stillərindəki bütün hardcoded HEX rəng dəyərləri (`#dc2626`, `#b91c1c`, `#16a34a`, `#f0fdf4` və s.) silinərək `:root` daxilindəki CSS custom properties ilə əvəzləndi.
*   **Inline Style-ların Silinməsi:** `script.js` faylındakı `document.body.style.overflow = 'hidden'` və `document.body.style.overflow = ''` sətirləri — birbaşa Checkpoint 6 tələbinə zid olan inline style istifadəsiydi — silindi.
*   **Yeni BEM Utility Class:** Scroll kilidini idarə etmək üçün `styles.css` faylına `.body--no-scroll { overflow: hidden; }` BEM utility sinifi əlavə edildi.

---

## 2. İstifadə Edilən Yanaşma (Approach Used)
*   **BEM Metodologiyası (tam audit):** HTML-dəki bütün siniflər yenidən yoxlanıldı. `.blok`, `.blok__element`, `.blok--modifier` formatının bütün fayllarda ardıcıl şəkildə tətbiq olunduğu təsdiqləndi.
*   **CSS Custom Properties (Design Token):** Rəng, şrift, kölgə kimi bütün dizayn dəyərləri `:root` daxilindəki CSS dəyişkənlərindən alınır. Heç bir hardcoded (literal) dəyər istifadə edilmir.
*   **Style-ı JS deyil, CSS idarə edir:** Vizual vəziyyət dəyişiklikləri (scroll kilidi daxil olmaqla) birbaşa `style` atributu ilə deyil, CSS sinifləri əlavə/silmək yolu ilə həyata keçirilir — bu, separation of concerns (məsuliyyətin ayrılması) prinsipinə tam uyğundur.

---

## 3. Aşkar Edilmiş Problemlər (Problems Found)
1.  **`script.js`-də inline style istifadəsi:** Mobil menyu açıldıqda/bağlandıqda `document.body.style.overflow` birbaşa dəyişdirilirdi. Bu, Checkpoint 6-nın "no inline style" tələbini birbaşa pozurdu.
2.  **CSS-də hardcoded HEX rəng dəyərləri:** Validasiya və uğur mesajı üçün istifadə olunan bütün rənglər (`#dc2626`, `#fff5f5`, `#16a34a`, `#f0fdf4`, `#bbf7d0`, `#b91c1c`, `#15803d`) CSS dəyişkəni əvəzinə literal şəkildə yazılmışdı. Bu, həm saxlanma qabiliyyətini (maintainability) azaldırdı, həm də dizayn sisteminin bütövlüyünü pozurdu.

---

## 4. Problemlərin Həlli Yolu (How We Solved It)
1.  **`document.body.classList` ilə Əvəzetmə:** `openMenu()` funksiyasında `document.body.style.overflow = 'hidden'` sətri `document.body.classList.add('body--no-scroll')` ilə, `closeMenu()` funksiyasında isə `document.body.style.overflow = ''` sətri `document.body.classList.remove('body--no-scroll')` ilə əvəzləndi.
2.  **Yeni CSS Dəyişkənlərinin Əlavəsi:** `styles.css` faylının `:root` blokuna aşağıdakı 10 yeni CSS dəyişkəni əlavə olundu:
    *   Xəta üçün: `--error-color`, `--error-text`, `--error-bg`, `--error-ring`, `--error-ring-focus`
    *   Uğur üçün: `--success-color`, `--success-text`, `--success-bg`, `--success-border`, `--success-ring`
3.  **Bütün Hardcoded Dəyərlərin Əvəzlənməsi:** Validasiya stillərindəki (`--invalid`, `--valid`, `.contact__error`, `.contact__success`) bütün literal HEX dəyərlər yeni CSS dəyişkənləri ilə əvəzləndi.
