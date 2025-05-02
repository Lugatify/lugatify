> **Lugatify API**

📚 Lugatify API vasitəsilə sözləri yoxla, təsadüfi və filtrli sözlər al!

---

## 🚀 Quraşdırma

```bash
npm install lugatify
```

---

## 🧠 İstifadə

```js
const Lugatify = require("lugatify");
const api = new Lugatify("sizin_api_açarınız");

// 🔍 Söz yoxla
api.checkWord("kitab")
  .then(console.log)
  .catch(console.error);

// 🎲 Təsadüfi söz al
api.getRandomWord({ nitq_hissesi: "isim", length: 5 })
  .then(console.log)
  .catch(console.error);
```

---

## 🔑 API Açarı

➡️ [https://lugatify.vercel.app](https://lugatify.vercel.app) saytında qeydiyyatdan keç və açarını əldə et.

---

## 📌 Metodlar

### ✅ `checkWord(word: string)`

Verilən sözün lüğətdə olub-olmadığını yoxlayır.

**Nümunə cavab:**

```json
{
  "word": "kitab",
  "movcuddur": true,
  "izah": "Çap olunmuş və ya əlyazma halında olan, müəyyən sayda vərəqlərdən ibarət, cildlənmiş nəşr; oxumaq üçün nəzərdə tutulmuş yazı əsəri.",
  "sinonimler": [
    "əsər",
    "nəşr"
  ],
  "antonimler": [],
  "basqa_menalar": [
    "Böyük, əhatəli məlumat mənbəyi (məcazi mənada)",
    "Müqəddəs dini mətnlər (Quran, İncil və s.)"
  ],
  "nitq_hissesi": "isim",
  "numune_cumle": "Mən bu həftə yeni bir kitab aldım və çox maraqlı olduğunu düşünürəm."
}
```

---

### 🎰 `getRandomWord(options?: { length?: number, nitq_hissesi?: string })`

Filtrlərlə təsadüfi söz gətirir.

**Parametrlər:**

| Parametr       | Tip     | İzah                      |
|----------------|---------|---------------------------|
| `length`       | number  | Sözün uzunluğu (opsional) |
| `nitq_hissesi` | string  | Nitq hissəsi (opsional)   |

---

## 🛡️ Təhlükəsizlik

> API açarını **mütləq** server tərəfdə saxla. Client-side (məsələn, brauzer) kodlarında **heç vaxt** istifadə etmə.

---

## 📄 Lisenziya

MIT © 2025
