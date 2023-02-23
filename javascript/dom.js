
let body = document.body // entire document body , then specified to only inside the .body
console.log(body)
let header = body.firstElementChild // cut down to only the first element of .body 
console.log(header)
let lastElement = body.lastElementChild
console.log(lastElement)

let firstList = body.querySelector(".firstList") // needs to be converted to string then add period for selector syntax 
console.log(firstList)

console.log(firstList.children[2]) // can select the index from the returned array , its treated like normal array for indexs


//element.querySelectorAll(selector); can use to hold on to lets say all li items from a ul , with specific selectors
// if nothing found , return []

let firstNumber = body.querySelector(".logoText")
console.log(firstNumber) // the entire tag included , 
console.log(firstNumber.textContent) // only the text (inside of tags )

// https://codepen.io/goit-academy/pen/wvJmGbG click this link

let listItemss = firstList.textContent;
listItemss = "hi"

let text = document.querySelector(".logoText") // goes straight to the selector 
text.textContent = "jump already" // changes the actual visable document in browser

text.classList.remove("logoText") // removes the class that was selected off , of the elemeent , text 
text.classList.add("logoText") // adds the class back to the element
//.toggle("class") if not there if adds it if there it removes
console.log(text.classList.contains("logoText"))
text.textContent = text.classList.contains("logo") // can make result / true,false = to the text content , put logoText , at it will be === true  
text.style.color = "blue"; // changes the color to blue 
text.style.backgroundColor = "yellow"; //background changed , only of exact element
text.style.fontSize = "24px"; // fontsize 24px now 
text.style.underLine = "black"
console.log(text.style) // consoles all the selectors that were changed from js

