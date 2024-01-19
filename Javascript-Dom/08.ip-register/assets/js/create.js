const imageEl = document.querySelector("#left-image");
const formEl = document.querySelector("form");
const closeEl = document.getElementById("closeToast");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(formEl);

  const userValues = [];

  for (const values of formData) {
    userValues.push(values);
  }

  const userOBj = Object.fromEntries(userValues);

  const email = formData.get("email");

  users(email, userOBj);
});

function users(email, values) {
  const keyId = localStorage.getItem(email);

  if (keyId != null) {
    const parsedEmail = JSON.parse(keyId);

    if (email === parsedEmail.email) {
      alert("this email is already exits");
    }
    // } else {
    //   alert("Email does not exist.");
    // }
  } else {
    localStorage.setItem(email, JSON.stringify(values));
    alert("your account created successfully");

    formEl.reset();

    const toastEl = document.getElementById("myToast");

    toastEl.classList.remove("hidden");

    const ipShow = document.querySelector("#ipres");
    fetch("https://ipv4.icanhazip.com/")
      .then((res) => res.text())
      .then((ip) => {
        ipShow.textContent = `Your ip Address is : ${ip}`;
      });
    setInterval(function () {
      window.location.href = "./login.html";
    }, 10000);

    // setInterval(function () {
    // }, 2000);
  }
}

closeEl.addEventListener("click", function () {
  window.location.href = "./login.html";
});
const imagesArr = [
  "left-image.jpg",
  "left-img.jpg",
  "left-side.jpg",
  "left.jpg",
  "left-imgs.jpg",
];

setInterval(function () {
  const getRandomImg = Math.floor(Math.random() * imagesArr.length);

  imageEl.src = imagesArr[getRandomImg];
  imageEl.style.width = "720px";
  imageEl.style.height = "600px";
}, 3000);
