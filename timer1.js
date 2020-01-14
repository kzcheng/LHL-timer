// let player = require('play-sound');

// console.log(`${player()}`);

// // $ mplayer foo.mp3
// player()('./foo.mp3', function(err) {
//   if (err) throw err;
// });


// const { createAudio } = require('node-mp3-player');
// const Audio = createAudio();
 
// (async() => {
//   const myFile = await Audio(`${__dirname}/mp3/foo.mp3`);
//   await myFile.volume(0.5);
//   const currentVolume = await myFile.volume(); // 0.5
//   await myFile.loop();
//   await myFile.stop();
// })();



const playSound = function() {
  process.stdout.write(`*`);
};

const processInput = function() {
  let numArray = process.argv;
  for (let num of numArray) {
    num = Number(num);
  }
  return numArray;
};

const INPUT = processInput();

for (let i = 0; i < INPUT.length; i++) {
  if (!(isNaN(INPUT[i]) || INPUT[i] <= 0)) {
    setTimeout(() => {
      playSound();
    }, INPUT[i] * 1000);
  }
}