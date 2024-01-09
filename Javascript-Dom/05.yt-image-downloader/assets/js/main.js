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



  if(inputEl.indexOf('=') === 31 && inputEl.length === 43){
    show.classList.remove("hidden");

   let  uri =  inputEl.split('=')

   const ml = uri[1]

  
   
 let watchUrl = `https://i.ytimg.com/vi/${ml}/maxresdefault.jpg`;



  imageEl.src = watchUrl;
  imageEl.style.width = `1280px`;
  imageEl.style.height = `720px`;


  }
   else if(inputEl.indexOf('=') === 31 && inputEl.length === 48){

show.classList.remove("hidden");

  const result = inputEl.slice(17, 28);

 
  let url = `https://i.ytimg.com/vi/${result}/maxresdefault.jpg`;

  imageEl.src = url;

  imageEl.style.width = `1280px`;
  imageEl.style.height = `720px`;
   }
  
   else{

    show.classList.remove("hidden");

  const result = inputEl.slice(32, 43);

 
  let url = `https://i.ytimg.com/vi/${result}/maxresdefault.jpg`;

  imageEl.src = url;

  imageEl.style.width = `1280px`;
  imageEl.style.height = `720px`;
   }
   
}


