// Declare your function here

let createLongGreeting = (name, age) => {
  return `Hello, my name is ${name.trim()} and I'm ${age.toString()} years old`;
};

const greeting = createLongGreeting("Thony", 25);

console.log(greeting);
