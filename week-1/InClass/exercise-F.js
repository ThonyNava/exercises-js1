let NumberOfStudents = 15;
let NumberOfMentors = 8;
let TotalNumberOfStudentsAndMentors = NumberOfStudents + NumberOfMentors;

let PercentageStudents =
  (NumberOfStudents / TotalNumberOfStudentsAndMentors) * 100;
let PercentageMentors =
  (NumberOfMentors / TotalNumberOfStudentsAndMentors) * 100;

console.log(TotalNumberOfStudentsAndMentors);
console.log(
  "The Percentage of Students is:" + Math.round(PercentageStudents) + "%"
);
console.log(
  "The Percentage of Mentors is:" + Math.round(PercentageMentors) + "%"
);
