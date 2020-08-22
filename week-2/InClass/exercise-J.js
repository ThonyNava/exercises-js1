const students_1 = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];
const students_2 = ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"];

function secondMatchesAmy(array) {
  if (array[2] === "Bianca") {
    console.log("Second index matched!");
    return "Second index matched!";
  }
  console.log("Second index not matched");
  return "Second index not matched";
}

secondMatchesAmy(students_1);
secondMatchesAmy(students_2);
