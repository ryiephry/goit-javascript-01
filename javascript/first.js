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

*/

function multiply(...a) {
 
  console.log(a)
}
multiply(6,7,6)










