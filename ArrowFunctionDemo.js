//arrow function without return
const sum = (a,b) => a+b
console.log("sum : ",sum(3,4))

//arrow function with return
const sqr = (a) =>{
    return a*a
}
console.log("square : ",sqr(5))

//arrow function with multiple return
const fact = (n) =>{
    if(n == 0){
        return 1
    }else{
        return n*fact(n-1)
    }
}
console.log("factorial : ",fact(5))

//object literal with arrow function
const getUser = ()=>({
    rollno : 1255,
    name : "varshith"
})

console.log("Student Details : ")
console.log("roll number : ",getUser().rollno)
console.log("name : ",getUser().name)

//function constructor without arrow function
function AddToCart1()
{
    this.productName1 = 'Laptop'

    this.getProduct = function(){
        setTimeout( function(){ console.log("name of product : ",this.productName1)},1000)
    }
}
let obj1 = new AddToCart1()
obj1.getProduct()


//function constructor with arrow function
function AddToCart()
{
    this.productName = 'Laptop'

    this.getProduct = function(){
        setTimeout( () =>
        {
            console.log("name of product : ",this.productName)
        },1000)
    }
}
let obj = new AddToCart()
obj.getProduct()