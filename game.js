var benar = true;

while (benar) {

    var p = prompt('Pilih : Ikan, Burung, Semut');

    var jawab = Math.random();

    if (jawab < 0.40) {
        jawab = 'Ikan';
    } else if (jawab >= 0.40 && jawab <= 0.60) {
        jawab = 'Burung';
    } else {
        jawab = 'Semut';
    }

    var hasil = '';

    if (p == jawab) {
        hasil = 'Kamu Seri';
    } else if (p == 'Ikan') {
        hasil = (jawab == 'Burung') ? 'Kamu Kalah' : 'Kamu Menang';
    } else if (p == 'Burung') {
        hasil = (jawab == 'Semut') ? 'Kamu Kalah' : 'Kamu Menang';
    } else if (p === 'Semut') {
        hasil = (jawab == 'Ikan') ? 'Kamu Kalah' : 'Kamu Menang' ;
    } else {
        hasil = 'Kamu kenapa sih?';
    }

    if (p == '') {
        alert(hasil);
    } else {
        alert('Kamu memilih ' + p + '\nlawan memilih ' + jawab + '\n \n' + 'Maka Hasilnya : ' + hasil);
    }

    benar = confirm('Main Lagi ?');
}

alert('Terimakasih telah bermain :)')