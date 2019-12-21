/*
  ================
  GET MEMBER SUMMARY
  ================

  Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi
  berdasarkan data-data seperti nama depan, nama belakang, dan umur. Fungsi ini
  akan mengembalikan sebuah object dengan keyName total member, anggota yang paling tua
  , anggota yang paling muda dan avarage umur semua member.

  rules:
  - TIDAK boleh menggunakan built in function .sort()
  - TIDAK boleh menggunakan built in function .indexOf(), .include()
  - TIDAK boleh menggunakan built in function .Math.max() dan .Math.min()
  - TIDAK boleh menggunakan built in function .map(), .filter()
  - TIDAK boleh menggunakan regex ( match, replace, dll)
  - asumsi data memiliki umur yang berbeda-beda

  examples:
  - INPUT =
    [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }, {
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }],

  - OUTPUT = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
      },
      average_member_age = 23
    }
*/

const bubbleSort = function (arr) {
  let len = arr.length - 1;
  for (let i = len; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

const selectionSort = function (arr) {
  var minIdx, temp,
    len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

const getAverage = function (arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  let result = String(temp / arr.length);
  let finalResult = '';
  let check = 0;
  for (let j = 0; j < result.length; j++) {
    if (result[j] === '.') {
      if (result[j+1] < 5) {
        break;
      }
      else if (result[j+1] >= 5) {
        check++;
        break;
      }
    }
    finalResult += result[j]
  }

  if (check === 0) {
    return Number(finalResult);
  }
  else if (check === 1) {
    return Number(finalResult) + 1;
  }
}

function getMemberSummary(member) {
    // Write your code here
  let result = {};
  result.total_member = member.length;
  result.oldest_member = false;
  result.youngest_member = false;

  if (member.length === 1) {
    result.oldest_member = member;
    result.youngest_member = member;
    result.average_member_age = member[0].age;
    return result;
  }
  else if (member.length === 0) {
    return 'NO DATA';
  }

  let memberAges = [];

  for (let i = 0; i < member.length; i++) {
    memberAges.push(member[i].age);
  }

  let memberAgesSorted = selectionSort(memberAges);

  for (let j = 0; j < member.length; j++) {
    if (member[j].age === memberAgesSorted[0]) {
      result.youngest_member = {
        full_name: member[j].first_name + ' ' + member[j].last_name,
        age: member[j].age
      };
    }
    else if (member[j].age === memberAgesSorted[memberAgesSorted.length - 1]) {
      result.oldest_member = {
        full_name: member[j].first_name + ' ' + member[j].last_name,
        age: member[j].age
      };
    }
  }

  result.average_member_age = getAverage(memberAges);

  return result;
}

console.log(getMemberSummary([{
        first_name: 'Wika',
        last_name: 'Silo',
        age: 30
      }, {
        first_name: 'Dhani',
        last_name: 'Damara',
        age: 27
      }, {
        first_name: 'Fandy',
        last_name: 'Barestu',
        age: 18
      }, {
        first_name: 'Acha',
        last_name: 'Acha',
        age: 29
      }, {
        first_name: 'Zena',
        last_name: 'Villenia',
        age: 32
      }, {
        first_name: 'Annisa',
        last_name: 'Ayu',
        age: 21
      }],
));
//output
/*
 {
   total_member: 6,
   oldest_member: {
      full_name: 'Zena Villenia',
      age: 32,
   },
   youngest_member: {
    full_name: 'Fandy Barestu',
    age: 18,
   },
   average_member_age: 26
 }
*/

console.log(getMemberSummary(
  [{
    first_name: 'Rama',
    last_name: 'Diansyah',
    age: 20
  }, {
    first_name: 'Malik',
    last_name: 'Adhi',
    age: 21
  }, {
    first_name: 'Dita',
    last_name: 'Zakiah',
    age: 27
  }]
))

/*
  total_member: 3,
  oldest_member: {
      full_name: 'Dita Zakiah',
      age: 27,
   },
  youngest_member: {
    full_name: 'Rama Diansyah',
    age: 20,
   },
   average_member_age: 23
*/

console.log(getMemberSummary(
  [{
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 20
  }]
))
/*
  {
    total_member: 1,
    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    average_member_age: 20
  }
*/

console.log(getMemberSummary([])) //NO DATA