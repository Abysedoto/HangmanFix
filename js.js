"use strict"
let arrWords = ["ДЕВОЧКА", "АРМИЯ", "БЕЗДАРЬ", "ЩЕДРОСТЬ", "УБИЙСТВО",
"ПРОТЕЧКА", "САНСКРИТ", "ЛЮСТРА", "АБРИКОС", "ГРУЗОВИК", "АУКЦИОН"];
let indexWord = Math.floor(0 + Math.random() * (arrWords.length-1 + 1 - 0))
let word = arrWords[indexWord];
let picNum = 1;
let audioId = 1;
let checkWin = "gg";
let winValue = false;
// Math.floor(0 + Math.random() * (2 + 1 - 0))
let allButton = document.querySelectorAll(".keyboard >button")
for (let i = 0; i<word.length; i++) {
  let wordWay = document.querySelector(".word")
  let p = document.createElement("p");
  p.textContent = "*"
  p.id = `id${i}`
  wordWay.append(p);
}
for (let k = 0; k<2; k++) {
  let randomNum = Math.floor(0 + Math.random() * (word.length-1 + 1 - 0))
  let findId = document.querySelector(`#id${randomNum}`)
  findId.textContent = word.split("")[randomNum]
}
console.log(allButton);
for (let item of allButton) {
  item.addEventListener("click", function() {
    if (word.split("").includes(item.textContent)) {
      let findWord = document.querySelector(`#id${word.indexOf(item.textContent)}`)
      console.log(findWord);
      findWord.textContent = item.textContent
      item.style.backgroundColor = "#66ff00"
      let main = document.querySelector("main");
      let audioHrust1 = `<audio src="mp3/true.mp3" id="audioId${audioId}" autoplay></audio>`
      main.insertAdjacentHTML("beforeend" ,audioHrust1);
      let copyAudioId = audioId;
      let findP = document.querySelectorAll(".word p")
      let arr = [];
      for (let itemP of findP) {
        if (itemP.textContent == "*") {
          arr.push("*")
        }
      }
      if (arr.length == 0) {
        setTimeout(() => location.href = "win.html", 1500)
      }
      setTimeout(() => {
        if (winValue) {
          location.href = "win.html"
        }
      }, 1500)
      setTimeout(() => {
        let findAudio = document.querySelector(`#audioId${copyAudioId}`)
        findAudio.remove()
      }, 6000)
    } else {
        nextPic()
        let main = document.querySelector("main");
        let audioHrust = `<audio src="mp3/hrust.mp3" id="audioId${audioId}" autoplay></audio>`
        main.insertAdjacentHTML("beforeend" ,audioHrust);
        let copyAudioId = audioId
        audioId++;
        item.style.backgroundColor = "#ff2400"
        let CheckIdImg = document.querySelector(".gallows img");
        if (CheckIdImg.getAttribute("src") == `img/img6.png`) {
          location.href = "lose.html"
        }
        setTimeout(() => {
          let findAudio = document.querySelector(`#audioId${copyAudioId}`)
          findAudio.remove()
        }, 1000)
      }
  }, {once: true})
}
function nextPic() {
  let img = document.querySelector(".gallows img")
  picNum++;
  if (picNum < 7) {
    img.setAttribute("src", `img/img${picNum}.png`)
  } 
}