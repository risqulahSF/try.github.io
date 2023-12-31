const container = document.querySelector(".container");
const fireworks = new Fireworks.default(container, {
  particles: 100,
  explosion: 5,
  intensity: 30,
  traceLength: 3,
  rocketsPoint: {
    min: 5,
    max: 90,
  },
  mouse: {
    click: true,
    max: 1,
  },
});

// star
const star = document.getElementsByClassName("star");
for (let a = 1; a <= 200; a++) {
  let sp = document.createElement("span");
  sp.classList.add("star");
  container.appendChild(sp);
}

for (let i = 0; i < star.length; i++) {
  // random star color
  setInterval(function str() {
    const cl = ["#C70039", "yellow", "#fff", "#97FFF4"];
    let rndCL = Math.floor(Math.random() * cl.length);
    star[i].style.backgroundColor = `${cl[rndCL]}`;
  }, 1000);

  //random star place
  let x = Math.floor(Math.random() * 100 + 1);
  let y = Math.floor(Math.random() * 100 + 1);
  star[i].style.top = `${y}%`;
  star[i].style.bottom = `${y}%`;
  star[i].style.left = `${x}%`;
  star[i].style.right = `${x}%`;
}

// countdown
const countDownEnd = new Date("Jan 1, 2024 00:00:00").getTime();
let e = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownEnd - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance <= 0) {
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    fireworks.start();
    clearInterval(e);

    document.getElementById("new").innerHTML = 4;
  }
}, 1);

