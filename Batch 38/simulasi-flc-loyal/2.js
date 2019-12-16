/**
 * =========
 * Divisible
 * =========
 * Input : @data -> array of deret angka
 *         @divider -> angka pembagi
 * Deskripsi : Menjumlahkan satu per satu angka yang ada dalam 1 deret angka dan mencari tahu
 *             apakah hasil penjumlahan tersebut habis dibagi divider yang ditentukan.
 *             Data deret angka akan diberikan berupa array dan outputnya adalah array of numbers.
 *             Jika number habis dibagi divider, maka kembalikan hasil pembagiannya,
 *             Namun jika tidak, maka number tidak berubah.
 * 
 * Contoh 1 : multipleOfSum([123], 3)
 *            > deret angka nya : 123, maka kita jumlahkan dengan cara 1 + 2 + 3 = 6
 *            > setelahnya kita cari tau apakah angka hasil di atas ( 6 ) habis dibagi divider ( 3 )
 *            > 6 habis dibagi 3 (=2), oleh karena itu, untuk deret angka 123 outputnya adalah [ 2 ]
 * 
 * Contoh 2 : multipleOfSum([41, 21], 9)
 *            > 4 + 1 = 5 dan 2 + 1 = 3
 *            > 5 dan 3 tidak habis dibagi 9 maka
 *            > output = [ 41, 21 ]
 * 
 * Data input dapat `berupa array kosong`, dan output nya adalah []
 * Data input dapat `berisi lebih dari 1 deret angka`, maka outputnya adalah
 * `array of numbers` sejumlah data yang di input.
 * 
 * RULES !!!
 * 1. Perhatikan Driver Code untuk contoh lebih lengkap
 * 2. Hanya boleh menggunakan built in function .push dan .unshift
 */

function divisible(data, divider) {
  // Write your code here
  if (data.length === 0) {
    return [];
  }

  let input = [];

  for (let i = 0; i < data.length; i++) {
    input.push(String(data[i]));
  }

  let result = [];

  for (let i = 0; i < input.length; i++) {
    let internalSum = 0;

    for (let j = 0; j < input[i].length; j++) {
      internalSum += Number(input[i][j]);
    }
    
    if (internalSum % divider === 0) {
      result.push(data[i] / divider);
    }
    else {
      result.push(data[i]);
    }
  }

  return result;
}

// DRIVER CODE
console.log(divisible([5], 4)); // [ 5 ]
console.log(divisible([18, 45, 36], 9)); // [ 2, 5, 4 ]
console.log(divisible([18, 105, 35], 9)); // [ 2, 105, 35 ]
console.log(divisible([], 4)); // []