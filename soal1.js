const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitungAkarPangkat2(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

rl.question("Masukkan angka: ", (input) => {
    const angka = parseFloat(input);

    if (isNaN(angka)) {
        console.log("Input tidak valid. Harap masukkan angka.");
    } else {
        const hasil = hitungAkarPangkat2(angka);
        console.log("Hasil:", hasil);
    }
    
    rl.close(); 
});