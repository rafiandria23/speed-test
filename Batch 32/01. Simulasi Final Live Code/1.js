/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE

STORE an empty array to locationGood
STORE an empty array to locationBad
STORE 0 to countGood
STORE 0 to countBad

FOR the length of str
  IF index value of str is equal to "^"
    add 1 to countGood
    add the index to locationGood
  IF index value of str is equal to "?"
    add 1 to countBad
    add the index to locationBad

IF the length of locationGood is equal to countGood
  DISPLAY "Semua keran berjalan dengan baik"
IF the length of locationBad is equal to countBad
  DISPLAY "Semua keran rusak"

DISPLAY "terdapat countGood yang berjalan nomor(locationGood), dan countBad nomor(locationBad)"

*/

function inventarisKeran(str) {
  // Write your code here
  let input = [];
  let locationGood = [];
  let locationBad = [];
  let countGood = 0;
  let countBad = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "X") {
      continue;
    } else if (str[i] !== "X") {
      input.push(str[i]);
    }
  }

  for (let j = 0; j < input.length; j++) {
    switch (input[j]) {
      case "^":
        locationGood.push(j + 1);
        countGood++;
        break;
      case "?":
        locationBad.push(j + 1);
        countBad++;
      default:
        break;
    }
  }

  if (input.length === countGood) {
    return "Semua keran berjalan dengan baik";
  } else if (input.length === countBad) {
    return "Semua keran rusak";
  }

  return `terdapat ${countGood} keran yang berjalan nomor(${locationGood}), dan ${countBad} keran rusak nomor(${locationBad})`;
}

console.log(inventarisKeran("XX^XX^XX^XX?XX^XX"));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran("XX?XX?XX^XX"));
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran("XX^XX^XX"));
// Semua keran berjalan dengan baik
console.log(inventarisKeran("XX?XX?XX"));
// Semua keran rusak
