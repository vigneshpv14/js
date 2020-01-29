// Creating Objects using the Function Constructor
/*
var zack = {
    name: 'Zack',
    yearOfBirth: 1997,
    job: 'software engineer'
};

// Lets use a blueprint to recreate this object! We will do this with a function constructor. its a pattern, or like writing a blueprint

var PersonConstructor = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // add a method to our object. might as well do it to the function constructor
    
}

// add prototype to personConstructor so we can use it more efficiently on diff people
// this is adding a method
PersonConstructor.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth - 1);
};

// adding a property
PersonConstructor.prototype.lastName = 'BumpNasty';


// when we use the new operator/keyword, a brand new empty object is created! Then, the PersonConstructor function is called, and passed in arguments we specify
var zack = new PersonConstructor('Zachary', 1997, 'software engineer bruh');

//grab that zack object and run the calculateAge method on it
zack.calculateAge();

var bran = new PersonConstructor('Brandon', 1998, '3m production operator');
var mama = new PersonConstructor('mama', 1970, 'head hauncho');

bran.calculateAge();
mama.calculateAge();

// calling the new property lastName
console.log(zack.lastName);
console.log(bran.lastName);
console.log(mama.lastName);
*/










// 62. The Prototype Chain in the Console
// 63. Creating Objects: Object.create
    // first define an object that will act as a prototype, then create a new object based on that very prototype

/*
var personPrototype = {
    calculateAge: function(){
        console.log(2020 -
            this.yearOfBirth - 1);
    }
};

var zack = Object.create(personPrototype);
zack.name = 'Zack';
zack.yearOfBirth = 1997;
zack.job = 'engineer';

var dad = Object.create(personPrototype,
    {
        name: { value: 'Jeff' },
        yearOfBirth: { value: 1973 },
        job: { value: 'BNSF' }
    });
    */






// 64. Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // should be 46
console.log(b); // should be 23 since we mutated a on a later line than we defined b




// Objects
var object1 = {
    name: 'Zack',
    age: 22
};

var object2 = object1;
object1.age = 23;

console.log(object1.age); // should be 23 since we mutated
console.log(object1.age); // should be 23 since our object2 only has a reference to the object1 in storage. So basically whatever object1 is, regardless of placement, it can come before/after
*/



// Lastly, lets see what happens when we pass a primitive and an object into a function
// Functions
/*
var age = 27;
var obj = {
    name: 'Bran',
    city: 'Aberdeen'
};

function dataMutater(a, b){
    a = 30; 
    b.city = 'San Francisco';
}

dataMutater(age, obj);

console.log(age); // primitive should remain unchanged. When we created the original primitive, a simple copy was made, we can change a as much as we want it will never change on the outside
console.log(obj.city); // should change to San Fran because we changed the reference that points to the object
*/



// 65. First Class Functions: Passing Functions as Arguments
    // functions accepting functions as other arguments... we actually did this with our event listeners

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


// Callback function! aka argument in the function is a function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeart = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeart);
*/



// 66. First Class Functions: Functions Returning Functions
/*
function interviewQuestion(job) { 
    if (job === 'designer'){
        return function(name) { // anonymous function bc no name
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else  {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Zack');
teacherQuestion('Debbi');
designerQuestion('Brandon');


interviewQuestion('teacher')('Mr. Northrup');
interviewQuestion('designer')('Kanye West');
*/




// 67. Immediately Invoked Function Expressions (IIFE)
// Basically creating a new scope that is hidden from the outside scope. Data privacy, and dont interfere with other variables in our execution context
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// console.log(score);
*/




// 68. Closures
// GOAL: write/create a small function that returns a function that calculates how many years we have less until retirement

/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
       var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

// call function
var retirementUSA = retirement(66);
// or can call it this way
// retirement(66)(1997)
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUSA(1997);
retirementGermany(1997);
retirementIceland(1997);




// function interviewQuestion(job) { 
//     if (job === 'designer'){
//         return function(name) { // anonymous function bc no name
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//              console.log(name + ', can you please explain what UX design is?');
//         }
//     } else  {
//         return function(name) {
//              console.log(name + ', can you please explain what UX design is?');
//         }
//     }
// }


function interviewQuestion(job){
    return function(name){
      if (job === 'designer' ){
        console.log(name + ', can you please explain what UX design is?');
      } else if (job === 'teacher'){
        console.log(name + ', can you please explain what UX design is?');
      } else {
        console.log(name + ', can you please explain what you do?');
      }
    }
}

// Call it for a teacher
interviewQuestion('teacher')('Zack');
interviewQuestion('designer')('Brandon');
interviewQuestion('other')('Debbi');
*/




// 69. Bind, Call and Apply
var zack = {
    name: 'Zack',
    age: 22,
    job: 'software engineer',
    // we want zack to say a sentence in which he presents himself, with a method
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
    // we can use the preseention methody in Emily object using the  call method to grab that presentation in the zack object
}


zack.presentation('formal', 'morning');
// Using call method, also known as method borrowing
zack.presentation.call(emily, 'friendly', 'afternoon')
// The apply method is similar, only diff is the apply accepts the arguments as an array
// zack.presentation.apply(emily, ['friendly', 'afternoon']); // shouldn't work since our presentation isn't expecting to receive an array 
// Using the bind method, is similar to call, allows us to set this variable explicity, but it doesn't immediately call the function, instead generating a copy so we can save it or store it. Good for creating a function with preset arguments
var zackFriendly = zack.presentation.bind(zack, 'friendly');
zackFriendly('afternoon');

// more practice

var emilyFormal = zack.presentation.bind(emily, 'formal');
emilyFormal('Winter')







var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}


function isFullAge(el) {
    return el >= 18;
}