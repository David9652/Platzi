var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

functionsleep(ms) {
  returnnew Promise(resolve => setTimeout(resolve, ms));
}

console.log("número:");

rl.on("line", asyncfunction(cmd) {
  let i = 0;

  while (true) {
    i++;
    if (i % cmd == 0) {
      process.stdout.write(`El ${i} es múltiplo de ${cmd}.\n`);
    } else {
      process.stderr.write(`Error, El ${i} NO es múltiplo de ${cmd} \n`);
    }
    await sleep(1000);
  }
});