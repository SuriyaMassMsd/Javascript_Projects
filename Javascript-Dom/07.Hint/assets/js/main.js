const displayEl = document.querySelector("h1");
const urlApi = "https://api.adviceslip.com/advice";
const btnEl = document.querySelector("button");

btnEl.style.display = "none";
const audio = document.querySelector("#audio");

btnEl.addEventListener("click", async function () {
  try {
    const hintResult = await hintApi();
    displayEl.innerText = hintResult;
    audio.play();
  } catch (err) {
    console.error("something error on your site" + err);
  }
});

async function hintApi() {
  try {
    const hintResult = await fetch(urlApi);
    const adviceResponse = await hintResult.json();
    displayEl.innerText = adviceResponse.slip.advice;
    return adviceResponse.slip.advice;
  } catch (err) {
    console.error("something error on your site" + err);
  }
}
hintApi();
btnEl.style.display = "block";
