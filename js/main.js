//Strings
const name = "Damola";
console.log(name.toLowerCase());
console.log(name.split(""));

//Numbers
const num = 17;
const myString = "17";
console.log(myString + 7);
console.log(Number(myString) === num);
console.log(num + 7);


console.log(Number.isInteger(num));

//Math methods
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.floor(6.18));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10 + 1));

//js to return a random number from my name
const myName = "Damoke";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));


//js if and else statements
let soup = "Chicken noodle soup";
let reply;
if (soup){
    reply = `Here is your order of ${soup};`
}
else{
    reply = `Sorry, we are out of soup`;
}
console.log(reply);


//Testscore grader
let testScore = 89;
let grade;
if (testScore >= 90){
    grade = "A";
} else if (testScore >= 80){
    grade = "B";
} else if (testScore >= 70){
    grade = "c"
} else{
    grade = "F";
}
console.log(grade);


//Rock Paper Scissors game


//switch statement
switch (24){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No match");
}


//Ternary operator
let obe;
let idawun = soup? `Yes, we have ${soup}`:`Sorry, no ${soup}`;
console.log(idawun);


//Ternary operator impemented in grding system
let mark = 92;
let myMark = mark > 89? "A" : mark > 79? "B" : mark > 69? "C" : mark > 59? "D" : "F";
console.log(myMark);

//Ternary operator implemeted in RPS game
let p1 = "scissors";
let p2 = "paper";
let game = p1 === p2?"Tie" 
: p1 === "rock" && p2 === "paper" ?"p2 wins" 
: p1 === "paper" && p2 === "scissors" ?"p2 wins" 
: p1 === "scissors" && p2 === "rock" ?"p2 wins" : "p1 wins";
 console.log(game);




 //interact js
 alert("Hello World!");

 let myQ = confirm("click ok to go\ncancel to stay");
 console.log(myQ);

 let nama = prompt("Please enter your name.");
 console.log(nama  ?? "You did't enter your name!");


const Bigarray = [] ;
Bigarray[0] = 100 ;
Bigarray[1] = "Drezzy" ;
Bigarray[2] = Math.PI ;
Bigarray[3] = true ;
console.log(Bigarray);

const familyArray = ["Me","Dad","Mum","Sis"];
console.log(familyArray);

const twoD = [Bigarray, familyArray];
console.log(twoD[1][3]);