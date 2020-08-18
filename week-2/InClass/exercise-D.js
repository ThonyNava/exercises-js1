// variable assigned to boolean value
let mood = 2;

let MoodChecker = (input) => {
  switch (input) {
    case "happy":
      console.log("Good job, you're doing great!");
      break;
    case "sad":
      console.log("Every cloud has a silver lining");
      break;
    default:
      if (typeof input === "number") {
        console.log("Beep beep boop");
        break;
      }
      console.log("I'm sorry, I'm still learning about feelings!");
  }
};

MoodChecker(mood);
