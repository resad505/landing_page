# Dizayn Spesifikasiyası və Stil Bələdçisi (Style Guide)

Bu sənəd layihənin dizayn şəkillərindən (`design__1.png`, `design__2.png`, `design__3.png`) çıxarılmış rəng kodları, fontlar, ölçülər və digər vizual parametrləri əks etdirir. Layihədə ardıcıllığı qorumaq üçün bu dəyərlərdən istifadə etməyiniz tövsiyə olunur.

---

## 🎨 Rəng Palitrası (Color Palette)

Aşağıdakı rənglər dizaynda əsas vizual tonları təşkil edir:

### 1. Əsas Rənglər (Primary & Accent Colors)
*   **Əsas Brend Mavisi (Primary Blue):** `#2563eb` (Tailwind `blue-600`)
    *   *İstifadəsi:* Loqo (`NovaTech`), "Bizimlə əlaqə" və "Göndər" düymələri, statistika rəqəmləri (`150+`, `99%`).
*   **Düymə Hover Mavisi (Primary Hover):** `#1d4ed8` (Tailwind `blue-700`)
    *   *İstifadəsi:* Düymələrin üzərinə gəldikdə (hover effekti).
*   **Açıq Mavi Fon (Hero Background):** `#f0f7ff` və ya `#eff6ff` (Tailwind `blue-50`)
    *   *İstifadəsi:* Hero (giriş) bölməsinin fon rəngi.

### 2. Neytral Rənglər (Neutral Colors)
*   **Tünd Mətn (Slate 900):** `#0f172a`
    *   *İstifadəsi:* Əsas başlıqlar (`h1`, `h2`), vacib yazılar.
*   **Yumşaq Mətn / Paraqraf (Slate 600):** `#475569`
    *   *İstifadəsi:* Alt başlıqlar, paraqraf mətnləri, təsvirlər.
*   **Köməkçi Mətn / Naviqasiya (Slate 400):** `#94a3b8`
    *   *İstifadəsi:* Menyu linkləri (normal vəziyyətdə), input placeholder-ləri.
*   **Açıq Boz Fon (Body/Card Background):** `#f8fafc` (Tailwind `slate-50`)
    *   *İstifadəsi:* Bütün səhifənin ümumi fonu və əlaqə formunun arxa planı.
*   **Ağ Fon (Card/Form Background):** `#ffffff`
    *   *İstifadəsi:* Kartların (`150+`, `99%`) və əlaqə forması kartının fonu.
*   **Sərhəd Rəngi (Border Color):** `#e2e8f0` (Tailwind `slate-200`)
    *   *İstifadəsi:* Kartların kənarları, input sahələrinin sərhədləri.

### 3. Xəbərdarlıq / Bildiriş Qutusu (Alert Box - design__2.png)
*   **Açıq Qırmızı Fon:** `#fee2e2` (Tailwind `red-100`)
*   **Tünd Qırmızı Mətn:** `#991b1b` (Tailwind `red-800`)
    *   *İstifadəsi:* "Texniki Dəstək Linkimiz:" bölməsi.

## 📏 Yazı Ölçüləri və Çəkiləri (Font Sizes & Weights)

Dizayndakı elementlərin şrift xüsusiyyətləri aşağıdakı kimidir:

| Element | Şrift Ölçüsü (Font Size) | Şrift Çəkisi (Font Weight) | Təsvir / Nümunə |
| :--- | :--- | :--- | :--- |
| **Naviqasiya Linkləri** | `15px` | `500` (Medium) | `Haqqımızda`, `Qalereya`, `Əlaqə` |
| **Hero Başlığı (`h1`)** | `40px` (`2.5rem`) | `800` (Extra Bold) / `700` | `Rəqəmsal Dünyada Sizin...` |
| **Hero Alt Başlığı (`p`)** | `18px` (`1.125rem`) | `400` (Regular) | `Biz biznesiniz üçün ən...` |
| **Bölmə Başlıqları (`h2`)** | `32px` (`2rem`) | `700` (Bold) | `Haqqımızda`, `Layihələriniz` |
| **Blok Alt Başlıqları (`h3`)** | `20px` (`1.25rem`) | `600` (Semi Bold) | `Niyə bizi seçməlisiniz?` |
| **Əsas Mətnlər / Paraqraflar** | `16px` (`1rem`) | `400` (Regular) | Haqqımızda bölməsinin mətni |
| **Kart Rəqəmləri** | `36px` (`2.25rem`) | `700` (Bold) | `150+`, `99%` |
| **Kart Mətnləri / Etiketlər** | `14px` (`0.875rem`) | `500` (Medium) | `Uğurlu Layihə`, `Müştəri...` |
| **Düymə Mətnləri** | `16px` (`1rem`) | `500` (Medium) | `Bizimlə əlaqə`, `Göndər` |
| **Form Etiketləri (`label`)** | `14px` (`0.875rem`) | `500` (Medium) | `Ad və Soyad *` |
| **Form Girişləri (`input`/`textarea`)** | `15px` (`0.938rem`) | `400` (Regular) | İsdifadəçi daxiletmə sahələri |

---

## 🛠️ CSS Dəyişənləri (CSS Custom Properties)

Layihənizin `styles.css` faylının ən üst hissəsinə bu dəyişənləri əlavə edərək dizayn sisteminizi qura bilərsiniz:

```css

```
