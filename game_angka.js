var benar = true;
while (benar) {

    var p = prompt('Pilih Angka 1 - 30 \nKesempatan anda hanya 3x');

    var jawab = Math.floor(Math.random() * 30);

    console.log(jawab);

    hasil = '';

    if (p == jawab) {
        hasil = 'Kamu menebak angkanya';
    } else if (p === '') {
        hasil = 'Kamu mengisi kosong'
    } else {
        for (var i = 3; i > 0; i--) {
            // If Open
            if (p < jawab) {
                (p === '') ? i = 0 : p = prompt('Angkanya terlalu Kecil \nkesempatan kamu tinggal ' + i);

                (p == jawab) ? hasil = 'Kamu benar di jawaban ke - ' + i : hasil = 'Kamu salah dalam 3x percobaan';
            } else if (p > jawab) {
                (p === '') ? i = 0 : p = prompt('Angkanya terlalu Besar \nkesempatan kamu tinggal ' + i);

                (p == jawab) ? hasil = 'Kamu benar di jawaban ke - ' + i : hasil = 'Kamu salah dalam 3x percobaan';
            }
            // If Close
        }
    }

    alert(hasil)
    benar = confirm('Main Lagi ?');
}

alert('Terimakasih :)')

// function loop(n) {
//     for (var i = 1; i < 6; i++) {
//         hasil = n * i;
//         console.log(hasil);
//     }
// }
// loop(1);

// var buttonClick = (x, z) => (x ** 3) + (z ** 3);

// console.log(buttonClick(2, 3)); // Output: 35

// function buttonClisk(x, z) {
    
// }