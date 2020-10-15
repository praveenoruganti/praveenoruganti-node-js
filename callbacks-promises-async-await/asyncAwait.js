function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function addAll() {
  let toPrint = await addString("", "A");
  toPrint = await addString(toPrint, "B");
  toPrint = await addString(toPrint, "C");
  console.log(toPrint); // Prints out " A B C"
}
addAll();
