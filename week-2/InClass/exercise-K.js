const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

function helloThere(arr) {
  for (let i = 0; i < arr.length; i++) {
    const Message = `The student ${i + 1} is ${arr[i]}`;
    console.log(Message);
  }
}

helloThere(students);
