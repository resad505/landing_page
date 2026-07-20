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
