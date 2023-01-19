"use strict";
let a = 100;
let b = 20;

let c = a + b;
console.log(c)

let counter = 0;
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
*/
true || false; 

/*
alert("hagotti");
*/

const shoes = ["jordans", "rebox", "kyries", "New balance"]

shoes[1] = "Sketchers"

const lastIndexOf = shoes.length - 1; 

console.log(lastIndexOf);
/*
console.log(shoes[lastIndexOf])
*/
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
const speaker = ["1" ,"2" , "3", "4" , "5" , "6" , "7" , "8" , "9" , "10"];
  
console.log(speaker.slice(2, 6));
