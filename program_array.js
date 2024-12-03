var penumpang = [];

var isiPenumpangAngkot = (namaPenumpang, penumpang) => {
    if (penumpang.length === 0) {

        penumpang.push(namaPenumpang);
        return penumpang;

    } else {
        for (var i = 0; i < penumpang.length; i++) {

            if (penumpang[i] === undefined) {

                penumpang[i] = namaPenumpang;
                return penumpang;

            } else if (penumpang[i] === namaPenumpang) {

                console.log('Nama penumpang : ' + namaPenumpang + ' Sudah ada di kursi ke - ' + (i + 1));
                return penumpang;

            } else if (i === penumpang.length - 1) {

                penumpang.push(namaPenumpang);
                return penumpang;

            }

        }
    }
};

var turunPenumpang = (namaPenumpang, penumpang) => {

    for (var i = 0; i < penumpang.length; i++) {

        if (penumpang[i] === namaPenumpang) {

            penumpang[i] = undefined;
            return penumpang;

        }
        else if (i === penumpang.length - 1) {

            console.log('Tidak ada penumpang yang bernama ' + namaPenumpang);
            return penumpang;

        }

    }

};

