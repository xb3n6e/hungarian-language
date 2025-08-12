// viselkedes.js

function letrehozViselkedes({ alvas, konzol }) {
    function varakozasUzenettel(masodperc, uzenet) {
        return alvas(masodperc).akkor(() => konzol.kiir(uzenet));
    }

    function haVan(obj, kulcs, callback) {
        if (obj.hasOwnProperty(kulcs)) {
            callback(obj[kulcs]);
        }
    }

    function ismetel(fuggveny, hanyszor) {
        for (let i = 0; i < hanyszor; i++) {
            fuggveny(i);
        }
    }

    function idozites(fuggveny, masodperc) {
        setTimeout(fuggveny, masodperc * 1000);
    }

    function kornyezet() {
        if (typeof window !== 'undefined') return 'böngésző';
        if (typeof process !== 'undefined') return 'node';
        return 'ismeretlen';
    }

    return {
        varakozasUzenettel,
        haVan,
        ismetel,
        idozites,
        kornyezet
    };
}

module.exports = letrehozViselkedes;