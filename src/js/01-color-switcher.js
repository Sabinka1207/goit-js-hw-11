const startBtn = document.querySelector("[data-start]")

const stopBtn = document.querySelector("[data-stop]")
stopBtn.addEventListener("click", onStopBtnClick)
const body = document.querySelector("body")

let intervalId = null

startBtn.addEventListener("click", () => {
        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor()
        }, 1000)
    startBtn.setAttribute("disabled", true)
    }
)

// function onStartBtnClick() {
//     const intervalId = setInterval(() => {
//         body.style.backgroundColor = getRandomHexColor
//     }, 1000 )
// }

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute("disabled")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}