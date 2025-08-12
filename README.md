> # 🇭🇺 hungarian-language
Magyar nyelvű JavaScript wrapper könyvtár, amely lehetővé teszi, hogy a kódot magyarul írd és olvasd. Célja, hogy a programozás nyelve közelebb kerüljön az anyanyelvhez, miközben megőrzi a JavaScript erejét.

### Készült ❤ általa [xb3n6e](http://xb3n6e.hu/bio)

### Ha tetszik a projekt és szeretnéd támogatni a munkámat, akkor [itt](https://www.vouchley.com/review?user=xb3n6e&product=976322) megteheted *(ingyenes támogatás)*

---

> ## 📦 Telepítés
```
bash
git clone https://github.com/xb3n6e/hungarian-language.git
cd hungarian-language
npm install
```

---

> ## 🚀 Használat
```js
const magyar = require('./magyar.js');

magyar.konzol.kiir('Helló világ!');
```

---

> ## 📁 Fájlstruktúra
```plaintext
hungarian-language/
├── magyar.js         # Fő modul, ami mindent exportál
├── viselkedes.js     # Viselkedésalapú függvények (várakozás, ismétlés stb.)
├── teszt.js          # Példák és tesztek
├── README_EN.js      # Angol dokumentáció
└── README.md         # Magyar dokumentáció
```

---

> ## 🧠 Főbb modulok
### 🔢 Matematika (matematika)
```js
magyar.matematika.kerekit(3.7) → 4
magyar.matematika.faktorialis(5) → 120
```

### 🔁 Tömb műveletek
```js
magyar.osszeg([1, 2, 3]) → 6
magyar.veletlenElem(['alma', 'körte']) → 'körte'
```

### 📚 Szövegkezelés
```js
magyar.fordit('alma') → 'amla'
magyar.szovegCsere('piros alma', 'piros', 'zöld') → 'zöld alma'
```

### 📅 Dátum és idő
```js
magyar.teljesIdo() → '2025. 08. 13. 01:26:00'
```

### 📦 JSON
```js
magyar.jsonSzoveg({ nev: 'Anna' }) → JSON string
magyar.jsonObjektum('{ "nev": "Anna" }') → objektum
```

### 🔍 Típusellenőrzés
```js
magyar.tombE([1, 2]) → true
magyar.szamE('alma') → false
```

### ⏳ Viselkedés modul (viselkedes.js)
Ez a modul külön fájlban van, és a magyar.js fájl paraméterként adja át neki a szükséges segédfüggvényeket (alvas, konzol).

Példa:
```js
magyar.varakozasUzenettel(2, 'Ez 2 másodperc után jelenik meg.');
magyar.ismetel(i => magyar.konzol.kiir(`Ismétlés #${i + 1}`), 3);
magyar.konzol.kiir(magyar.kornyezet()); // 'node' vagy 'böngésző'
```

---

> ## 🧪 Tesztelés
A `teszt.js` fájlban kipróbálhatod az összes funkciót:

```bash
node teszt.js
```

---

> ## 🛠️ Bővíthetőség
Új modulokat könnyen hozzáadhatsz:

1. Hozz létre új fájlt pl. `interakcio.js`
2. Exportáld a függvényeket
3. Importáld a `magyar.js` fájlban és **add hozzá az exporthoz**
4. Mindez után vedd fel a kapcsolatot [velem](https://xb3n6e.hu/bio) (**discordon akár**) és tájékoztass erről és én pedig feltöltöm.

---

> ## 📜 Licenc
Ez a projekt szabadon használható, módosítható és terjeszthető. Ha tetszik, csillagozd meg vagy küldj pull requestet!