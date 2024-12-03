// Literal

var angkot_literal = {
    angkot_ke: 1,
    jurusan: 'bogor depok',
    penumpang: 0,
};

// Deklarasi

function angkot(angkot, jurusan, penumpang, uang) {
    var angkots = {};

    angkots.angkot = angkot;
    angkots.jurusan = jurusan;
    angkots.penummpang = penumpang;
    angkots.uang = uang;

    angkots.tambahAngkot = (angkota) => {
        angkots.angkot += angkota;
        return angkots.angkot;
    }

    angkots.tambahJurusan = (tambahJurusan) => {
        if (angkots.jurusan.length < 2 && angkots.jurusan != tambahJurusan) {
            angkots.jurusan.push(tambahJurusan);
        } else {
            for (var i = 0; i < angkots.jurusan.length; i++) {
                if (angkots.jurusan[i] === undefined) {
                    angkots.jurusan[i] = tambahJurusan;
                } else if (angkots.jurusan[i] = tambahJurusan) {
                    console.log('Jurusan Sudah ada')
                } else if (angkots.jurusan.length >= 2) {
                    console.log('Jurusan Angkot Sudah Penuh')
                }
            }
        }
        return angkots.jurusan;
    }

    angkots.hapusJurusan = (tambahJurusan) => {
        for (var i = 0; i < angkots.jurusan.length; i++) {
            if (angkots.jurusan[i] === tambahJurusan) {
                angkots.jurusan[i] = undefined;
            } else {
                console.log('Tidak ada jurusan')
            }
        }
        return angkots.jurusan;
    }


    angkots.penummpangConfig = (naikP, turunP) => {
        if (turunP === 0) {
            angkots.penummpang += naikP;
        } else if (turunP > 0) {
            angkots.penummpang += (naikP - turunP);
        }
        return angkots.penummpang;
    }

    angkots.pembayaranAngkot = (bayar, kembalian) => {
        if (kembalian === 0) {
            angkots.uang += bayar;
        } else if (kembalian > 0) {
            angkots.uang += (bayar - kembalian);
        }
        return angkots.uang;
    }

    return angkots;
}

var ang = angkot(1, [], 3);

// Objek

function Angkotss(angkot, jurusan, penumpang, harga) {
    this.angkot = angkot;
    this.jurusan = jurusan;
    this.penummpang = penumpang;
    this.harga = harga;

    this.tambahAngkot = (angkotTambah) => {
        this.angkot += angkotTambah;
        return this.angkot;
    }

    this.penummpangConfig = (naikP, turunP) => {
        if (turunP === 0) {
            this.penummpang += naikP;
        } else if (turunP > 0) {
            this.penummpang += (naikP - turunP);
        }
        return this.penummpang;
    }

    this.ubahJurusan = (ubahJurusan) => {
        for (var i = 0; i < this.jurusan.length; i++) {
            if (this.jurusan[i] === ubahJurusan) {
                this.jurusan[i] = undefined;
                console.log('jurusan telah di hapus');
            }
        }
        return this.jurusan;
    }

    this.jurusanTambah = (tambahJurusan1) => {
        if (this.jurusan.length < 2 && this.jurusan != tambahJurusan1) {
            this.jurusan.push(tambahJurusan1);
        } else {
            for (var i = 0; i < this.jurusan.length; i++) {
                if (this.jurusan[i] === undefined) {
                    this.jurusan[i] = tambahJurusan1;
                    console.log('jurusan telah di tambahkan');
                } else {
                    console.log('Sudah penuh jurusan wilayahnya');
                }
            }
        }
        return this.jurusan;
    }

    this.pembayaranAngkot = (bayar, kembalian) => {
        if (kembalian === 0) {
            this.harga += bayar;
        } else if (kembalian > 0) {
            this.harga += (bayar - kembalian);
        }
        return this.harga;
    }
}
var angkott = new Angkotss(1, [], 1, 0);


// Object Create ========================================
// Contoh object create

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`${this.nama} telah makan dengan porsi ` + porsi)
    },

    tidur: function (jam) {
        this.energi += jam;
        console.log(` ${this.nama} telah melakukan tidur dan menambah energi ` + jam)
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(` ${this.nama} telah main ` + jam + ' energi anda berkurang sisa energi anda ' + `${this.energi}`);
    }
}


function Mahasiswa(nama, energi) {
    // let mahasiswa = {}; //Ini membuat object juga
    let mahasiswa = Object.create(methodMahasiswa) // () ini untuk memanggil method yang diluar funtion

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}


let ferdis = new Mahasiswa('Ferdi', 10);


// Prototype ========================================
// Contoh Prototype



function Mahasiswa(nama, energi) {
    // let mahasiswa = {}; //Ini membuat object juga
    // let mahasiswa = Object.create(methodMahasiswa) // () ini untuk memanggil method yang diluar funtion
    // Karna sekarang otomatis variable dan object akan otomatis terbuata

    this.nama = nama;
    this.energi = energi;

    // return mahasiswa;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`${this.nama} telah makan dengan porsi ` + porsi);
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    console.log(` ${this.nama} telah main ` + jam + ' energi anda berkurang sisa energi anda ' + `${this.energi}`);
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam;
    console.log(` ${this.nama} telah melakukan tidur dan menambah energi ` + jam);
}

let ferdi = new Mahasiswa('Ferdi', 10);


// Closure ============
// Mencoba Closure
// Dan menambah kan denga  arrow Function

const start1 = () => {
    let jumlah = 0;
    return function () {
        return ++jumlah;
    }
}

// let jalan1 = start();

// console.log(jalan1());

// Jika di sederhakan code nya (Refactory) menjadi lebih sedikit contoh

const start = (() => {

    let jumlah = 0;
    return function () {
        return ++jumlah;
    }

})();

console.log(start());
console.log(start());
console.log(start());
