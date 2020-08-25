const peopleOnTable = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

console.log(`Names of the people on my table: ${peopleOnTable}`);
console.log(`We are: ${peopleOnTable.length}`);

peopleOnTable.unshift("First");
peopleOnTable.push("Last");

console.log(`Names of the people on my table: ${peopleOnTable}`);