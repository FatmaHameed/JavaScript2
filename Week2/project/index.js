const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const timeControl = document.querySelector('p');
const timeUp = document.getElementById('time-up');
const timeDown = document.getElementById('time-down');

// to increase or decrease the time
let timeControlNo = 25;
timeControl.innerText = timeControlNo;

// to stop changing while the time is playing
// function toStopChanging() {
//   timeControlNo = timeControlNo;
//   minutes.innerText = minutes.innerText;
// }
// let flag;
// timeUp.addEventListener('click', () => {
//   flag = !flag;
//   if (!flag) {
//     setTimeUp();
//   } else {
//     toStopChanging();
//   }
// });

// store a reference to a timer variable:

let startTimer;
function setTimeUp() {
  if (startTimer === undefined) {
    minutes.innerText++;
    timeControlNo = minutes.innerText;
    timeControl.innerText = timeControlNo;
    if (timeControlNo <= 9) {
      return (timeControl.innerText = `0${timeControlNo}`);
    }
  }
}

timeUp.addEventListener('click', setTimeUp);

function setTimeDown() {
  if (startTimer === undefined) {
    minutes.innerText--;
    timeControlNo = minutes.innerText;
    timeControl.innerText = timeControlNo;
    if (timeControlNo <= 0) {
      timeControlNo = 0;
      timeControl.innerText = timeControlNo;
    }
    if (timeControlNo <= 9) {
      return (timeControl.innerText = `0${timeControlNo}`);
    }
  }
}

timeDown.addEventListener('click', setTimeDown);
play.addEventListener('click', function start() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert('timer is running');
  }
});

stop.addEventListener('click', function reSet() {
  minutes.innerText = 25;
  seconds.innerText = '00';
  timeControl.innerText = 25;
  pauseTimer();
  startTimer = undefined;
});

pause.addEventListener('click', function() {
  pauseTimer();
  startTimer = undefined;
});

function timer() {
  // count down
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  }
  if (minutes.innerText == 0 && seconds.innerText == 0) {
    minutes.innerText = 'Time is up';
    seconds.innerText = '!';
    document.getElementById('colon').innerText = '';
    pauseTimer();
  }
}

// pause function
function pauseTimer() {
  clearInterval(startTimer);
}

// // 'use strict';

// /**
//   In this week 's project you'll be making a Pomodoro Clock!
//   A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

//   If the timer is running, the user can 't change the session length anymore
//   Use at least 3 functions
//   Display minutes and seconds
//   If the timer finishes the timer should be replaced by the message: Time 's up!
//  *
//  */
// const timeControl = document.querySelector('p');
// const timeUp = document.getElementById('time-up');
// const timeDown = document.getElementById('time-down');
// const timer = document.getElementById('timer');
// const play = document.getElementById('play');
// const pause = document.getElementById('pause');
// const stop = document.getElementById('stop');
// // const start = document.getElementById('start');
// // timeControl.innerText = 20;
// let timeControlNo = 25;
// timeControl.innerText = timeControlNo;
// const minutes = 2;

// // timeControlNo = 30;
// let timeLeft = minutes * 60;
// let counter = 0;
// function setTimeUp(e) {
//   timeControlNo++;
//   timeControl.innerText = timeControlNo;
//   if (timeControlNo <= 9) {
//     return (timeControl.innerText = `0${timeControlNo}`);
//   }
// }

// function setTimeDown(e) {
//   timeControlNo--;
//   timeControl.innerText = timeControlNo;
//   if (timeControlNo <= 0) {
//     timeControlNo = 0;
//     timeControl.innerText = timeControlNo;
//   }
//   if (timeControlNo <= 9) {
//     return (timeControl.innerText = `0${timeControlNo}`);
//   }
// }
// function reSet(e) {
//   timeLeft = minutes * 60;
//   counter = 0;
//   timer.innerText = convertSeconds(timeLeft - counter);
//   // play.removeEventListener('click', setUp, true);
// }

// timeUp.addEventListener('click', setTimeUp);
// timeDown.addEventListener('click', setTimeDown);
// play.addEventListener('click', setUp);
// stop.addEventListener('click', reSet);

// function convertSeconds(s) {
//   const min = Math.floor(s / 60);
//   const sec = s % 60;
//   if (min < 10 && sec < 10) {
//     return `0${min}:0${sec}`;
//   }
//   if (min < 10) {
//     return `0${min}:${sec}`;
//   }
//   return `${min}:${sec}`;
// }

// function setUp(e) {
//   timer.innerText = convertSeconds(timeLeft - counter);
//   function timeIt() {
//     if (timeLeft === counter) {
//       timer.innerText = 'Time is Up';
//       clearInterval();
//     } else {
//       counter++;
//       timer.innerText = convertSeconds(timeLeft - counter);
//     }
//   }

//   setInterval(timeIt, 1000);
// }

// // setUp();
