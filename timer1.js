let beep = process.stdout.write("\x07");
let myArgs = process.argv.slice(2);
Number(myArgs);

// console.log(myArgs);

const timer = function(myArgs) {
  for (let el of myArgs) {
    setTimeout(() => {
      console.log("beep");
      beep;
    }, Number(el) * 1000);
  }
};

// timer([3, 5, 9, 10, 15]);
timer(myArgs);
