> # 🇭🇺 hungarian-language
A Hungarian-language JavaScript wrapper library that allows you to write and read in Hungarian. Its goal is to make the programming language closer to the native language, possibly preserving the power of JavaScript.

### Made with ❤ by [xb3n6e](http://xb3n6e.hu/bio)

### If you like the project and would like to support my work, please show it by [reacting here](https://www.vouchley.com/review?user=xb3n6e&product=976322)

---

> ## 📦 Installation
```
bash
git clone https://github.com/xb3n6e/hungarian-language.git
cd hungarian-language
npm install
```

---

> ## 🚀 Usage
```js
const hu = require('./magyar.js');

hu.konzol.kiir('Hello World!');
```

---

> ## 📁 File structure
```plaintext
hungarian-language/
├── magyar.js         # Main module that exports everything
├── viselkedes.js     # Behavior-based functions (wait, repeat, etc.)
├── teszt.js          # Examples and tests
├── README_EN.js      # English document
└── README.md         # Hungarian document
```

---

> ## 🧠 Main modules
### 🔢 Mathematics
```js
hu.matematika.kerekit(3.7) → 4
hu.matematika.faktorialis(5) → 120
```

### 🔁 Array operations
```js
hu.osszeg([1, 2, 3]) → 6
hu.veletlenElem(['alma', 'körte']) → 'körte'
```

### 📚 Word processing
```js
hu.fordit('alma') → 'amla'
hu.szovegCsere('piros alma', 'piros', 'zöld') → 'zöld alma'
```

### 📅 Date and time
```js
hu.teljesIdo() → '2025. 08. 13. 01:26:00'
```

### 📦 JSON
```js
hu.jsonSzoveg({ nev: 'Anna' }) → JSON string
hu.jsonObjektum('{ "nev": "Anna" }') → objektum
```

### 🔍 Type check
```js
hu.tombE([1, 2]) → true
hu.szamE('alma') → false
```

### ⏳ Behavior module (viselkedes.js)
This module is in a separate file, and the `magyar.js` file passes the necessary helper functions (sleep, console) to it as parameters.

Example:
```js
hu.varakozasUzenettel(2, 'This will appear after 2 seconds.');
hu.ismetel(i => hu.konzol.kiir(`Repeat #${i + 1}`), 3);
hu.konzol.kiir(hu.kornyezet()); // 'node' or 'browser'
```

---

> ## 🧪 Testing
You can try out all the functions in the `teszt.js` file:

```bash
node teszt.js
```

---

> ## 🛠️ Expandability
You can easily add new modules:

1. Create a new file e.g. `interakcio.js`
2. Export functions
3. Importáld a `magyar.js` fájlban és **add hozzá az exporthoz**
4. After all this, contact with [me](https://xb3n6e.hu/bio) (**even on Discord**) and inform me about it and I will upload it.
---

> ## 📜 License
This project is free to use, modify, and distribute. If you like it, please star it or submit a pull request!