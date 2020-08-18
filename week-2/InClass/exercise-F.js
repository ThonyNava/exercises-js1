let usernameChecker = (username, userType) => {
  var valid_user = `The ${userType} ${username} is a valid user`;
  var invalid_user = `The ${userType} ${username} is a invalid user`;

  if (username.length >= 5 && username.length <= 10) {
    var user_length = true;
  } else {
    var user_length = false;
  }

  if (username[0] === username[0].toUpperCase()) {
    var user_UpperCase = true;
  } else {
    var user_UpperCase = false;
  }

  if (user_UpperCase === true && user_length === true) {
    console.log(valid_user);
  } else {
    if (userType === "admin" || userType === "manager") {
      console.log(valid_user);
    } else {
      console.log(invalid_user);
    }
  }
};

usernameChecker("Thony", "student");
usernameChecker("thony", "student");
usernameChecker("thony", "admin");
usernameChecker("thony", "manager");
usernameChecker("1234", "user");
usernameChecker("12345", "user");
usernameChecker("1234567890", "user");
usernameChecker("12345678901", "user");
