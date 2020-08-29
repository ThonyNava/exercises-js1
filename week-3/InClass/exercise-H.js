const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function foundMe(arr, name) {

    for (let i = 0; i < arr.length; i++){
        if (name === arr[i]){
            return `My name is ${name}, and you have found me!`;
        }
    }

    return `My name is ${name}, but you have not found me...`;
}
console.log(foundMe(names, "Thony"));
console.log(foundMe(names, "Irina"));


// With .find() Method

var name = "James";

function findName(names) {

    const myNameIsIncluded = names.find(
    (elem) => {return name === elem}
    );

    if (myNameIsIncluded) {
    return "Found me";
    } else {
    return "Not found me :("
    }
}

console.log(findName(names));