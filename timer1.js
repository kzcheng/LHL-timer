const INPUT = [10, 3, 5, 15, 9];

for (let i = 0; i < INPUT.length; i++) {
  if (isNaN(INPUT[i]) || INPUT[i] <= 0) {
    setTimeout(() => {
      process.stdout.write(`*`);
    }, INPUT[i] * 1000);
  }
}