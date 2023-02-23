"use strict";
/*
let a = 100;
let b = 20;

let c = a + b;
        console.log(c)

let    counter = 0;
/*
while (counter <= a) {
  console.log("na", counter);
  counter += 1;
}


for (let i = 0;  i < 5;  i++){
  console.log("shut - up");
};
/*
let josh = "This Is My Name , And Your Gay ";
console.log(josh);
console.log(josh.length);


true || false; 

/*
alert("hagotti");
*/
/*
const shoes = ["jordans", "rebox", "kyries", "New balance"]

shoes[1] = "Sketchers"

const lastIndexOf = shoes.length - 1; 

      console.log(lastIndexOf);
/*
console.log(shoes[lastIndexOf])
*/
/*
for (let i = 0; i < shoes.length; i += 1){
      console.log(shoes[i])
}


/*

const buildings = ["huge", "large", "medium", "small"];

let correctbuilding = buildings[1];

let message;

for (const build of buildings) {
  
  if (build === correctbuilding) {
    message = "correct building";
    
  } else {
    message = "incorrect building";
  }


   

  console.log(message);
}
*/
/*


const mice = "redEyes";

console.log(mice.split(" "));

const speaker = ["jbl" , "bose" , "sony" , "raycon"];
console.log(speaker.join("-$-"));


let correctSpeaker = "bose";

let trueSpeaker = speaker.includes(correctSpeaker);


if (trueSpeaker) {
  console.log(`you chose a ${correctSpeaker} speaker,have a nice day`)
}
*/

/*
const speaker = ["1" ,"2" , "3", "4" , "5" , "6" , "7" , "8" , "9" , "10"];
  
console.log(speaker.slice(2, 6));
*/

/*
const animals = ["cat", "dog", "chicken", "ostrich"];

/*
let smallerAnimal = (animals.splice(1,0 , "hi", "no")); // splice return the array from its index until the N index from second number (play around with numbers to see) adds the ADD in place of index the zero 0 tells it not to delete any or X amount of elements
smallerAnimal.splice(1,0, "hi" , "bye" , "gnite" , ); // when adding the N number tells you how many to delete , but the ADD adds it in that position however if you make the N larger then the numbers your adding it still deletes
console.log(smallerAnimal);
console.log(animals);  // now that splice is used it shortend the original list (not whats returned by the splice) from the index , and how many elements after that depend on the N number
*/
/*
const insects = ["praying Mantis", "monarch Butterfly"];
let   organisms = (animals.concat(insects));// concatenates animals + insects , so animals is first then insects 
      console.log(organisms);
*/
    
/*
function jail(time) {
  /*
  return time < 30 ? "your on standby"
    : `your in jail for ${time} days`; // can use either RETURN OR 2X CONSOLE.LOG 
  
  time < 30 ? console.log("your on standby") : console.log(`your in jail for ${time} days`);
  
}

(jail(20));
*/
/*
function faang() {
  console.log("hi")
}
faang();

/*
function multiply(a, b, c) {
  console.log((a * b * c) + " " ,"hi")
}

multiply(20,30,5)
*/
/*
function iphone(iphone = "iphone 13", price = "999$", deppresionlevel = 10) {
  
  console.log(`your iphone ${iphone} ,your price was ${price} Dollars , and your Deppresion Level was ${deppresionlevel}`)
}
iphone(30, 10000, 100);
*/
/*
function add() {
  
  let total = 1;
  for (const ad of arguments) {
    total *= ad;
  }
    return total;
}
console.log(add(5, 5, 5, 5));

function tvs(...args) {
  let total = 1;

  for (const multiply of args) {
    total *= args;
  }
  return console.log(args)
}

tvs(1,1,7771);

*/
/*
function storeSupply(cart, supply = 500) {
    
  if (cart === 0) {
    console.log("Enter an amount greater then 0")
     return;                                     // try taking return away and putting the argument as 0 , you will see it shoes up 2 times , 1 enter greater anount ,2 your order was placed thats why we need that return to end the function
  }
  if (cart > supply) {
    console.log("Sorry we dont have enough in our supply at the moment")
    return; 
    
  }

  console.log("your order was placed")
}
 
storeSupply(600);
// look back at 3,module 2   return early try to see if it works the way i sent to oliver

*/
/*
function getFirstAndLast(array) {
  
  let first = array[0];

  let last = array[array.length - 1] // if you dont put array twice , the index starts from zero so - 1 from the addition of the first and last number 

  console.log([first , last ]);
}
getFirstAndLast([10, 2, 3, 4, 5]) 

return [()] //creates an array of the returned items 
*/
/*
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

 let length = message.length - 1;

  
  let total = length * pricePerWord;

  
  console.log(total);
   // Change code above this line
}
calculateEngravingPrice("hellophone", 25)

// for split
// if ('') it means to take away space between the elements or words
// if (' ')it means to ad a space between each word or letter if case is specififed to do so

*/
/*
function addition(add) {

  let total = 0;

  for (let i = 0 ; add.length > i ; i += 1) {
    total += add[i];
  }
  console.log(total);
}

addition([5,6,6,100,7])
*/
/*
function findLongestWord(string) {


let longestword = 0;
let stringcut = string.split(" ")

  for (let i = 0; i < stringcut.length; i ++){

    let current = stringcut[i];

    if (current.length > longestword.length) {
      longestword = current;
    
    }
  }
  
 return(longestword)
}

findLongestWord("hi wsp cord where hoard jumped")

*/
//                                                  creates an array fro m the min parameter until the max ,
/*
function createArrayOfNumbers(min, max) {
  const numbers = [];
  

  
  for (let i = min; i <= max; i += 1){               // if < doesnt have an = it only goes until and not including 
       
       numbers.push(i);
     }
 
  console.log(numbers) ;
}
createArrayOfNumbers(50, 100)
*/


/*
let far = ["plane", "car", "train"]

let length1 = far.length - 1;

let snuff = 2;

function test(far, snuff) {
  
  console.log(far.splice(snuff))
}

test(["hello", "bye" ,"goodbye"],1)
*/


/*

function filterArray(numbers, value) {
  
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) { // it stops iterating when i is greater then the index of numbers.length 
    
    if (numbers[i] > value) { //checks if the index i of numbers is greater then the value parameter

      newArray.push(numbers[i])// pushs the current value of the numbers with i index so automaticaly there all greater the value 
      
    }
  }

  console.log(newArray); // normaly would put return but to see on my own 
}
filterArray([4, 5, 6, 7, 77, 88, 99], 5);
/*
let plus = 1;
      newArray.push(plus)// add this to the if statement and ul see the 1 added 
 */

  /*
      function getCommonElements(array1, array2) { // number 25 , creates an array of the common numbers from the parameters 
      
  let newArray = [];
     
  for (let i = 0; i < array1.length ;i++){
   
    if (array2.includes(array1[i]) === true) {
      newArray.push(array1[i]);

    } 
        }
  for (let j = 0; j < array2.length ;j++){
   
    if (array1.includes(array2[j]) === true) {
      newArray.push(array2[j]);
  
    } 
    if (newArray.includes(array2[j]) === true) {
      newArray.pop()
         }
        }
  
        
  console.log(newArray)
}

getCommonElements([3,5,8,4,6], [1, 4, 3, 26,6])
*/

// check if number is even
/*
function checkForEven(numbers) {
   
  for (let i = 0; i < numbers.length; i++){

    if (numbers[i] % 2 === 0) {
      console.log(numbers[i] + " is a even number")
      
     }
  }
  
}

 checkForEven("6,8")
 */
/*
const a = 5 % 1; // modulus remainder return the remainder not how many times it goes in to each other 
console.log(a)
*/

// need to iterate through all numbers starting from start until end
// need to then check if they are even
// need to if true .push them to the array
  /*
function getEvenNumbers(start, end) { // finds all even numbers in between 2 number arrays 
   
  let arrayEven = [];
  
  for (let i = 0; i <= end; i++){
    let even = i
    if (even % 2 === 0 && even > start) {
      arrayEven.push(even)
    }
     console.log(even) // you can play around with adding or adding negitives to the even like (even - 10)
  }
    
 

 console.log(arrayEven)
}  
getEvenNumbers([5], [20])
  
*/
/*
function includes(array, value) {

  if (array.indexOf(value) !== -1) { // checks if element is in the entire array and then if it is , true , else false
      console.log(true)
  } else {
    console.log(false);
    }
        
  return
}

  includes([4,6,8,9,10], 8)

*/
//                                creating an object
/*
const person  = {
  firstName: "moshe",
  lastName: "bman",
  age: "2020",
  eyeColor: "blue"

};

console.log(person.firstName, "is", person.age = 5, "years of age") // can mutilate an objects information right before its being called
// once changed it stays changed 

console.log(person.age = 10)
console.log(person)
 // console it and you will see that because i changed the perosn.age to 5 , the object kept this value

 */
/*
const
  man = {
  name: "joe",
  lastName: "graze",
  hairColor: "yellow",
  car: "rc 350"
};

let stray = man.name

console.log(stray)
console.log(man)
*/

/*
function square(num) { // find square of the number
  let total = []; 
  let total2 = [];
   

  for (let i = 0; i < num.length; i++){

    if (num != 0 && total.length <= 4) { 
      total.push(num[i] * num[i]) 
    }

    if (total.length > 4) {
    total2.push(num[i] * num[i])
    
    } 
  }

  console.log(total,total2)

}

square(["8","3","6","10","5","7","6","0","8","7"])

*/
/*
function additionsubtration(add, minus) {
  
  let firstArray = [];
  for (let i = 0; i < add.length; i++){
    
  
    if (add[i] > minus[i]) {
     firstArray.push(add[i] - minus[i])
    } 
    if (add.includes(i) === true && minus.includes(i) === false) {
      
      firstArray.push(add[i])
    }

  }
  console.log(firstArray)
}

additionsubtration(["50", "77", "80","7"], ["28", "40", "-20","66"]) // obv subtracting negitives adds them check
*/
/*
const joe = {
  name: "jake",
  lastName: "ghoul",
  eyeColor: "green",
  pet: "dog",
  woman: ["kourtney", "esther", "jake"]
  
};

console.log(joe)

let cars = joe.car = "lc 500"; // u can add a object (thats not there) from a vaiable and it pushes it to original object , after its declaired , not before

let woman = joe.woman[1]; // goes to woman and goes to index 1 and converts the string to normal text , if you take away the index and console.log it youl see the entire array
/*
console.log(woman)


joe["pet"] = "max" // changes jey , value 
joe.woman.push("john")
console.log(joe["woman"])
console.log(joe["pet"])// works

joe.hoodies = "tieDie";
console.log(joe["hoodies"])

*/
/*
const name = "andrew";
const pen = "ballPoint";

const objectTest = {

  name, /* === myName: name, 
  pen,  /* === myPen: pen, }
  console.log(objectTest)

*/
/*


const futureCars = {
  
  oldTruck: "FORD F 150",
   
  totalCars: 5,

  newTrucks(truck) {
    console.log("your new truck of choice is a" ,truck)
  },

  carCollection(cars) {
    let luxuryCars = [];
    luxuryCars.push(cars)
    
   /* console.log(luxuryCars)
  },

  watches(watch) {
    /*
    console.log(this.totalCars)
    
    
  } 
}

futureCars.newTrucks("SILVRADO"), futureCars.carCollection("bugatti Chiron Pur Sport"), futureCars.carCollection("McLarin Speedtail")



// always add  (.hasOwnProperty(key)) when iteratin over an object with FOR IN 
for (const key in futureCars) {
  if (futureCars.hasOwnProperty(key)) {
    console.log(key + " " ,1)
    
  }
  
}
 
const hair = {

  blonde: "5",
  black: "7",
  ginger: "1",
};

let myHair = Object.keys(hair) // object.keys() return an array of the KEYS, not values 
console.log(myHair)


const woman = {

  mistress1: "madam",
  main1: "razel",
  piece: "ronald",
  money: ["20k", "50k", "100k", "200k" ]
}


for (const wo in woman) {
  
  console.log(woman[wo])
}
woman.poor = 6

woman.poor["black"] = 8

console.log()


const keyBoards = {

  logitech: "SS4300",
  dell: "4750p",
  sony: "L328",
  apple: "777Y"

}
let length = []
let theBoard = 0;
for (const boards in keyBoards) {
   
  length.push(boards)
  theBoard = length.length
  console.log(theBoard)
}



const iterator = {
  number1: 10,
  number2: 20,
  number3: 30
}
let keys = Object.keys(iterator)
let air = 0;

for (const it of keys) {
  let length = keys.length;

  
  air = length
  
  console.log(air)
}


const colors = [
  {
    hex: "#f44336",
    rgb: "244,67,54"
  },
  
  {
    hex: "#2196f3",
    rgb: "33,150,243"
  },
  
  {
    hex: "#4caf50",
    rgb: "76,175,80"
  },
  
  {
    hex: "#ffeb3b",
    rgb: "255,235,59"
  },
];
const hexColors = [];
const rgbColors = [];
for (const col of colors) {
  hexColors.push(col.hex)
}

console.log(hexColors)

const products = [
  {
    name: "Radar",
    price: 1300,
    quantity: 4
  },
  { name: "roid", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {

  






}

getProductPrice("Radar")


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
  
function getProductPrice(productName) {
  
  
  for (const product of products) {
    
    if(productName === product.name){
  
      console.log(product.price)
      
      
    } 
      
  }
  console.log(null) 
  
} 
getProductPrice("Droid")
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  let array = []
  for (const prod of products) {
    if (prod[propName] != undefined) {
      array.push(prod[propName])    
    } 
  }
  console.log(array)
    // console.log(array)
    // console.log(array[products.length - products.length])
}
getAllPropValues("name")
getAllPropValues("price")
getAllPropValues("quantity")
getAllPropValues("20")


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  
  let array = [];

  for (const prod of products) {

    
    if (prod.name === propName) {
     console.log(prod.price * prod.quantity) 
   }else console.log(0)
   
    
  }
   
}

getAllPropValues("Radar")
getAllPropValues("Droid")

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const { title , author , rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}


const numbers = [4 , 6 , 16];

const halfNumbers = [1,6]

const jag = {
  mice: 1 , 
  pig: 2
  
}
const nag = {

  rag: 3 , 
  flag: 4 , 
  pig: 6
}

let j = {...nag , ...jag} // from this we know , last declaired is the output , however once its declaired thats where the name stays but value can change depending on if a different object changed it 
console.log(j)


console.log(...numbers , ...halfNumbers)

console.log(Math.max(...numbers)) // ... , returns the largest of the numbers in such a situation

const a = Math.max(...numbers)
console.log(a + a) 
const b = Math.min(...numbers) // lowest number 

console.log(a - b)



function multiply(...a) {
  let array =[ a[0] * a[1] ];
   
  
  console.log(array)
}
multiply(6,7,6)


function addition(first , ...a) {
  
  let total = 0;

  for (const ar of a){
      // or an if statement
    if (first <= ar) {
      
      total += ar;
      console.log(total)
      
    }
    // total += ar;
    // console.log(total)
  }
  // console.log(total)
}
addition(55,78,66,95,77,55) // taxes each one and adds to total even if it has other elements each comma is a seperate expression / can add negetives and multiplication~



function findMatches(parameter , ...mats) { // ... must be last or it will throw an error 
  
  const matches = [];

  for (const par of parameter) { // if par === mat , while their both looping over each other then push it 
    for (const mat of mats) {
      
      if (par === mat) {
        matches.push(par)
      }
    }
  }

  console.log(matches)
}

findMatches([3, 66, 77, 5, 6], 63, 42, 77, 5, 3) // iterates through first array/ parameter and if === itself pushes itself to var


const books = {

  booking: ["The Great Almighty" , "Chicken Little"],

  fake : ["candy" , "food"],
  allbooks(){

    console.log(this.booking)

    console.log(this.fake)
  }
}

books.allbooks()

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
   
 let number = this.books.indexOf(oldName);

 console.log(bookShelf.books.splice(number,1,newName));

 
 console.log(bookShelf.books)
  },

};

bookShelf.updateBook("Haze" , "George")


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    
    
  let number = this.potions.indexOf(potionName)

  console.log(this.potions.splice(number ,1))
    
  console.log(this.potions)
  }
  
};


atTheOldToad.removePotion("Dragon breath")


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
     addPotion(newPotion) {
    for (const pot of this.potions){

     if(pot.name === newPotion.name){
        return `Error! Potion ${pot.name} is already in your inventory!`
       }
    }
    this.potions.push(newPotion);
     
  }, 
   
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    

    for (let i = 0; i < this.potions.length; i++) {

      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1)
        return
        
      } 
    }
    console.log(`Potion ${potionName} is not in inventory!`)
        
     console.log(this.getPotions())
     
  },


  updatePotionName(oldName, newName) {

    for (let i = 0; i < this.potions.length; i++){

      if (oldName === this.potions[i].name) {

        // this.potions.splice(i, 1, newName)
       
        console.log(this.potions[i].name)
      }
    }

    // console.log(this.potions)
  },
  // Change code above this line
  
};
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
console.log(atTheOldToad.potions)


let jug = [8,5, 7, 9, 13,22, 16, 27, 89,4]

function odd(nums) {
  let even = []
  for (const num of nums) {
    
    if (num % 2 != 0) {
      console.log(num)

    }
    else {
      even.push(num)
      
    }
  }
  console.log(even)
}
console.log(odd(jug))


// Callback

function greet(name) {
  console.log(`Welcome ${name}.`);
}

// Higher-order function
function registerGuest(name, ca) {
  console.log(`Registering guest ${name}.`);
  ca(name);
}

registerGuest("Mango", greet);


function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Connecting you to ${name}, please wait...`);
  // Call handling logic
}

function activateAnsweringMachine(name) {
  console.log(
    `The subscriber ${name} is not available, please leave a message.`
  );
  // Answering machine activation logic
}

function leaveHoloMessage(name) {
  console.log(`The subscriber ${name} is not available, recording a hologram.`);
  // Hologram record logic
}

processCall("Mangooo", takeCall, leaveHoloMessage);

processCall("Poly", takeCall, leaveHoloMessage);

takeCall("hi")

leaveHoloMessage("jay")


function deliverPizza(pizzaName) {
  console.log(`Delivering ${pizzaName} pizza.`);
  
}

function makePizza(pizzaName) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  console.log("ee")
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  
  console.log(callback(pizzaName));
  return
}
makeMessage("Royal Grand", makePizza)
makeMessage("Ultracheese", deliverPizza)

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const gorg = this.pizzas.includes(pizzaName)

    if (gorg === false) {   
      onError(pizzaName)
      console.log(`There is no pizza with a name ${pizzaName} in the assortment.`)
    }
    else {
      onSuccess(pizzaName)
    }
  },
};

function makePizza(pizzaName) {
  console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
}

// Callback for onError
function onOrderError(error) {
  console.log(`Error! ${error}`);
}

pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

//makePizza("h")

function repeatLog(n) {
  for (let i = 0; i < n ; i += 1) {
    console.log(i);
  }
}

repeatLog(10);
*
const numbers = [5, 10, 15, 20, 25];

// Classic for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

numbers.forEach(function (num, ind) {
  console.log(`Index ${ind}, value ${num}`); // faster however always goes till end of array
});


const greet = (l) => {
  console.log("Hello! ", l); // is treated as variable in syntax but is still a function ,substitutes l for var in GREET(l)
};

greet("jay", "h")
const name = (eph, jay, ...kon) => console.log("hello ", eph, jay, "and", kon);

name("jsoh", "chris", "ronald","kondin")

const numbers = [5, 10, 15, 20, 25];

// Function declaration
numbers.forEach(function ( n,i) {
  console.log(`Index ${i}, value ${n}`);
});

const numbers = [5, 10, 15, 20, 25, 30 , 35];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`); //declairing an arrow fucntion callback seperately , normaly its done together , this is only done when its a very long or cumbersome piece
};

numbers.forEach(logMessage);

const numbersf = [1, 2, 3, 4, 5, 6 ,7 ];
const filteredNumbers = numbersf.filter(v => v > 3);
console.log(filteredNumbers);

const names = ["jake", "john", "jrew", "fig"]

const functionNames = names.filter(x => x === "john") // play around with it if true returns an array of the true statement , in this case its "john"


console.log(functionNames)

const myFunction = ( array, number) =>{
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] * number 
  }
  console.log(array) // uses outside variables 
}
let myArray = [3,5,6,7,8]
myFunction(myArray, 6)

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  


   orderedItems.forEach(function (element,array){
     totalPrice  += orderedItems[array]
     console.log("hi")
   })

  
  console.log(totalPrice);
}
calculateTotalPrice([164, 48, 291, 1])


function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line




   let jay = filteredNumbers.push( numbers.filter(v => v >= value))

  
  // Change code above this line
 console.log(filteredNumbers);
}
filterArray([1, -2, 4, 6, 8, 9, 10], 4)


function changeEven(numbers, value) {
  // Change code below this line


  let box = []

  numbers.forEach(function (num,array) {

    if(num % 2 === 0){
      box.push(num + value)
    }else {
      box.push(num)
    }
  })
  console.log(box) 
  // Change code above this line
}

changeEven([5, 6, 7, 34, 66], 6)
changeEven([17, 24, 68, 31, 42], 100)

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths)


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map( book => book.title);
console.log(titles)



let numbers = [6, 8, 22,22, -4, 77,-8,5,5];

let positiveNumber = numbers.filter(num => num > 10)
let negetiveNumber = numbers.filter(num => num < 0)
console.log(positiveNumber)
console.log(negetiveNumber)



const uniqueCourses = numbers.filter(
  (course, index, array) => array.indexOf(course) === index // course is current element , index is index of current element , array is the  total array 
); // we check if the total array has current element  if its === the index , if not it doesnt put , so if twice or more it only finds first one , by indexOf

console.log(uniqueCourses)

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
  { name: "jake", score: 72 },
  { name: "kaen" , score:51}
];

const best = students.filter(student => student.score > HIGH_SCORE);
console.log(best); // Array of objects named Mango and Kiwi

const middle = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE)
console.log(middle)

const worst = students.filter(student => student.score < LOW_SCORE)
console.log(worst)


  
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING) 
        console.log(topRatedBooks)                          
const booksByAuthor = books;


const getUsersWithEyeColor = (users, color) => {
 
  let correctEyeColor = users.filter(eye => eye.eyeColor === color)
  // console.log(correctEyeColor)
  // console.log(correctEyeColor.map(user => user.name)) // only selects the users.name elemnet as opposed to the entire users , user element 
  
};
// Change code above this line

getUsersWithEyeColor([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },],"blue")


const getFriends = (users) => {

  let totalFriends = users.flatMap(user => user.friends);
   
  console.log(totalFriends)

  let onlyUnique = totalFriends.filter((use, i, ar) => ar.indexOf(use) === i)
  console.log(onlyUnique)
};

// Change code above this line
getFriends([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },])

  // .filter returns and array
  const getInactiveUsers = (users) => {
   let inactiveUsers = users.filter(use => use.isActive != true)
  console.log(inactiveUsers)
};
getInactiveUsers([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },])
  
  const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line
const totalAveragePlaytimePerGame = players.reduce((past , ele ) => {return  (past += ele.playtime / ele.gamedPlayed)},0);
//const totalAveragePlaytimePerGame = players.reduce((total , element) => {return (total += element.playtime / element.gamesPlayed)},0);
console.log(totalAveragePlaytimePerGame)




  const getTotalFriendCount = (users) => {
    let totalCount = users.reduce((past, element) => past += element.friends.length, 0); // need to declaire the 0 , so it starts at 0 
    return totalCount;
};
 

                                                                                                                                                                                                            
// Change code above this line                            

console.log(getTotalFriendCount([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",                                   
    friends: ["Sh                                                                                                                                                                                                                                                                                           arron Pace"],               
    isActive: false,                                                                                                                                                                                                                                                                                                            
    balance: 2811,                   
    gender: "male"               
  },                                                                                                                                                                         
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },]))

  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = releaseDates.sort(function (x,y) {return x - y});
console.log(ascendingReleaseDates)
const descendingReleaseDates = releaseDates.sort((x, y) => { return y - x });
console.log(descendingReleaseDates)
    


const getNamesSortedByFriendCount = users => {

  
  let count =  [...users]
                .sort((a,b) => a.friends.length - b.friends.length)  
                .map((a) => a.name)
  console.log(count)
};
getNamesSortedByFriendCount([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",                                   
    friends: ["Sh                                                                                                                                                                                                                                                                                           arron Pace"],               
    isActive: false,                                                                                                                                                                                                                                                                                                            
    balance: 2811,                   
    gender: "male"               
  },                                                                                                                                                                         
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },])

  
 const getTotalBalanceByGender = (users, gender) => {
   console.log(gender)
   console.log([...users]
         
     .filter((a) => a.gender === gender)
     
    .reduce((a, b) => { return a + b.balance },0)  // try with out 0 at end , reason why is at every iteration it just COMBINES DOES NOT ADD , therefore need to initialize at 0 
   )
   
};
getTotalBalanceByGender([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",                                   
    friends: ["Sh                                                                                                                                                                                                                                                                                           arron Pace"],               
    isActive: false,                                                                                                                                                                                                                                                                                                            
    balance: 2811,                   
    gender: "male"               
  },{
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",                                   
    friends: ["Sh                                                                                                                                                                                                                                                                                           arron Pace"],               
    isActive: false,                                                                                                                                                                                                                                                                                                            
    balance: 2811,                   
    gender: "male"               
  },                                                                                                                                                                         
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },], "female")
  


function showThis() {
  console.log("this in showThis: ", this);
}
showThis()

const user = {
  name:"jay Smith"
}

user.content = showThis

user.content()

const module = {
  x: 50,
  getX: function() {
    return this.x;
  }
};
console.log(module.getX())

const unboundGetX = module.getX;
//console.log(unboundGetX.bind(module)); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 50
//                                      functions inside objects are  really just object methods

function names(...time) { // includes all consecutive outputs , parameters , in to an  array 
  console.log("it is",...time,"by your area,",this.fName) // the ... converts the array to string , 
}

const first = {
  fName: "josh"
}
const second = {
  fName: "jake Gyllenhaal"
}
// names.call(first, "11:12")
// names.call(second, "12:45")
// names.apply(first, ["12:48", "1:56"])

// function men(jjj) {
//   console.log("By the way MR",this.first,"has",jjj+"$","dollars in JP Morgan Chase") // jjj is the parameter 364000, this .first is binded to human.first, so this.first = "george"
// }
// let myf = men.bind(human)
// myf("364000")


const human = {
  first: "GEORGE",
  secondName: "FILIPINO",
  addBoth() {
    return `${this.first}:${this.secondName}`;
  },
};
console.log(human.addBoth())


function fullName(ong) {
  
  console.log("Hello to you MR",ong())
}

fullName(human.addBoth.bind(human))

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() is a call of the getFullName method without an object
  console.log(`Processing request from ${callback()}.`);
}

//makeMessage(customer.getFullName); // Function call error
makeMessage(customer.getFullName.bind(customer))

const animals = {
  tail: 1,
  legs: 3,
  toes:12
}
const myDog = Object.create(animals)
myDog.arms = "5"

console.log(myDog)
console.log(animals.isPrototypeOf(myDog))


class Person { 
// can take out  of { } and first example will work , it doesnt now because the {} is telling the console its a object instead of a var 
  #last; //private u do
  first; //dont need to declare public properties 
  
  constructor({first, last}) {
    this.#last = last // instance properties / these are called public properties , everytime a NEW object is createed from the class object , it creates a personalizied constructor
    this.first = first 
  }

 get last() {
  return  this.#last
  }
  set first(newfirst) {
    if (first === "") {
      console.error("can not be an empty string")
      return;
    }
    this.first = first
  }
}

// let eph = new Person("josh","Samuels") // reason why output is in different order , is the way you control the initializing / when
// console.log(eph)
//or

let finland = new Person({
  first: "crops",
  last: "flops"
})
console.log(finland)

const chris = new Person ({
  first: "paper",
  last: "mache"
})

console.log(chris)
console.log(chris.first)

chris.first = "NoPaperLeft"
console.log(chris.first)
//chris.first = "" // last is undefined only because i cant access it in this scope (it was made private by #)
//console.log(chris.first)
//console.log()


// class ,
// set
// get
// static 
*/