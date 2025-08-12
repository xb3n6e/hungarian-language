// 📕 Magyar csomag betöltése
const magyar = require('./magyar.js');

// 📤 Konzol wrapper
magyar.konzol.kiir("Konzol wrapper:")
magyar.konzol.kiir("Szöveg");
magyar.konzol.hiba("Hibaüzenet");
magyar.konzol.figyelmeztet("Figyelmeztetés");
magyar.konzol.info("Információ");

// 🎲 Véletlenszám
magyar.konzol.kiir("Véletlenszám:")
const szam = magyar.veletlen(1, 10);
magyar.konzol.kiir(szam);

// ⏳ Várakozás
magyar.konzol.kiir("Várakozás:")
magyar.alvas(3).akkor(() => magyar.konzol.kiir("3 másodperc eltelt"));

// 🔁 Tömb műveletek
magyar.konzol.kiir("Tömb műveletek:")
magyar.konzol.kiir(magyar.minden([1, 2, 3], szam => szam > 0));
magyar.konzol.kiir(magyar.van([1, 2, 3], szam => szam === 2));
magyar.konzol.kiir(magyar.szur([1, 2, 3], szam => szam > 1));
magyar.konzol.kiir(magyar.terkep([1, 2, 3], szam => szam * 2));
magyar.konzol.kiir(magyar.kulcsok({a: 1, b: 2}));
magyar.konzol.kiir(magyar.ertekek({a: 1, b: 2}));
magyar.konzol.kiir(magyar.parok({a: 1, b: 2}));
const gyumolcsok = ['alma', 'banán', 'körte'];
magyar.konzol.kiir('Első elem:', magyar.elso(gyumolcsok)); // alma
magyar.konzol.kiir('Utolsó elem:', magyar.utolso(gyumolcsok)); // körte
const szamok = [1, 2, 2, 3, 4, 4, 5];
magyar.konzol.kiir('Véletlen elem:', magyar.veletlenElem(szamok)); // pl. 2
magyar.konzol.kiir('Egyedi elemek:', magyar.egyedi(szamok)); // [1, 2, 3, 4, 5]
magyar.konzol.kiir('Összeg:', magyar.osszeg(szamok));

// 📅 Dátum és idő
magyar.konzol.kiir("Dátum és idő:")
const most = magyar.datumMost();
magyar.konzol.kiir(magyar.ev(most));
magyar.konzol.kiir(magyar.honap(most));
magyar.konzol.kiir(magyar.nap(most));

// 📚 Szövegkezelés
magyar.konzol.kiir("Szövegkezelés:")
magyar.konzol.kiir(magyar.hosszusag("alma"));
magyar.konzol.kiir(magyar.tartalmaz("almafa", "fa"));
magyar.konzol.kiir(magyar.kisbetus("ALMA"));
magyar.konzol.kiir(magyar.nagybetus("alma"));
magyar.konzol.kiir('Ismétlés:', magyar.ismetles('alma ', 3)); // alma alma alma
magyar.konzol.kiir('Fordított:', magyar.fordit('körte')); // etrök
magyar.konzol.kiir('Számok szövegből:', magyar.szamokSzovegbol('Van 3 alma és 12 körte.')); // [3, 12]
const mondat = 'Ez egy egyszerű teszt mondat.';
magyar.konzol.kiir('Szavak:', magyar.szovegSzavak(mondat)); // ['Ez', 'egy', 'egyszerű', 'teszt', 'mondat.']
magyar.konzol.kiir('Szöveg csere:', magyar.szovegCsere(mondat, 'teszt', 'példa')); // 'Ez egy egyszerű példa mondat.'

// 🔢 Matematikai műveletek
magyar.konzol.kiir("Matematikai műveletek:")
magyar.konzol.kiir(magyar.matematika.gyok(9));
magyar.konzol.kiir(magyar.matematika.abszolut(-5));
magyar.konzol.kiir(magyar.matematika.kor);
console.log(magyar.matematika.hatvany(2, 3));
console.log(magyar.matematika.kerekit(3.6));
console.log(magyar.matematika.maximum(5, 9, 2));
console.log(magyar.matematika.szinusz(Math.PI / 2));
console.log(magyar.matematika.negyzet(4));
console.log(magyar.matematika.kob(3));
console.log(magyar.matematika.szazalek(25, 200));
console.log(magyar.matematika.faktorialis(5));
console.log(magyar.matematika.paros(8));
console.log(magyar.matematika.gyokN(27, 3));

// 📦 JSON
magyar.konzol.kiir("JSON műveletek:")
const obj = { nev: "Anna", kor: 28 };
const jsonSzoveg = magyar.jsonSzoveg(obj);
magyar.konzol.kiir(jsonSzoveg);
magyar.konzol.kiir(magyar.jsonObjektum(jsonSzoveg));

// 🔄 Típusellenőrzés
magyar.konzol.kiir("Típusellenőrzés:")
magyar.konzol.kiir(magyar.tipus(42)); // "number"
magyar.konzol.kiir(magyar.objektumE({})); // true
magyar.konzol.kiir(magyar.tombE([1, 2])); // true
magyar.konzol.kiir(magyar.szamE("alma")); // false
magyar.konzol.kiir(magyar.szovegE("alma")); // true

// 📅 Dátumformázás
magyar.konzol.kiir("Dátumformázás:")
magyar.konzol.kiir(magyar.datumSzoveg());
magyar.konzol.kiir(magyar.idoSzoveg());
magyar.konzol.kiir(magyar.teljesIdo());

// 🔢 Számformázás
magyar.konzol.kiir("Számformázás:")
magyar.konzol.kiir(magyar.forint(123456));
magyar.konzol.kiir(magyar.tizedes(3.14159));

// 🧪 Validációk
magyar.konzol.kiir("Validációk:")
magyar.konzol.kiir(magyar.uresE("")); // true
magyar.konzol.kiir(magyar.pozitivE(5)); // true
magyar.konzol.kiir(magyar.negativE(-3)); // true

// 🧠 Logikai segédfüggvények
magyar.konzol.kiir("Logikai segédfüggvények:")
magyar.konzol.kiir(magyar.ha(true, "Igen", "Nem")); // "Igen"
magyar.konzol.kiir(magyar.nem(false)); // true

// 👭 Viselkedés
magyar.konzol.kiir('Várakozás üzenettel:');
magyar.varakozasUzenettel(2, '2 másodperc után megjelenik ez az üzenet.');
magyar.konzol.kiir('HaVan példa:');
const adat = { nev: 'Anna', kor: 28 };
magyar.haVan(adat, 'nev', ertek => magyar.konzol.kiir('Név: ' + ertek));
magyar.konzol.kiir('Ismétlés példa:');
magyar.ismetel(i => magyar.konzol.kiir(`Ismétlés #${i + 1}`), 3);
magyar.konzol.kiir('Időzítés példa:');
magyar.idozites(() => magyar.konzol.kiir('Ez 1 másodperc késéssel jelent meg.'), 1);
magyar.konzol.kiir('Környezet:');
magyar.konzol.kiir(magyar.kornyezet());
