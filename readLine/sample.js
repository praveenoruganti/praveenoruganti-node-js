const readLine = require("readline").createInterface(
  process.stdin,
  process.stdout
);

readLine.question("What is your name? \n", (name) => {
  console.log("Hello there, " + name);
  readLine.close();
});
