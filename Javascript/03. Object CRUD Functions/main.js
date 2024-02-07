const itMe = {
  name: "Suriya",
  age: 21,
  email: "ksmass2001@gmail.com",
  gender: "male",
  isCommitted: null,
  myWish: ["creating memes", "watching web series", "playing physical games"],
  whoIsHe: undefined,

  myProfile() {
    return `hello i'm ${this.name} , i am ${this.age} years old , please contact me via ${this.email} `;
  },
};

// Read

const news = itMe.myProfile();

// Update

const old = itMe.myWish.splice(1, 0, "movies");

console.log(itMe.myWish);

// delete

const del = delete itMe.age;

console.log(itMe);

// create

itMe.phoneNUmber = 9399839833;

console.log(itMe);
