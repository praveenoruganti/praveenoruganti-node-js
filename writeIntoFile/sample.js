const fs = require("fs");
const readLine = require("readline");

const writeIntoFile = (name) => {
  fs.writeFile("greeting.txt", "Hello there, " + name, (err) => {
    if (err) {
      console.log("Error occurred while writing to the File");
    }
  });
};

const rl = readLine.createInterface(process.stdin, process.stdout);

rl.question("What is your name? \n", (name) => {
  writeIntoFile(name);
  rl.close();
});
