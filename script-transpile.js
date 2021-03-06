'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Lecture: let and const
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
*/ /*
   //ES5
   function driversLicense5(passedTest) {
   if (passedTest) {
   var firstName = 'John';
   var yearOfBirth = 1990;
   console.log(
   firstName +
   	', born in ' +
   	yearOfBirth +
   	', is now officially allowed to drive a car.'
   );
   }
   }
   driversLicense5(true);
   //ES6
   function driversLicense6(passedTest) {
   let firstName;
   const yearOfBirth = 1990;
   if (passedTest) {
   firstName = 'John';
   }
   console.log(
   firstName +
   ', born in ' +
   yearOfBirth +
   ', is now officially allowed to drive a car.'
   );
   }
   driversLicense6(true);
   let i = 23;
   for (let i = 0; i < 5; i++) {
   console.log(i);
   }
   console.log(i);
   */

/////////////////////////////////////////////////
//Lecture:Blocks and IIFEs
/*
{
	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function() {
	var c = 3;
})();

//console.log(c);
*/

////////////////////////////////////////////////
//Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2018 - year;
}

//ES5
console.log(
	'This is ' +
		firstName +
		' ' +
		lastName +
		'. He was born in ' +
		yearOfBirth +
		'. Today, he is ' +
		calcAge(yearOfBirth) +
		' years old.'
);

//ES6
console.log(
	`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
		yearOfBirth
	)} years old.`
);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

//////////////////////////////////////////////////
//Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
	return 2018 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

/////////////////////////////////////////////////
//Lecture: Arrow function 2
/*
//ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str =
				'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
};
//box5.clickMe();

//ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click', () => {
			var str =
				'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};
//box6.clickMe();*/
/*
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		document.querySelector('.green').addEventListener('click', () => {
			var str =
				'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};
box66.clickMe();
*/
/*
function Person(name) {
	this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(
		function(el) {
			return this.name + ' is friends with ' + el;
		}.bind(this)
	);
	console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
};

new Person('Mike').myFriends6(friends);
*/

///////////////////////////////////////////////////
//Lecture: Destructuring
/*
//ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/////////////////////////////////////////////////////
//Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = 'dodgerblue'));

//ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
	if (boxesArr5[i].className === 'box blue') {
		continue;
	}

	boxesArr5[i].textContent = 'I changed to blue!';
}


//ES6
for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
	return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

////////////////////////////////////////////////
//Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => (cur.style.color = 'purple'));
*/

//////////////////////////////////////////////////
//Lecture: Rest parameters
/*
//ES5
function isFullAge5() {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log(2018 - cur >= 18);
	});
}

isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
	years.forEach(cur => console.log(2018 - cur) >= 18);
}
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
/*
//ES5
function isFullAge5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1);

	argsArr.forEach(function(cur) {
		console.log(2018 - cur >= limit);
	});
}

isFullAge5(21, 1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
	years.forEach(cur => console.log(2018 - cur >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/

////////////////////////////////////////////////////
//Lecture: Default parameters
/*
//ES5
function smithPerson(firstName, yearOfBirth, lastName, nationality) {
	lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
	nationality === undefined
		? (nationality = 'American')
		: (nationality = nationality);

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new smithPerson('John', 1990);
var emily = new smithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/ /*
   //ES6
   function smithPerson(
   firstName,
   yearOfBirth,
   lastName = 'Smith',
   nationality = 'American'
   ) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.yearOfBirth = yearOfBirth;
   this.nationality = nationality;
   }
   var john = new smithPerson('John', 1990);
   var emily = new smithPerson('Emily', 1983, 'Diaz', 'Spanish');
   */

////////////////////////////////////////////////////
//Lecture: Maps
/*
const question = new Map();
question.set(
	'question',
	'What is the official name of the latest major JavaScript version?'
);
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
	//question.delete(4);
	//console.log('Answer 4 is here');
}

//question.clear();

question.forEach((value, key) =>
	console.log(`This is ${key}, and it's set to ${value}`)
);

for (let [key, value] of question.entries()) {
	if (typeof key === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////////////////////////////
//Lecture: Classes
/*
//ES5
var person5 = function(name, yearOfBirth, job) {m^2
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

person5.prototype.calcAge = function() {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log(age);
};

var john5 = new person5('John', 1990, 'teacher');

//ES6
class person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calcAge() {
		let age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}

	static greeting() {
		console.log('Hey there!');
	}
}

const john6 = new person6('John', 1990, 'teacher');

person6.greeting();
*/

/////////////////////////////////////////////////////
//Lecture: Classes and Subclasses
/*
//ES5
var person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

person5.prototype.calcAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

var athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
	person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;
};

athlete5.prototype = Object.create(person5.prototype);

athlete5.prototype.wonMedal = function() {
	this.medals++;
	console.log(this.medals);
};

var johnAthlete5 = new athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();

//ES6
class person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calcAge() {
		let age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
}

class athlete6 extends person6 {
	constructor(name, yearOfBirth, job, olympicGames, medals) {
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedal() {
		this.medals++;
		console.log(this.medals);
	}
}

const johnAthlete6 = new athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calcAge();
*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

/*
Needed Params:
  Parks: trees, area (acres), age, name
  Streets: length, size
*/

console.log('---------------PARK STATISTICS---------------');
//Create park object

var park = function () {
	function park(trees, area, age, name) {
		_classCallCheck(this, park);

		this.trees = trees;
		this.area = area;
		this.age = age;
		this.name = name;
	}
	//Create function for calculating and displaying tree density


	_createClass(park, [{
		key: 'treeDensity',
		value: function treeDensity() {
			var density = (this.trees / this.area).toFixed(2);
			console.log('      ' + this.name + ' Park: ' + density + ' trees/acre');
		}
	}]);

	return park;
}();
//Create array of park objects


var parks = [foster = new park(2100, 255, 90, 'Foster'), buckner = new park(1002, 197.8, 49, 'Buckner'), lawton = new park(587, 39.33, 152, 'Lawton')];
console.log(' 1. Density of trees per acre of land');
parks.forEach(function (item) {
	item.treeDensity();
});
var aveAgeArr = [];
for (var i = 0; i < parks.length; i++) {
	aveAgeArr[i] = parks[i].age;
}
var aveAgeNum = aveAgeArr.reduce(function (a, b) {
	return a + b;
}, 0) / aveAgeArr.length;
var lotsOfTrees = [];
for (var _i = 0; _i < parks.length; _i++) {
	if (parks[_i].trees > 1000) {
		lotsOfTrees[_i] = parks[_i].name;
	}
}
console.log(' 2. The average age of the parks: ' + aveAgeNum + ' years');
console.log(' 3. Parks with over 1000 trees:');
lotsOfTrees.forEach(function (item) {
	console.log('      ' + item + ' Park');
});

console.log('---------------STREET STATISTICS---------------');

var street = function street(streetLength) {
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';

	_classCallCheck(this, street);

	this.streetLength = streetLength;
	this.size = size;
};

var streets = [first = new street(37, 'big'), second = new street(98, 'huge'), third = new street(25), fourth = new street(5, 'tiny')];

var totalArr = [];
for (var _i2 = 0; _i2 < streets.length; _i2++) {
	totalArr[_i2] = streets[_i2].streetLength;
}

var total = totalArr.reduce(function (a, b) {
	return a + b;
}, 0);
var avg = totalArr.reduce(function (a, b) {
	return a + b;
}, 0) / totalArr.length;
console.log(' 4a. The total length of all streets: ' + total + ' mi');
console.log(' 4b. The average length of all streets: ' + avg + ' mi');
console.log(' 5. The Length of all streets along with size classification:');
streets.forEach(function (item) {
	console.log('      Length: ' + item.streetLength + ' mi, Size: ' + item.size);
});
