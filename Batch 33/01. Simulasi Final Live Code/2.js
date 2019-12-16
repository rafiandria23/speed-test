/*
========
MARATHON
========
[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;
[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'
['XXXX', 'XX', 'OO', O-XXOOXXXXXOO-XXXXO']
[-1,   3]
'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina
partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18
[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode
*/

function marathon(track, stamina) {
  // Write your code here
  let count = 0;
  let x = 0;
  let o = 0;
  console.log(o);
  for (var i = 0; i <= track.length; i++) {
    switch (track[i]) {
      case "X":
        x++;
        break;

      case "O":
        o++;
        break;

      case "-":
        stamina += 2;
        break;

      default:
        // return "Selamat anda telah menempuh garis finish";
        break;
    }
    count++;
    console.log(x);
  }
}

console.log(marathon("XXXXXXOOO-XXOOXXXXXOO-XXXXO", 5)); // Selamat anda telah menempuh jarak 18 km
console.log(marathon("XXXXXXOOOXXOOXXXXXOOXXXXO", 5)); // Selamat anda telah menempuh jarak 11 km
console.log(marathon("XXXXXXXX", 3)); // Selamat anda telah menempuh garis finish
