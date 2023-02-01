//var variables can be re-declared and updated
var str1 = "Hello!!"
var str1 = "Hi Friends!!"
console.log("String 1 : ",str1)

var str2 = "Hi!!"
str2 = "Hello World!!"
console.log("String 2 : ",str2)


var i = 60//global scope
for(let j=0;j<5;j++)//limited scope
    console.log(j)
console.log(i)


let x = 8
function printer() {
    console.log("Inside the function ",x)
}
printer()//function call
console.log("Outside the block : ",x)

//limited scope of let
let s1 = "hello!"
if(true){
    let s2 = "Hi!"
    console.log("Inside : ",s2)
}
console.log("Outside : ",s1)

//limited scope of const
const a = 10
const PI = 3.14//defining constant values
{
    const a = 20
    console.log("Inside the block : ",a)
}
console.log("Outside the block : ",a)
console.log("The value of PI : ",PI)



