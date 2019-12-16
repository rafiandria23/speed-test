/**
 * ===============
 * Closest to Zero
 * ===============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan nilai temperatur yang paling dekat dengan 0 (nol).
 * 
 * [Description]
 * 1. Function menerima satu parameter berupa array of @temperatures
 * 2. Function mengembalikan sebuah nilai temperatur (positif ataupun negatif) yang paling dekat dengan 0
 * 3. Jika terdapat dua nilai yang sama (positif dan negatif) maka tampilkan nilai positifnya
 * 4. Jika input berupa array kosong, maka kembalikan nilai 0
 * 
 * [Example]
 * @input = [-1, 2, -3, 4, -5]
 * Berdasarkan input tersebut, -1 merupakan angka yang paling dekat dengan 0, maka:
 * @output = -1
 * 
 * @input = [10, -14, -87, 43, -76, -10, 86, 94]
 * Berdasarkan input tersebut, terdapat dua nilai yang paling dekat dengan 0 => 10 dan -10,
 * maka ambil nilai positifnya, sehingga:
 * @output = 10
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 1. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find, findIndex
 * 1. Dilarang menggunakan built-in function: Math.max, Math.min
 * 1. Dilarang menggunakan built-in function: sort
 */

let mySort = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function closestToZero(arr) {
  // Write your code here
  if (arr.length === 0) {
    return 0;
  }

  let pos = [];
  let neg = [];
  let special = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    }
    else if (arr[i] < 0) {
      neg.push(arr[i]);
    } else if (arr[i] === 0) {
      return 0;
    }
  }

  let posSorted = mySort(pos);
  let negSorted = mySort(neg);

  let result = 0;

  if (pos.length === 0) {
    result += negSorted[negSorted.length - 1];
  }
  else if (neg.length === 0) {
    result += posSorted[0];
  } else {
    if (posSorted[0] === Math.abs(negSorted[negSorted.length - 1])) {
      result += posSorted[0];
    }
    else if (posSorted[0] > Math.abs(negSorted[negSorted.length - 1])) {
      result += negSorted[negSorted.length - 1];
    }
    else if (posSorted[0] < Math.abs(negSorted[negSorted.length - 1])) {
      result += posSorted[0];
    }
  }

  return result;
}

console.log(closestToZero([1, -2, -8, 4, 5])) // 1
console.log(closestToZero([-12, -50, -137])) // -12
console.log(closestToZero([42, -5, 12, 21, 5, 24])) // 5
console.log(closestToZero([42, 5, 12, 21, -5, 24])) // 5
console.log(closestToZero([-5, -4, -2, 12, -40, 4, 2, 18, 11, 5])) // 2
console.log(closestToZero([-5, 8, 62, -48, 0, -59, -76, 2, 1, -56, 37, -98, -1])) // 0
console.log(closestToZero([])) // 0