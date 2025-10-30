// 1.Variables

var b = 12; //old
let a = 12; //new
const c = 12;

// Assignment 1

// Create a variable for each of the following:
// - your favorite color, your height in centimeters , and whether you like pizza. 
// - Use appropriate variable declarations (let, const, or var). Try logging it using console.log

var height = 12; 
let like = true;
const color = "black"; 

console.log(height,like,color)

// 2. Data Types

let number = 12            // Int
let string = "harshal"     // String
let isthat = true          // Boolean
let array = [1,2,3,4]      // Array

console.log(number,string,isthat,array)


// 3. Operators

let Add = 10 + 20            // Arithmetic operator
let isEqual = 10==10         // Comparison operator
let isTrue = true && false   // Logical operator

console.log(Add,isEqual,isTrue)

// 4. Function

function printName(name){
    return "Hello "+name
}
console.log(printName("Harshal"))

// Assignment #1

// Write a function sum that finds the sum of two numbers. 

function sum(a,b){
    return a+b
}

console.log("sum of 1 + 2 is " , sum(1,2))

// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a,b){
    return a+b
}

console.log("sum of 1 + 2 is " , sum("1","2"))


// Assignment #2

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    return age > 18;
}

console.log("is Age is > 18 ? "+canVote(19))

// 5. If/Else

function isAgeGt(age){
    if(age > 18){
        console.log("age is gt 18")
    }else{
        console.log("age is not gt 18")
    }
}

isAgeGt(19)

// Assignment

// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function isEven(num){
    if(num%2){
        console.log("The number is odd")
    }else{
        console.log("The number is even")
    }
}

isEven()

// 6. Loops

let sm=0
for(let i=0;i<=5;i++){
    sm += i;
}
console.log("Total sm of 0 to 5 is : "+sm)

let i=0 , smm=0;
while(i<=5){
    smm+=i;
    i++;
}
console.log("Total smm of 0 to 5 is : "+smm)


// 7. Complex types

// Objects
// Key-value

let obj = {
    name : "Harshal",
    age :  12,
    salary : 10000
}

console.log(obj)

// Assignment #1

// Write a function that takes a user as an input and greets them with their name and age

let user = {
    name : "Harshal",
    age :  12,
}

function printUserdata(user){
    console.log("user name "+user.name)
    console.log("user age "+user.age)
}
printUserdata(user)

// Assignment #2

// Write a function that takes a new object as input which has name , 
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// Assignment #3

// Also tell the user if they are legal to vote or not


let new_obj = {
    name : "Harshal",
    age :  18,
    gender : "male"
}

function greet(user){
    let gen =  user.gender=="male" ? "Mr " : (user.gender=="female" ? "Mrs " : "Other ");
    console.log("Hi "+ gen + user.name +", your age is "+user.age)
    console.log("You are "+(user.age >= 18 ? "legal " : "illegal ")+"for vote.")
}

greet(new_obj)


// 8. Arrays

let users = ["harshal" , "bob"]
let len = users.length
let firstUser = users[0]

console.log(users,len,firstUser)

// Assignment

// Write a function that takes an array of numbers as input, 
// and returns a new array with only even values. Read about filter in JS


function filterArray(array){
    let Arr = []
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            Arr.push(array[i]);
        }
    }
    return Arr
}

console.log("Even ele is : "+filterArray([1,2,3,4,5,6]))

// Array of Objects

const Users = [
    {
        name : "harshal",
        age  : 12,
    },
    {
        name : "bob",
        age  : 16,
    },{
        name : "hkirat",
        age  : 20,
    }
    ,{
        name : "kk",
        age  : 16,
    }
]

console.log(Users)
console.log("user bob age : " + Users[1].age)

// Assignment

// Write a function that takes an array of users as 
// inputs and returns only the users who are more than 18 years old


function filter18plus(users){
    let Arr = []
    for(let i=0;i<users.length;i++){
        if(users.age > 18){
            Arr.push(users[i]);
        }
    }
    return Arr
}

console.log(filter18plus(Users))




// ssh -i ~/.ssh/id_ed25519 git@github.com

// git config credential.username harshal4x

// git config --global user.name "harshal4x"
// git config --global user.email "talk.harshal@gmail.com"
