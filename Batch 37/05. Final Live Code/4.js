/**
 * ====================
 * Multiplication Table
 * ====================
 *
 * [INSTRUCTIONS]
 *
 * Diberikan sebuah array multidimensi yang berisikan angka - angka pada sisi atas table dan kiri nya.
 * tugas kalian adalah dapat mengalikan angka - angka tersebut sesuai dengan koordinatnya.
 *
 * [EXAMPLES]
 * input :
 * [
 *   [0,1,2,3,4],
 *   [5,0,0,0,0],
 *   [6,0,0,0,0],
 *   [7,0,0,0,0],
 *   [8,0,0,0,0]
 * ]
 *
 * proses :
 * pertama, untuk mengetahui cara penghitungan angka - angka 0 yang belum diketahui hasil perkaliannya,
 * kita umpamakan mereka seperti variable :
 * [
 *   [0,1,2,3,4],
 *   [5,a,b,c,d],
 *   [6,e,f,g,h],
 *   [7,i,j,k,l],
 *   [8,m,n,o,p]
 * ]
 *
 * untuk mengetahui nilai a , maka kalikan 1 dengan 5, maka:
 * a = 5
 * b = 5 * 2
 * c = 5 * 3
 * d = 5 * 4
 * e = 6 * 1
 * dst ..
 *
 * sehingga output nya :
 * [
 *   [0,1,2,3,4],
 *   [5,5,10,15,20],
 *   [6,6,12,18,24],
 *   [7,7,14,21,28],
 *   [8,8,16,23,32]
 * ]
 *
 * [RULES]
 * 1. HANYA boleh menggunakan `push dan unshift`
 * 2. `DILARANG` menggunakan method REGEX
 */

function multiplicationTable(table) {
  // your code here
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (table[i][j] == 0) {
        table[i][j] = table[i][0] * table[0][j];
        console.log(table[i][j]);
      }
    }
  }
  return table;
}

console.log(
  multiplicationTable([
    [0, 1, 2, 3, 4],
    [5, 0, 0, 0, 0],
    [6, 0, 0, 0, 0],
    [7, 0, 0, 0, 0],
    [8, 0, 0, 0, 0]
  ])
);
// [
//   [ 0, 1, 2, 3, 4 ],
//   [ 5, 5, 10, 15, 20 ],
//   [ 6, 6, 12, 18, 24 ],
//   [ 7, 7, 14, 21, 28 ],
//   [ 8, 8, 16, 24, 32 ]
// ]

console.log(
  multiplicationTable([
    [0, 3, 5, 7, 9],
    [2, 0, 0, 0, 0],
    [4, 0, 0, 0, 0],
    [6, 0, 0, 0, 0],
    [8, 0, 0, 0, 0]
  ])
);
// // [
// //   [ 0, 3, 5, 7, 9 ],
// //   [ 2, 6, 10, 14, 18 ],
// //   [ 4, 12, 20, 28, 36 ],
// //   [ 6, 18, 30, 42, 54 ],
// //   [ 8, 24, 40, 56, 72 ]
// // ]
