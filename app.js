//Data types
//String
let name = "Raymart";

//Integer
let int = 20;

//boolean
let inCorrecct = true;

//undefined
let middlename;

//null
let firstname = null;

//B. Arithmetic and logical eperators
//Arithmetic
let x = 10;
let y = 20;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let qou = x / y;

console.log("the sum is " + sum);
console.log("the difference is " + diff);
console.log("the product is " + prod);
console.log("the qoutient is " + qou );

//Logical Operators
 let num1 = 5;
 let num2 = 10;

 let result1 = num1 += 20;
 let result2 = num1 += 20;
 let result3 = num1 += 20;
 let result4 = num1 += 20;

 console.log(result1);
 console.log(result2);
 console.log(result3);
 console.log(result4);

  //condition statement
 //if statement 
 let tomorrow = new Date().getDate();
 let greetings, greet, variable;

 if(tomorrow < 24){
    greetings = "Good evening";
 }

console.log(greetings);

//if else statement
if (tomorrow > 18){
    greet = "good evening";
}
else{
    greet = "you to have a god day";
}
console.log(greet);

//else if statement
if (tomorrow > 18){
    variable = "What's up";
}else if(tomorrow < 18){
    variable = "welcome to my GitHub account";
}else{
    variable = "have a nice day";
}
console.log(variable);

//switch statement
let week = 2;
let greeting;

switch(week){
    case 1:
        greeting = "Hi guys have a nice day!";
        break;
    case 2:
        greeting = "Hope you happy all day!";
    case 3:
        greeting = "God is Good All The Time";
        break;
}
console.log(greeting);
