/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |

  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley(word) {
  // code here
  if (word.length <= 2) {
    console.log("invalid string");
    return;
  }
  for (let i = 0; i < word.length; i++) {
    if (i == 0) {
      console.log(word[i].concat("-".repeat(word.length - 2) + "|"));
    }

    if (i > 0 && i < word.length - 1) {
      let temp = "";
      for (let j = 0; j < word.length; j++) {
        if (j == 0) {
          temp += "|";
        } else if (j == i) {
          temp += word[i];
        } else if (j > 0 && j < i) {
          temp += " ";
        } else if (j > i && j < word.length - 1) {
          temp += " ";
        } else if (j == word.length - 1) {
          temp += "|";
        }
      }
      console.log(temp);
    }

    if (i == word.length - 1) {
      console.log("|".concat("-".repeat(word.length - 2) + word[i]));
    }
  }
}

// TEST CASES

diagonAlley("kuroko");
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log("");
diagonAlley("non");
/*
  n-|
  |o|
  |-n
*/
console.log("");
diagonAlley("basuke");
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log("");
diagonAlley("no");
// Invalid input
