/*
================
Piramida Array
================
Name :_____________

[INSTRUCTIONS]
piramidaArray adalah sebuah function yang menerima satu parameter berupa number.
function akan membuat array sebanyak number yang diberikan, dan akan mereturn urutan angka sebanyak angka tersebut di dalam array
Jika parameter tersebut berisikan 0 atau bukan angka, maka function akan mereturn angka 0

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.


[EXAMPLE]
piramidaArray(2)
output: [ [ 1 ] , [ 2, 2 ] ]
*/

function piramidaArray(number) {
    // Write your code here
    if (isNaN(number) === true || number === 0) {
        return 0;
    }

    let result = [];

    for (let i = 0; i < number; i++) {
        let temp = [];
        for (let j = 1; j <= i; j++) {
            temp.push(i);
        }
        result.push(temp);
    }

    return result;
}

console.log(piramidaArray(2)); // [ [], [ 1 ] ]
console.log(piramidaArray(5)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ], [ 4, 4, 4, 4 ] ]
console.log(piramidaArray('A')); // 0
console.log(piramidaArray(4)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ] ]
console.log(piramidaArray(0)); // 0