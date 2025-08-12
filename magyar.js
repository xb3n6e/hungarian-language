// 🇭🇺 Magyar nyelvű wrapper függvények
const letrehozViselkedes = require('./viselkedes.js');

// 🔁 Ígéret osztály (Promise)
class Igeret {
    constructor(feladat) {
        this.promise = new Promise(feladat);
    }

    akkor(callback) {
        this.promise = this.promise.then(callback);
        return this;
    }

    hiba(callback) {
        this.promise = this.promise.catch(callback);
        return this;
    }

    vegul(callback) {
        this.promise = this.promise.finally(callback);
        return this;
    }
}

// 📤 Konzol wrapper
const konzol = {
    kiir: console.log,
    hiba: console.error,
    figyelmeztet: console.warn,
    info: console.info
};

// 🎲 Véletlenszám
function veletlen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ⏳ Várakozás
function alvas(masodperc) {
    return new Igeret(resolve => {
        setTimeout(resolve, masodperc * 1000);
    });
}

// 🔁 Tömb műveletek
function minden(tomb, feltetel) {
    return tomb.every(feltetel);
}

function van(tomb, feltetel) {
    return tomb.some(feltetel);
}

function szur(tomb, feltetel) {
    return tomb.filter(feltetel);
}

function terkep(tomb, muvelet) {
    return tomb.map(muvelet);
}

function elso(tomb) {
    return tomb[0];
}

function utolso(tomb) {
    return tomb[tomb.length - 1];
}

function veletlenElem(tomb) {
    if (!Array.isArray(tomb) || tomb.length === 0) return null;
    const index = veletlen(0, tomb.length - 1);
    return tomb[index];
}

function egyedi(tomb) {
    return [...new Set(tomb)];
}

function osszeg(tomb) {
    return tomb.reduce((osszeg, ertek) => osszeg + ertek, 0);
}

// 📦 Objektumkezelés
function kulcsok(obj) {
    return Object.keys(obj);
}

function ertekek(obj) {
    return Object.values(obj);
}

function parok(obj) {
    return Object.entries(obj);
}

// 📅 Dátum és idő
function datumMost() {
    return new Date();
}

function ev(datum) {
    return datum.getFullYear();
}

function honap(datum) {
    return datum.getMonth() + 1;
}

function nap(datum) {
    return datum.getDate();
}

// 📚 Szövegkezelés
function hosszusag(szoveg) {
    return szoveg.length;
}

function tartalmaz(szoveg, keresett) {
    return szoveg.includes(keresett);
}

function kisbetus(szoveg) {
    return szoveg.toLowerCase();
}

function nagybetus(szoveg) {
    return szoveg.toUpperCase();
}

function ismetles(szoveg, hanyszor) {
    return szoveg.repeat(hanyszor);
}

function fordit(szoveg) {
    return szoveg.split('').reverse().join('');
}

function szamokSzovegbol(szoveg) {
    return szoveg.match(/\d+/g)?.map(Number) || [];
}

function szovegSzavak(szoveg) {
    return szoveg.trim().split(/\s+/);
}

function szovegCsere(szoveg, keresett, csere) {
    return szoveg.replaceAll(keresett, csere);
}

// 📦 JSON műveletek
function jsonSzoveg(obj) {
    return JSON.stringify(obj, null, 2);
}

function jsonObjektum(szoveg) {
    try {
        return JSON.parse(szoveg);
    } catch {
        return null;
    }
}

// 🔄 Típusellenőrzés
function tipus(valtozo) {
    return typeof valtozo;
}

function objektumE(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function tombE(v) {
    return Array.isArray(v);
}

function szamE(v) {
    return typeof v === 'number' && !isNaN(v);
}

function szovegE(v) {
    return typeof v === 'string';
}

// 📅 Dátumformázás
function datumSzoveg(datum = new Date()) {
    return datum.toLocaleDateString('hu-HU');
}

function idoSzoveg(datum = new Date()) {
    return datum.toLocaleTimeString('hu-HU');
}

function teljesIdo(datum = new Date()) {
    return datum.toLocaleString('hu-HU');
}

// 🔢 Számformázás
function forint(szam) {
    return szam.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' });
}

function tizedes(szam, helyek = 2) {
    return Number(szam).toFixed(helyek);
}

// 🧪 Validációk
function uresE(v) {
    return v === null || v === undefined || v === '';
}

function pozitivE(szam) {
    return typeof szam === 'number' && szam > 0;
}

function negativE(szam) {
    return typeof szam === 'number' && szam < 0;
}

// 🧠 Logikai segédfüggvények
function ha(feltetel, igaz, hamis) {
    return feltetel ? igaz : hamis;
}

function nem(feltetel) {
    return !feltetel;
}

// 🔢 Matematikai műveletek
const matematika = {
    // Alapok
    veletlen: Math.random,
    kor: Math.PI,
    gyok: Math.sqrt,
    abszolut: Math.abs,
    abszolutErtek: Math.abs,
    egesz: Math.floor,
    fel: Math.ceil,
    kerekit: Math.round,
    hatvany: Math.pow,
    maximum: Math.max,
    minimum: Math.min,

    // Trigonometria
    szinusz: Math.sin,
    koszinusz: Math.cos,
    tangens: Math.tan,
    arkoszinusz: Math.acos,
    arszinusz: Math.asin,
    artangens: Math.atan,

    // Logaritmusok és exponenciális
    logaritmus: Math.log,
    log10: Math.log10 || (x => Math.log(x) / Math.LN10),
    exp: Math.exp,

    // Egyéb
    absErtek: Math.abs,
    negyzet: x => x * x,
    kob: x => x * x * x,
    negativ: x => -Math.abs(x),
    pozitiv: x => Math.abs(x),
    szazalek: (resz, egesz) => (resz / egesz) * 100,
    arany: (a, b) => a / b,
    gyokN: (x, n) => Math.pow(x, 1 / n),
    faktorialis: function(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let eredmeny = 1;
        for (let i = 2; i <= n; i++) {
            eredmeny *= i;
        }
        return eredmeny;
    },
    paros: x => x % 2 === 0,
    paratlan: x => x % 2 !== 0
};

const viselkedes = letrehozViselkedes({ alvas, konzol });

// 📦 Exportálás
module.exports = {
    // Alapok
    konzol,
    alvas,
    veletlen,
    Igeret,

    // Tömb
    minden,
    van,
    szur,
    terkep,
    elso,
    utolso,
    veletlenElem,
    egyedi,
    osszeg,

    // Objektum
    kulcsok,
    ertekek,
    parok,

    // Dátum
    datumMost,
    ev,
    honap,
    nap,
    datumSzoveg,
    idoSzoveg,
    teljesIdo,

    // Szöveg
    hosszusag,
    tartalmaz,
    kisbetus,
    nagybetus,
    ismetles,
    fordit,
    szamokSzovegbol,
    szovegSzavak,
    szovegCsere,

    // JSON
    jsonSzoveg,
    jsonObjektum,

    // Típusok
    tipus,
    objektumE,
    tombE,
    szamE,
    szovegE,

    // Számformázás
    forint,
    tizedes,

    // Validációk
    uresE,
    pozitivE,
    negativE,

    // Logika
    ha,
    nem,

    // Matematika
    matematika,

    // Viselkedés
    ...viselkedes
};
