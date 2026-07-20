# NovaTech — Landing Page

> **DevJoint Frontend Development Task — Həftə 1**

Vanilla HTML, CSS və JavaScript ilə hazırlanmış tam responsiv landing page layihəsi.

---

## 📋 Checkpoint-lər

| # | Mövzu | Bal |
|---|-------|-----|
| ✅ 1 | Semantik HTML strukturu | 15 |
| ✅ 2 | Mobile-first responsive dizayn (Flexbox/Grid) | 25 |
| ✅ 3 | Vanilla JS ilə interaktiv elementlər | 25 |
| ✅ **4** | **Contact form — müştəri tərəfli validasiya** | **15** |
| ⬜ 5 | Accessibility (ARIA, klaviatura naviqasiyası) | 10 |
| ⬜ 6 | Kod keyfiyyəti (BEM, inline style yoxdur) | 10 |

---

## ✅ Checkpoint 4 — Contact Form Client-Side Validation

**Məqsəd:** İstifadəçi əlaqə formasını göndərməzdən əvvəl bütün sahələr JavaScript vasitəsilə yoxlanılır. Heç bir brauzer default validasiyasından istifadə edilmir — bütün məntiqi biz özümüz yazırıq.

---

### 🗂 Dəyişdirilən fayllar

| Fayl | Nə dəyişdi |
|------|-----------|
| `index.html` | Hər sahənin altına `<span class="contact__error">` və uğur mesajı üçün `<div class="contact__success">` əlavə edildi. `required` atributu çıxarıldı (JS idarə edir). |
| `styles.css` | Validation üçün 4 yeni vəziyyət stili, animasiya və uğur mesajı stili əlavə edildi. |
| `script.js` | IIFE içərisində tam validasiya məntiqi yazıldı. |

---

### ⚙️ JavaScript Məntiqi (script.js)

Validation kodu ayrı bir **IIFE** (Immediately Invoked Function Expression) içərisindədir ki, qlobal dəyişən çirklənməsi baş verməsin.

#### 1. Boş Sahə Yoxlanması (Empty Field Check)

```js
if (value === '') {
    setInvalid(input, errorEl, 'Bu sahə boş buraxıla bilməz.');
    return false;
}
```

`input.value.trim()` istifadə edilir — yalnız boşluqla dolu sahə də "boş" sayılır.

#### 2. Email Regex Yoxlanması

```js
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!EMAIL_REGEX.test(value)) {
    setInvalid(input, errorEl, 'Düzgün e-mail ünvanı daxil edin (məs: ad@example.com).');
    return false;
}
```

Regex yoxlayır:
- `@` simvolu mütləq olmalıdır
- `@`-dan əvvəl ən azı 1 simvol olmalıdır
- `@`-dan sonra nöqtə (`.`) və domain uzantısı olmalıdır
- Boşluq (`\s`) olmamalıdır

#### 3. Əlavə Uzunluq Yoxlamaları

```js
// Ad sahəsi — minimum 2 simvol
if (input.id === 'fullname' && value.length < 2) { ... }

// Mesaj sahəsi — minimum 10 simvol
if (input.id === 'message' && value.length < 10) { ... }
```

#### 4. Real-time Validasiya (Blur + Input hadisələri)

```js
// İstifadəçi sahəni tərk edəndə yoxla
input.addEventListener('blur', () => {
    if (input.value.trim() !== '') validateField(input, error);
});

// Xətalı sahədə yazarkən anlıq yoxla
input.addEventListener('input', () => {
    if (input.classList.contains('contact__input--invalid')) {
        validateField(input, error);
    }
});
```

**UX məntiq:** Sahə ilk açılanda xəta göstərilmir. Xəta yalnız istifadəçi sahəni tərk etdikdən sonra görünür. Xətalı sahədə yazarkən isə anlıq düzəlir.

#### 5. Submit Handler

```js
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Brauzer default göndərməni bloklayır

    const results = fields.map(({ input, error }) => validateField(input, error));
    const allValid = results.every(Boolean);

    if (!allValid) {
        // Shake animasiyası + ilk xətalı sahəyə focus
        // ...
        return;
    }

    // Uğurlu göndərim: 800ms gecikmə ilə simulyasiya
    submitBtn.disabled = true;
    submitBtn.textContent = 'Göndərilir...';
    setTimeout(() => { /* ... */ }, 800);
});
```

---

### 🎨 CSS Validation Stilləri (styles.css)

```css
/* Xətalı sahə */
.contact__input--invalid { border-color: #dc2626; background-color: #fff5f5; }

/* Düzgün sahə */
.contact__input--valid   { border-color: #16a34a; background-color: #f0fdf4; }

/* Xəta mesajı — animasiyalı görkəm */
.contact__error { opacity: 0; transform: translateY(-4px); transition: opacity 0.2s, transform 0.2s; }
.contact__error:not(:empty) { opacity: 1; transform: translateY(0); }

/* Uğurlu göndərim paneli */
.contact__success { background-color: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; }

/* Shake animasiyası — xətalı submit cəhdi */
@keyframes shake { 15% { transform: translateX(-6px); } ... }
```

---

### 🏷 BEM Sinifləri

Checkpoint 4-də əlavə olunan bütün CSS sinifləri BEM konvensiyasına uyğundur:

| Sinif | Blok | Element | Modifier |
|-------|------|---------|----------|
| `contact__error` | `contact` | `error` | — |
| `contact__success` | `contact` | `success` | — |
| `contact__input--invalid` | `contact` | `input` | `invalid` |
| `contact__input--valid` | `contact` | `input` | `valid` |
| `contact__form--shake` | `contact` | `form` | `shake` |

---

### 🧪 Manual Test Ssenarisi

| Ssenari | Gözlənilən nəticə |
|---------|-----------------|
| Bütün sahələr boş, "Göndər" kliklə | Hər sahə qırmızı border + xəta mesajı, form shake animasiyası |
| Yalnız ad yazıb submit et | Email + mesaj sahəsindən xəta, ad sahəsi yaşıl |
| `test` kimi yanlış email yaz | "Düzgün e-mail ünvanı daxil edin..." xətası |
| `test@` yaz | Eyni email xətası |
| Bütün sahələri düzgün doldur | "Göndərilir..." → ✅ uğur mesajı (6 saniyə sonra gizlənir) |
| Uğur mesajı göründükdən sonra yenidən doldur | Form sıfırlanır, yenidən göndərmək olar |

---

## 🚀 Layihəni Açmaq

Heç bir build prosesi tələb olunmur. `index.html` faylını brauzerdə açmaq kifayətdir.

```
Landing_page_Task-1/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── tech1.jpeg
    ├── tech2.jpeg
    └── tech3.jpeg
```

---

## 🛠 İstifadə Edilən Texnologiyalar

- **HTML5** — Semantik elementlər (`header`, `nav`, `main`, `section`, `footer`)
- **CSS3** — Flexbox, Grid, CSS Custom Properties, Media Queries, Keyframe Animations
- **Vanilla JavaScript** — DOM manipulation, Event listeners, Regex, IIFE pattern
- **Google Fonts** — Inter (400, 500, 600, 700, 800)

---

*© 2026 NovaTech. DevJoint Frontend Development Task.*
