const stdin = process.stdin;
let beep = () => {
  process.stdout.write("\x07");
};
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  // Input of key 'b' will beep
  if (key === "b") {
    process.stdout.write("beep");
    beep();
  }
  // Keys 1-9 will set a timer and beep
  if (key > 0 && key < 10) {
    process.stdout.write("Setting timer for " + key + " seconds...\n");
    setTimeout(() => {
      beep();
    }, Number(key) * 1000);
  }
  // \u0003 maps to ctrl+c input. ctrl+c exits the program
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
