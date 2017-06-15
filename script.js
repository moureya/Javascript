// Lecture: variables
/*
var name = 'John';

var lastName = 'Smith';
console.log(name + " " + lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: Variable Mutation and Type Coercion
/*var name = "John";
var age = 26;

//console.log(name +" "+ age);
//console.log(age + age);


var job, isMarried;

job = "teacher"
isMarried = true;

console.log(name + " is a " + age + " year old "
+ job + ". Is he married? " + isMarried + ".");

age = "thirty six";
job = "driver";

console.log(name + " is a " + age + " year old "
+ job + ". Is he married? " + isMarried + ".");

var lastName = prompt("What is your last name?")

console.log(lastName);

alert(name + " is a " + age + " year old "
+ job + ". Is he married? " + isMarried + ".");
*/

// Lecture: Operators
/*
var age = 26;
var currentYear = 2017;
var birthYear = currentYear - age;
console.log(birthYear);
*/

///////////////////////////////////////////////////
// Lecture: if/else statements
/*
var name = "John";
var age = 26;
var isMarried = "no";

if (isMarried === "yes") {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;
if (isMarried) {
  console.log('YES!');
} else {
  console.log('NO');
}
*/


/////////////////////////////////////////////////////////
// Lecture: Boolean logic and switch

var age = 16;

if (age < 18) {
  console.log("John is a teenager");
} else if (age > 17 && age < 30){
  console.log("John is a young man");
} else {
  console.log("John is an adult");
}

var job = 'teacher';

job = prompt('What does John do?');
switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
