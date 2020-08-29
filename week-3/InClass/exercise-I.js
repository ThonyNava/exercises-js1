const messyStrings = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
];

// Using a for loop

let stringCherryPicker = (arr) => {

    var arrStrings = [];

    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "string"){
            arrStrings.push(arr[i].toUpperCase()+"!");
        }
    }

    console.log(arrStrings);
}

stringCherryPicker(messyStrings);

//  Using Chaining

let findSting = (arr) => {
	return arr
		.filter((element) => typeof element === 'string')
		.map((element) => element.toUpperCase())
		.map((element) => `${element}!`);
};

console.log(findSting(messyStrings));