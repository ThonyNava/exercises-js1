let apolloCountingdown = (time) => {
  while (time > 0) {
    let message = `${time}s to LIFT-OFF`;
    console.log(message);
    time -= 1;
  }
  console.log("All engines are running... LIFT-OFF!");
};

apolloCountingdown(8);
