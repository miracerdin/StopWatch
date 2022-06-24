const start = document.querySelector(".start");
const stoper = document.querySelector(".stop");
const sayac = document.querySelector(".sayac");
const milliseconds = document.querySelector(".milliseconds");
const seconds = document.querySelector(".seconds");
const reset = document.querySelector(".reset");
const istart = document.querySelector(".fa-play");
let Interval;
let seconds1 = 00;
let tens1 = 00;
let flag = true;

start.addEventListener("click", () => {
  clearInterval(Interval);

  if (flag) {
    Interval = setInterval(startTimer, 10);
    flag = false;
    istart.classList.add("fa-pause");
    istart.classList.remove("fa-play");
  } else {
    flag = true;
    istart.classList.remove("fa-pause");
    istart.classList.add("fa-play");
  }
});

// stoper.addEventListener("click", () => {
//   clearInterval(Interval);
// });

reset.addEventListener("click", () => {
  clearInterval(Interval);
  tens1 = "00";
  seconds1 = "00";
  milliseconds.innerHTML = tens1;
  seconds.innerHTML = seconds1;
  istart.classList.remove("fa-pause");
  istart.classList.add("fa-play");
  flag = true;
});
// const myInterval = setInterval(startTimer, 10);

function startTimer() {
  tens1++;

  if (tens1 <= 9) {
    milliseconds.innerHTML = "0" + tens1;
  }

  if (tens1 > 9) {
    milliseconds.innerHTML = tens1;
  }

  if (tens1 > 99) {
    console.log("seconds");
    seconds1++;
    seconds.innerHTML = "0" + seconds1;
    tens1 = 0;
    milliseconds.innerHTML = "0" + 0;
  }

  if (seconds1 > 9) {
    seconds.innerHTML = seconds1;
  }
}

// function endTimer() {
//   clearInterval(function () {
//     document.querySelector(".milliseconds").innerHTML = "00";
//   });
// }

// window.onload = function () {
//   var seconds = 00;
//   var tens = 00;
//   var appendTens = document.getElementById("tens");
//   var appendSeconds = document.getElementById("seconds");
//   var buttonStart = document.getElementById("button-start");
//   var buttonStop = document.getElementById("button-stop");
//   var buttonReset = document.getElementById("button-reset");
//   // var Interval;

//   buttonStart.onclick = function () {
//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 10);
//   };

//   buttonStop.onclick = function () {
//     clearInterval(Interval);
//   };

//   buttonReset.onclick = function () {
//     clearInterval(Interval);
//     tens = "00";
//     seconds = "00";
//     appendTens.innerHTML = tens;
//     appendSeconds.innerHTML = seconds;
//   };

//   function startTimer() {
//     tens++;

//     if (tens <= 9) {
//       appendTens.innerHTML = "0" + tens;
//     }

//     if (tens > 9) {
//       appendTens.innerHTML = tens;
//     }

//     if (tens > 99) {
//       console.log("seconds");
//       seconds++;
//       appendSeconds.innerHTML = "0" + seconds;
//       tens = 0;
//       appendTens.innerHTML = "0" + 0;
//     }

//     if (seconds > 9) {
//       appendSeconds.innerHTML = seconds;
//     }
//   }
// };
