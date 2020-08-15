var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];

mentors.forEach(greetings);

function greetings(name) {
  let greeting = `Hello ${name}`;
  console.log(greeting.toUpperCase());
}
