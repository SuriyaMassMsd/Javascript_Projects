const formEl = document.querySelector("form");
const imgDownload = document.querySelector("#imgDownload");
const imageEl = document.querySelector("#image");
const show = document.querySelector("#show");
const sdimage = document.querySelector("#sdimage");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  hdiamge();
});

function hdiamge() {
  const inputEl = document.querySelector("#input").value;

  show.classList.remove("hidden");

  const result = inputEl.slice(17, 28);

  let url = `https://i.ytimg.com/vi/${result}/maxresdefault.jpg`;

  imageEl.src = url;

  imageEl.style.width = `1280px`;
  imageEl.style.height = `720px`;
}


