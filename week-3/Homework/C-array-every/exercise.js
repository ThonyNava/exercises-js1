/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
// var group = ["Austine", "Dany", "Swathi", "Daniel", "Alfredo"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
// var group = ["Austine", "Dany", "Swathi"];

// ALternative code •••
var commonElements = [];
var nonCommonElements = [];

let OnlyStudents = (arrAll, arrFew) => {
  let checker = true;
  for (let i = 0; i < arrFew.length; i++) {
    if (arrAll.includes(arrFew[i])) {
      // console.log(arrFew[i]);
      commonElements.push(arrFew[i]);
    } else {
      // console.log("false");
      nonCommonElements.push(arrFew[i]);
      checker = false;
    }
  }
  return checker;
};

let isOrAre = (arr) => {
  if (arr.length < 2) {
    return "is";
  } else {
    return "are";
  }
};

var groupIsOnlyStudents = OnlyStudents(students, group);
// •••

///////////////////
// Homework
// let OnlyStudents = (student) => {
//   return students.includes(student);
// };
// var groupIsOnlyStudents = group.every(OnlyStudents);
///////////////////

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log(
    "The group does not contain only students. The students are" +
      commonElements.map((element) => {
        return ` ${element}`;
      }) +
      ` ; but,${nonCommonElements.map((element) => {
        return ` ${element}`;
      })} ${isOrAre(nonCommonElements)} not.`
  );
}

/* EXPECTED RESULT */

// The group does not contain only students
