const formEl = document.querySelector("form");

const users = [
  "sharif-22",
  "vk2401",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "SuriyaMassMsd",
  "danielace1",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
  "swethadsalvatore",
  "jeya-rosini",
  "esakki2104prsnl",
];

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(formEl);

  const userName = formData.get("username");

  newUser(userName);
});

function newUser(userName) {
  fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (userName === data.login) {
        // localStorage.setItem('username',userName)
        // const proFileName =  localStorage.getItem('username',userName)

        fetch(`https://api.github.com/users/${userName}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => profileList(data));
      } else {
        alert("Enter a vaild userName");
      }
    });
}

users.map((dataa) => {
  fetch(`https://api.github.com/users/${dataa}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) =>
      // console.log(data)
      profileList(data)
    );
});

function profileList({
  avatar_url,
  name,
  html_url,
  followers,
  following,
  login,
}) {
  const mainEl = document.querySelector("main");

  let datas = document.createElement("section");

  datas.classList = "bg-[#06647c] p-5 rounded-lg shadow-md shadow-black";

  datas.innerHTML = `
    
    <div class="flex gap-4" >

         <img class="w-32 h-32 ring ring-white rounded-full" src=${avatar_url} alt="anbu.jpg">
         <div class="flex flex-col gap-y-4 justify-center items-center">
          <h1 class="text-2xl font-semibold text-white">${name}</h1>
          <div >
            <span class="bg-[#89fc00] hover:bg-green-600 cursor-pointer border border-zinc-700 px-5 py-1 font-semibold text-black" title="Status" >Active</span>
            <span class="bg-[#ffd60a] hover:bg-yellow-300  cursor-pointer border border-zinc-700 px-5 py-1 font-semibold text-black" title="Role">Intern</span>
         </div>
         
         

          </div>
        </div>

        <div class="mt-2 border-b-2 border-b-black"></div>
        <div class="grid grid-cols-2 gap-4 mt-4 text-center">
          <span class="bg-[#03045e] text-white px-4 py-1 font-semibold "  >Followers : <span>${followers}</span></span>
          <span class="bg-[#211722] text-white px-4 py-1 font-semibold " >Following : <span>${following}</span></span>
         
          
         
        </div>
        <div class="grid gap-y-3 grid-cols-1 text-center mt-4">
          <a class="bg-white cursor-pointer text-black hover:bg-orange-500 hover:text-white px-4 py-1 font-semibold " target="_blank" href="https://github.com/${login}?tab=repositories" >Repositories link </a>
          <a class="bg-black  hover:bg-slate-600 hover:text-black px-10 py-2 text-white font-semibold" href=${html_url} target="_blank">GitHub</a>
        </div>

    `;
  mainEl.append(datas);
}
