"use strict"
let main = document.querySelector("main")
let img = document.querySelector("main img");
let number = 1;
img.style.height = "500px"
img.style.wigth = "500px"
let timer = document.createElement("div");
    let sec = 31;
    timer.className = "timer";
    timer.innerHTML = "00:<span>00</span>"
    main.append(timer);
    let secSpawn = setInterval(() => {
      let span = document.querySelector("span");
      if (sec>=10) {span.textContent = `${sec}`}
      else {span.textContent = `0${sec}`}
      sec--;
      if (sec<0) {clearInterval(secSpawn)}
    }, 1000);
setTimeout(() => {
  img.setAttribute("src", "img/img7.png")
  img.style.marginTop = "0px"
  img.style.height = "400px"
  img.style.wigth = "500px"
  main.insertAdjacentHTML("beforeend", "<p>YOU LOSE!(next timing = 33sec)</p>")
}, 8000)
setTimeout(() => {
    img.setAttribute("src", `imgG/dead.gif`)
}, 33000)
