// const profile = [];

const btnDiplay = document.getElementById("view");
const update = document.getElementById("update");

const btn = document.getElementById("btn").addEventListener("click", function () {
    const userName = document.getElementById("input").value;
    const passWord = document.getElementById("password").value;

    if (userName && passWord) {
      
      const profie = JSON.parse(localStorage.getItem("user")) || [];

      const newUser = { userName: userName, passWord: passWord };
      profie.push(newUser);

      localStorage.setItem("user", JSON.stringify(profie));
      alert("added user Succesfuly");
    } else {
      alert("invalid!");
    }
  });

btnDiplay.addEventListener("click", function () {
  const read = localStorage.getItem("user");

  console.log(read);
});



// console.log(profile);