// Создать свой *Ресторан / Магазин / Футбольную команду* используя:

let member = "RM";
member = "V";
member = "Jimin";
member = "Suga";
member = "J-Hope";

const groupName = `BTS ${member}`;

var city = "Seoul";
city = "Busan";

const debut = 2013;
const today = 2022;
const c = `today - debut= ${today - debut}`;

let width = 1820;
let carJK = "Porsche";
let _car = "";

const GROUP_Name = "ARMY";

// 2. Типы данных - string, number, boolean, null, undefined

let count = 7;
const YEAR = 2023;
console.log(YEAR * "Seoul");
console.log(-7 / 0);

const name = "Army";

let fan = true;
fan = false;

let country = null;

let Korea;
console.log(Korea);
Korea = "Корея";
console.log(Korea);

// 3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже)

const userGum = {
  name: "Park Bo Gum",
  isMember: true,
  age: 29,
  friends: {
    first: "V",
    second: "Jimin",
  },
};

userGum.age = 32;

let userAizhan = {
  name: "Aizhan",
  isMember: false,
  age: 31,
  "phone number": "+506080",
};

userAizhan.age = 32;

// Adding to Object
userGum.isActor = true;
userAizhan["isAnimeLover"] = false;

delete userGum.friends;
delete userAizhan["phone number"];
// console.log(userAizhan)

//
userAizhan.name = userGum.name;

// Iterate object
for (let key in userGum) {
  // console.log('key', key, "value is", userGum[key])
}

// Arrays
const countnumber = [0, 1, 2, 3, 4];
const fanbase = ["Russia", "France", "USA"];
console.log(fanbase[3]);
console.log(fanbase.length);

const fans = [
  {
    name: "Bota",
  },
  {
    name: "Park Bo Gum",
  },
];
console.log(fans);

// typeof
console.log(typeof member);
member = 1;
console.log(typeof member);
