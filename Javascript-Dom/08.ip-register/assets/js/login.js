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

  const email = formData.get("email");
  const password = formData.get("password");

  users(email, password);
});

function users(email, password) {
  const keyId = localStorage.getItem(email);

  //   console.log(keyId);

  if (keyId != null) {
    const getEmail = JSON.parse(keyId);

    if (email === getEmail.email && password === getEmail.password) {
      alert("your account loged In successfully");
      const toastEl = document.getElementById("myToast");

      toastEl.classList.remove("hidden");

      const ipShow = document.querySelector("#ipres");
      fetch("https://ipv4.icanhazip.com/")
        .then((res) => res.text())
        .then((ip) => {
          ipShow.textContent = `Your ip Address : ${ip}`;
        });
      setInterval(function () {
        window.location.href = "/";
      }, 10000);
      // window.location.href = "./index.html";
    } else {
      alert("password is invalid");
    }
  } else {
    alert("Invalid user");
    formEl.reset();
  }
}

closeEl.addEventListener("click", function () {
  window.location.href = "/";
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
