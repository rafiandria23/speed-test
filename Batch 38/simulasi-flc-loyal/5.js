/**
 * =======
 * MatchIn
 * =======
 * 
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 * 
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                          | Job Experience (years) |
 * | ------------ | ---------------------------------------- | ---------------------- |
 * | PT ABC       | XML, Kotlin, HTML, C++, Java, Javascript |            5           |
 * | PT HIJ       | Python, Javascript, HTML                 |            3           |
 * | PT JKL       | C++, Java                                |            1           |
 * | PT XYZ       | Golang, Java, JQuery                     |            2           |
 * | PT KLM       | Python, Javascript, HTML                 |            4           |
 * 
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 * 
 * [Example]
 *  @applicant = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'HTML'],
 *    experience: 3
 *  }
 *   
 * Penjelasan:
 * - Tidak masuk PT ABC => hanya punya javascript dan pengalaman < 5 tahun
 * - Masuk PT HIJ => memiliki skill yang cocok (javascript & html) dan pengalaman 3 tahun
 * - Tidak masuk PT JKL => Tidak memiliki skill yang cocok
 * - Tidak masuk PT XYZ => Tidak memiliki skill yang cocok
 * - Tidak masuk PT KLM => hanya memiliki skill javascript dan pengalaman < 4 tahun
 * 
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['Javascript', 'HTML']
 *   }
 * ]
 * 
 * [Rules]
 * 1. DILARANG menggunakan built in function: map, reduce, filter
 * 2. Skill dalam key matchedSkills tidak perlu berurut sesuai test case selama skill yang cocok sesuai
 */


function matchIn(applicant) {
  // Write your code here
  let companies = {
    ptABC: {
      companyName: 'PT ABC',
      requiredSkills: ['XML', 'Kotlin', 'HTML', 'C++', 'Java', 'JavaScript'],
      jobExperience: 5
    },
    ptHIJ: {
      companyName: 'PT HIJ',
      requiredSkills: ['Python', 'JavaScript', 'HTML'],
      jobExperience: 3
    },
    ptJKL: {
      companyName: 'PT JKL',
      requiredSkills: ['C++', 'Java'],
      jobExperience: 1
    },
    ptXYZ: {
      companyName: 'PT XYZ',
      requiredSkills: ['Golang', 'Java', 'jQuery'],
      jobExperience: 2
    },
    ptKLM: {
      companyName: 'PT KLM',
      requiredSkills: ['Python', 'JavaScript', 'HTML'],
      jobExperience: 4
    }
  };

  let result = [];

  for (const key in companies) {
    let internalResult = {
      companyName: companies[key].companyName,
      matchedSkills: []
    }

    for (let i = 0; i < companies[key].requiredSkills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (companies[key].requiredSkills[i] === applicant.skills[j]) {
          internalResult.matchedSkills.push(applicant.skills[j]);
        }
        else {
          continue;
        }
      }
    }

    if ((internalResult.matchedSkills.length >= 2) && (applicant.experience >= companies[key].jobExperience)) {
      result.push(internalResult);
    }
    else {
      continue;
    }
  }

  return result;
}

var applicant1 = {
  name: 'Alpha',
  skills: ['Android', 'Kotlin', 'XML', 'Python', 'PHP'],
  experience: 5
}
console.log(matchIn(applicant1))
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'XML', 'Kotlin' ] },
// ]

var applicant2 = {
  name: 'Beta',
  skills: ['PHP', 'HTML', 'CSS', 'jQuery', 'Python'],
  experience: 1
}
console.log(matchIn(applicant2))
// Unqualified!

var applicant3 = {
  name: 'Charlie',
  skills: ['HTML', 'Photoshop', 'CSS', 'JavaScript'],
  experience: 7
}
console.log(matchIn(applicant3))
// [
//   { companyName: 'PT ABC', matchedSkills: ['HTML', 'JavaScript'] },
//   { companyName: 'PT HIJ', matchedSkills: ['JavaScript', 'HTML'] },
//   { companyName: 'PT KLM', matchedSkills: ['JavaScript', 'HTML'] }
// ]

var applicant4 = {
  name: 'Delta',
  skills: ['Python', 'PHP', 'C++', 'JavaScript'],
  experience: 3
}
console.log(matchIn(applicant4))
// [
//   { companyName: 'PT HIJ', matchedSkills: ['Python', 'JavaScript'] }
// ]