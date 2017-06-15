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
/*
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
*/

var p1Age, p2Age, p3Age
var p1AgeTimesFive, p2AgeTimesFive, p3AgeTimesFive
var p1Height, p2Height, p3Height
var p1Total, p2Total, p3Total

p1Age = prompt ('Player 1, what is your age?');
p2Age = prompt ('Player 2, what is your age?');
p3Age = prompt ('Player 3, what is your age?');

p1Height = prompt ('Player 1, what is your height in cm?');
p2Height = prompt ('Player 2, what is your height in cm?');
p3Height = prompt ('Player 3, what is your height in cm?');

p1AgeTimesFive = p1Age * 5;
p2AgeTimesFive = p2Age * 5;
p3AgeTimesFive = p3Age * 5;

+p1Total = +p1AgeTimesFive + +p1Height;
+p2Total = +p2AgeTimesFive + +p2Height;
+p3Total = +p3AgeTimesFive + +p3Height;

if (p1Total > p2Total && p1Total > p3Total) {
  console.log('Player 1 wins with ' + p1Total +' points!');
} else if (p2Total > p1Total && p2Total > p3Total) {
  console.log('Player 2 wins with ' + p2Total +' points!');
} else if (p3Total > p2Total && p3Total > p1Total) {
  console.log('Player 3 wins with ' + p3Total +' points!');
} else if (p1Total = p2Total && p1Total > p3Total) {
  console.log('Player 1 and player 2 Tied with ' + p2Total + ' points.');
} else if (p1Total = p3Total && p1Total > p2Total) {
  console.log('Player 1 and player 3 Tied with ' + p3Total + ' points.');
} else {
  console.log('Player 2 and player 3 Tied with ' + p2Total + ' points.');
}

console.log (p1Age + ' ' + p1AgeTimesFive + ' ' + p1Height +' ' + p1Total);
