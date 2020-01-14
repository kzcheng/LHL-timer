const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beep = function() {
  console.log("BEEEEEEEEEP");
};

stdin.on('data', (key) => {
  // ctrl+c = halt
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  // b = beep
  if (key === 'b') {
    beep();
  }

  let num = Number(key);
  if (num >= 0 && num <= 9) {
    console.log(`setting timer for ${num} seconds...`);
    setTimeout(() => {
      beep();
    }, num * 1000);
  }
});