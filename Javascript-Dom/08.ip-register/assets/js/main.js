// const formEl = document.querySelector("form");

// formEl.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const formData = new FormData(formEl);

//   const objDt = Object.fromEntries(formData.entries());

//   logMyIn(objDt);
// });

// async function logMyIn(data) {
//   const apiEndPoint = "https://ipv4.icanhazip.com";
//   try {
//     const response = await fetch(apiEndPoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "text/plain",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status ${response.status}`);
//     }
//     const result = await response.text();
//     localStorage.setItem(result, JSON.stringify(data));

//     window.location.href = "./login.html";
//   } catch (err) {
//     console.log(err);
//   }
// }

const book = document.querySelector("#book");
const closeEl = document.querySelector("#close");
const add = document.querySelector("#btnAdd");
const shadow = document.querySelector("#shadow");

add.addEventListener("click", function () {
  book.classList.remove("hidden");
  shadow.classList.remove("hidden");
});

closeEl.addEventListener("click", function () {
  book.classList.add("hidden");
  shadow.classList.add("hidden");
});

const imageEl = document.querySelector("#bg-image");

const imagesArr = ["bg-img2.png", "bg-img.jpg"];

setInterval(function () {
  const getRandomImg = Math.floor(Math.random() * imagesArr.length);

  imageEl.src = imagesArr[getRandomImg];
  imageEl.classList = "object-cover absolute w-full h-screen";
}, 3000);
