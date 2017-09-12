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
// Coding Challenge 1

/*
// Variable Declaration
var p1Age, p2Age, p3Age
var p1AgeTimesFive, p2AgeTimesFive, p3AgeTimesFive
var p1Height, p2Height, p3Height
var p1Total, p2Total, p3Total

// Set player age
p1Age = prompt ('Player 1, what is your age?');
p2Age = prompt ('Player 2, what is your age?');
p3Age = prompt ('Player 3, what is your age?');

// Set player height
p1Height = prompt ('Player 1, what is your height in cm?');
p2Height = prompt ('Player 2, what is your height in cm?');
p3Height = prompt ('Player 3, what is your height in cm?');

// Multiply player age
p1AgeTimesFive = p1Age * 5;
p2AgeTimesFive = p2Age * 5;
p3AgeTimesFive = p3Age * 5;

// Get player totals
+p1Total = +p1AgeTimesFive + +p1Height;
+p2Total = +p2AgeTimesFive + +p2Height;
+p3Total = +p3AgeTimesFive + +p3Height;

// Game logic
if (p1Total > p2Total && p1Total > p3Total) {
  console.log('Player 1 wins with ' + p1Total +' points!');
} else if (p2Total > p1Total && p2Total > p3Total) {
  console.log('Player 2 wins with ' + p2Total +' points!');
} else if (p3Total > p2Total && p3Total > p1Total) {
  console.log('Player 3 wins with ' + p3Total +' points!');
} else if (p1Total = p2Total && p1Total > p3Total) {
  console.log('Player 1 and player 2 Tied with ' + +p2Total + ' points.');
} else if (p1Total = p3Total && p1Total > p2Total) {
  console.log('Player 1 and player 3 Tied with ' + +p3Total + ' points.');
} else {
  console.log('Player 2 and player 3 Tied with ' + +p2Total + ' points.');
}
*/



/////////////////////////////////////////////////////////////////////////////////
//Lecuter: Functions
/*
function calculateAge(yearofBirth) {
  var age = 2017 - yearofBirth;
  return age;
}
var userName = prompt ('What is your name?');
var userYear = prompt ('What year were you born?');
var ageUser = calculateAge(userYear);

console.log(userName + ' is ' + ageUser + ' years old.');


function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.')
  } else {
    console.log(name + ' is already retired.');
  }

}

yearsUntilRetirement(userName, userYear);
*/

////////////////////////////////////////////////////////////////////
//Lecture: Statements and expressions
/*
function someFun(par) {
  //code
}

var someFun = function(par) {
  //code
}

//Expressions
3 + 4;
var x = 3;

//Statements
if (x === 5) {
  //do something
}
*/

////////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names[1]);

var john = ['John', 'Smith', 1990, 'Designer', false];

//.push adds an element to the end of an array
john.push('Blue');
//.unshift adds an element to the beginning of an array
john.unshift('Mr.');
//.pop removes an element from the end of an array
john.pop();
//.shift removes an element from the beginning of an array
john.shift();

console.log(john);

if (john.indexOf('Teacher') === -1) {
  console.log('John is NOT a teacher.');
}
*/

///////////////////////////////////////////////////////
// Lecture: Objects
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearofBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/
///////////////////////////////////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};


//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john.age);
*/

// v2.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    //return 2017 - this.yearOfBirth;
    //this refers to the object. In this case john.
    this.age = 2017 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);
*/



/////////////////////////////////////////////////////
//Lecture:Loops
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

var i = names.length - 1;
while (i >= 0) {
  console.log(names[i]);
  i--;
}

for (var i = 1; i < 6; i++) {
  console.log(i);

  if (i === 3) {
    break;
  }
}

for (var i = 1; i < 6; i++) {

  if (i === 3) {
    continue;
  }

  console.log(i);
}
*/


///////////////////////////////////////////////////
//Project 2

var adultAge = 18;
var currentYear = 2017;
var yearBorn_1 = [1965, 1987, 1999, 2005];
var yearBorn_2 = [1987, 1998, 1989, 2016];

function printFullAge(yearBorn) {
  var age = [];
  var adult = [];

  for (var i = 0; i < yearBorn.length; i++) {
    age[i] = currentYear - yearBorn[i];
  }

  for (var i = 0; i < yearBorn.length; i++) {
    if (age[i] < adultAge) {
      adult[i] = false;
    } else {
      adult[i] = true;
    }
  }
  return adult;
}

var full_1 = printFullAge(yearBorn_1);
var full_2 = printFullAge(yearBorn_2);
console.log(full_1);
console.log(full_2);
