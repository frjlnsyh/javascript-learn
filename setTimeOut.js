const btn = document.querySelector('.btn-gm');
const body = document.querySelector('.body-gm-srvr');
const close = document.querySelector('.btn-cls-srvr');
const list = document.querySelector('.list-srvr');
const square = document.querySelector('.square');
const textSquare = document.querySelector('.text-square');
const text = document.querySelector('.text-h');

let handleAnimasi = false; // Untuk menghandle animasi yang belum selesai terklik 

btn.addEventListener('click', function () {

    body.classList.toggle('active');
    setTimeout(function () {
        list.classList.toggle('active');
        close.classList.toggle('active');
    }, 500)

});

close.addEventListener('click', function () {
    list.classList.toggle('active');
    close.classList.toggle('active');
    setTimeout(function () {
        body.classList.toggle('active');
    }, 500)
});

square.addEventListener('click', function () {
    if (handleAnimasi) return;
    handleAnimasi = true; // Saat pertama kali di klik nilai akan true

    let satu = 'active';
    let dua = 'actived';

    if (this.classList.contains('actived')) {
        textSquare.classList.toggle('active')
        setTimeout(() => {
            this.classList.toggle('actived');
            setTimeout(() => {
                text.classList.toggle('active');
                handleAnimasi = false; // Setelah masuk animasi terakhir di akan false lagi
            }, 600);
        }, 400);
    } else {
        text.classList.toggle('active');
        setTimeout(() => {
            this.classList.toggle('actived');
            setTimeout(function () {
                textSquare.classList.toggle('active');
                handleAnimasi = false; // Setelah masuk animasi terakhir di akan false lagi
            }, 600);
        }, 400);
    }

})

// body.addEventListener('click', function () {

//     let satu = 'active';
//     let dua = 'actived';

//     if (body.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];
//     }

//     body.classList.remove(satu);
//     setTimeout(function () {
//         list.classList.remove(dua);
//     }, 500);
// });