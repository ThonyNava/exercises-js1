function boolChecker(bool) {
  if (typeof bool === "boolean") {
    console.log("You've given me a bool, thanks!");
    return "You've given me a bool, thanks!";
  }

  console.log("No bool, not cool.");
  return "No bool, not cool.";
}

boolChecker(true);
