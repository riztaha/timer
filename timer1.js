let beep = process.stdout.write("\x07");
let myArgs = process.argv.slice(2);

// console.log(myArgs);

const timer = function(myArgs) {
  for (let el of myArgs) {
    if (el === "true" || el === "false") {
      return;
    } else if (el > 0) {
      setTimeout(() => {
        console.log("beep");
        beep;
      }, Number(el) * 1000);
    } else {
      return;
    }
  }
};

timer([3, 5, 9, 10, 15]);
// timer(myArgs);
