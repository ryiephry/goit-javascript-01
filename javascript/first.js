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
    

function jail(time) {
  /*
  return time < 30 ? "your on standby"
    : `your in jail for ${time} days`; // can use either RETURN OR 2X CONSOLE.LOG 
  */
  time < 30 ? console.log("your on standby") : console.log(`your in jail for ${time} days`);
  
}

(jail(20));

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




function filterArray(numbers, value) {
  
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) { // it stops iterating when i is greater then the index of numbers.length 
    
    if (numbers[i] > value) { //checks if the index i of numbers is greater then the value parameter
      newArray.push(numbers[i])// pushs the current value of the numbers with i index so automaticaly there all greater the value 
    }
  }
  console.log(newArray); // normaly would put return but to see on my own 
}
filterArray([4, 5, 6, 7, 77, 88, 99], 7);