/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  win 
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/
function guildWars(guilds) {
  // Write your code here
  let count = 0;
  let temp = {};
  for (let i = 0; i < guilds.length; i++) {
    temp[guilds[i]] = 0;
    for (let j = 0; j < guilds.length; j++) {
      switch (guilds[i][j]) {
        case "O":
          temp[guilds[i]] += 2;
          break;

        case "o":
          temp[guilds[i]]++;
          break;

        default:
          break;
      }
    }
  }
  let arr = [];
  for (const key in temp) {
    arr.push(temp[key]);
  }

  arr.sort();
  for (const key in temp) {
    if (arr[1] == temp[key]) {
      return "Juara ke-2 adalah tim " + key;
    }
  }
}

console.log(guildWars(["OOOO", "ooOO", "o", "OOo"]));
// Juara ke-2 adalah tim OOo
console.log(guildWars(["OO", "OOO", "ooOOO", "OOOo"]));
// Juara ke-2 adalah tim OOO
console.log(guildWars(["ooo", "oooo", "oo", "o"]));
// Juara ke-2 adalah tim oo