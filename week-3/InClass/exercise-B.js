const peopleFromClass1 = ["Thony", "Jesus", "Ramin", "Zaquiel", "Eric"];
const peopleFromClass2 = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

let peopleFromClass1and2 = peopleFromClass1.concat(peopleFromClass2);

console.log(`People from class 1 and 2. Names in alphabetical order: ${peopleFromClass1and2.sort()}`);

let nameChecker = (name, arr) => {
    if (arr.includes(name) === true){
        console.log(`${name} is at the class with ${arr}`);
    } else {
        console.log(`${name} is not at the class with ${arr}`);
    }
}

nameChecker("Rafael",peopleFromClass1and2);
nameChecker("Thony",peopleFromClass1and2);