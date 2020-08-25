/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let startWithT = (arr) => {
  for (i = 0; i < arr.length; i++){
    if(arr[i][0] == "T"){
      console.log(arr[i]);
    }
  }
}

startWithT(daysOfWeek);