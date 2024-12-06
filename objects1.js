//object oriented pgm is a type of pgm where objects talk with each other to perform a functionality

// object will have key value pairs
//object can have functionality --- mentioned in its functions --- functions inside object are called methods
//objects can also have other objects in it

const circle = {
    radius:20,
    location: {  // object in object -- but here we have to use colun [:] , coz it is a key-value pair also
        x:1,
        y:2
    },
    isVisible:true,
    draw:function(){ //function inside an object --- draw is key of this function --- no need to mention function name
        console.log('drawn circle');
    }
}

circle.draw(); 

///////////////////////////////////////////////////////////////////////////////////////////
// factory functions
// for every object we cant write above code and what if we have long and many functions in  object
// if we create multiple objects by writing such long codes ,it is a mess so use factory functions
// factory functions produce num of objects easily

//lets create a factory function for circle objects with 2 properties --- radius, draw function
function createCirle(radius){
    return {
        radius:radius, //no need to write like this as both key and value are same just write one radius its fine in JS 
        draw(){ //methods inside factory fns need not have function keyword
            console.log('drawn circle');
        }
    }
}

const circle1 = createCirle(10); //see factory fns wont use [new] to create new objects
console.log(circle1);
const circle2 = createCirle(20);
console.log(circle2);

//so see we defined draw method only at one place but created multiple objects,so any bug in draw function can be corrected easily at one place
// if we manually create every object and copy same function for every object its difficult to modify when there is a bug

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//constructor fns ---- widely used --- uses pascal notation ---OneTwoThreeFour
//constructor functions will also produce num of objects easily


function Circle(radius){
    this.radius = radius; // this refers to any object executing this piece of code
    this.draw = function(){
        console.log('drawn a circle');
    }
}

const circle3 = new Circle(10); //new does 3 things --- creates empty JS object ---- makes [this] point to new empty object created ---- sets all values for new object and [returns that object] from funtion to circle3
 console.log(circle3);

 //if we did not metion new while creating objects using constructor fns --- then this in constructor fn references global/window object
 //so above call will be like --- const circle3 = Circle.call(window,10) ----- if we use [new] key word it will be like --- const circle3 = Circle.call({},10) ---- see here [new] created new empty object 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////
const circle4 = {
    radius:100,
}

//objects are dynamic --- above we have declared an object called circle4
//we can add more properties to this object circle4 outside object declaration also

circle4.color = 'purple';
circle4.draw = function() {} //no need to use semicolon[;] as we are assigning function to variable

console.log(circle4);
delete circle4.color; //deleting object property
console.log(circle4);

// here even if we use const we can change properties of that object
//we cant totally reassign that const variable to a new object thats all---  like const circle4 = { radius:300}

////////////////////////////////////////////////////////////////////////////////////////////////
//constructor

//every object in JS have an inbuilt property called constructor
//if we type object.constructor[in console] ---- it refers to the function which created that object

//objects created via constructor functions returns --- that constructor function with which they were created when we call object.constructor
//object created via factory functions returns ---- native builtin constructor function [Object] --- when we call object.constructor


// in JS if we create an empty object 
// let x = {}; ---- internally it calls an in built object function ---- let x = new Object();
//if we create string
//let x = 'prasanna'; ---- internally it calls an in built string function ---- new String();
//new number();-- inbuilt function ---- will be called when we create a number
//new Boolean(); ---- inbuilt function ---- will be called when we create let x =true;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// in JS functions are nothing but objects

//if we create a function say -------  function rectangle(){ } ----- rectangle will be a object created by inbuit constructor function called-----  function()
//for a function say --- function peanut(limit){} ------- if we type peanut.length ---- it returns 1 ---- 1 means num of parametres of the function peanut
//as this rectangle is an object it will have some properties,methods also like --- rectangle.call(), rectangle.arguments etc...


/////////////////////////////////////////////////////////////////////////////////////////////
// primitive types copy the value ; reference types[object,arrays,fns] copy the reference

//primitive
let x = 20;
let y = x; //value copied into memorylocation pointed by y

x = 30
console.log(x); //---- 30
console.log(y); //--- 20


//reference
let po = {value : 20} ;
let q = po; // address copied --- means q also points memory location which po points

po.value = 40;
console.log(po); //---- 40
console.log(q); //--- 40

///////////////////////////////////////////////////////////////////////////////////////////////
//we cant use for-of loop directly on objects --- coz objects are not iterable like arrays and maps
//using for-of loops on objects
//we know that objects are created by inbuit Object() function

//enumeration --- means parsing through list of items

//object enumeration via for-of loop
//generally we enumerate objects with for-in loop

const circle5 = {
    radius:20,
    diametre:40,
    draw:function(){ //function inside an object
        console.log('drawn circle');
    },
    pastye:function(){
        console.log('pasted circle');
    }
}

//for-in loop
console.log('for-in loop enumeration of objects');
// display keys of only properties not methods
for(let key in circle5){
    if(!(typeof circle5[key] === 'function'))
        console.log(key,circle5[key]);
}

for(let key of Object.keys(circle5)){ //using inbuilt object function[functions are objects and they have methods] we are accessing keys of circle5 using inbuit keys() method of Object function --- keys() is inbuilt function of object() function
    console.log(key);
}

for(let entry of Object.entries(circle5)){ //fetching entire keyvalue pair from circle5 object --- //entries is an inbuilt function
    console.log(entry);
}

if('color' in circle5) { console.log('yes')}; // prints yes if there is a property/method with key called color in circle5 object

////////////////////////////////////////////////////////////////////////////////////////////////
//taking properties of an object and putting them in other object [cloning of object]

console.log('cloning object');
const circle6 = {
    radius:20,
    draw:function(){ //function inside an object
        console.log('drawn circle');
    }
}

//very immature way of cloning
const another = {} //creating an empty object  --- it can contain some properties also like color:red
for(let key in circle6){
    another[key] = circle6[key]; //values will be copied not reference
}
console.log(another);

//simple way
const another1 = Object.assign({color:'red'},circle6); //using assign --- we can combine multiple objects into one object using assign , we can give multiple source objects which are to be combined into target object which is 1st one
console.log(another1);

//simpler way
const another2 = {...circle6}; //... is spread operator; ...circle6 takes all properties of circle6 and places them between {} in {...circle6}
console.log(another2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// in c and c++ we have to deallocate memory of variables once usage is done
//in JS we have garbage collector which finds variables and constants which are no longer used and deallocate memory occupied by them

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math is an inbuilt object in javascript --- used for many mathematical operations
//eg: Math.random() ----- gives a random decimal b/w 0 and 1
//Math.round(8.6) ----- gives round fingure of num ---- 9
//Math.max(1,2,3,4,5) ----- gives 5 as output

/////////////////////////////////////////////////////////////////////////////////////////////////
// for primitive types we dont have properties and methods
//for reference types we will have properties and methods

//primitive string literal
const myName = ' prasanna is \'good girl\''
//even if this is a primitive string we can use properties and methods on this as javascript wraps this in a string object when we type [myName.someproperty]
console.log(typeof myName);//string
console.log(myName.length);
console.log(myName[3]); //returns a -- coz place [0] is whitespace in our string
console.log(myName.includes('is')); //returns true
console.log(myName.startsWith('P')); //false coz p should be small
console.log(myName.indexOf('good'));//12

console.log(myName.replace('good','beautiful'));//wont change original string it returns new string
console.log(myName.toUpperCase());
console.log(myName.trimLeft()); //removes all whitespaces at leftend of string
console.log(myName.split(' ')); //splits message based on whitespace, returns array

//string object
const anotherMyName = new String('lord krishna');
console.log(typeof anotherMyName); //object
console.log(anotherMyName.endsWith('a'));  //gives true 
///////////////////////////////////////////////////////////////////////////////////////////////////
//`` ------ template literal
const desc = 'iam pinnam lakshmi prasanna \n daughter of \'rama rao\''
console.log(desc);

//using template literal --- `` --- no need to mention these escape character and code looks cleaner

const desc2 = 
`iam pinnam lakshmi prasanna
daughter of 'rama rao'`
console.log(desc2);

//both desc,desc2 gives same reply


//writing a letter to collector --- using string --- using template literal --- easyyyyyyyy
const name3 = 'collector';

const letterToAuth = 
`hi ${name3} ${2+5}
date:20/11/23;

dear sir,
we have water problem in banglore,please solve.
                            thanking you,

                            yours faithfully,
                            prasanna pinnam. `;


console.log(letterToAuth);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// we have an inbuilt object called Date in JS

const now = new Date(); //gives date of today
console.log(now);

//for Date() constructor we can pass different values also in 6 formats
//here months count will be 0-11 , not 1-12

//we have getters and setters for this Date() method
console.log(now.getDay());

console.log(now.toISOString()); //ISOString is commonly used international standard for date & time in designing websites, when client talks to server

///////////////////////////////////////////////////////////////////////////////////////////////
//excercise

const address = //object literal syntax
{
    street:'dwarakapuri-5',
    city:'sathupalli',
    zipcode:507303
}


function showAddress(adde){
  for(let entry in adde){
      console.log(entry,adde[entry]);
  }
}

showAddress(address);

//////////////////////////////////////////////////////////////////////////////////////////////
// above Address object via factory function and constructor function

function createAddress(street,cityName,pin){
    return{
        street,
        city:cityName,
        zipcode:pin
    };
}
const myaddress = createAddress('rajagrih','bihar',56784);
showAddress(myaddress); //defined in above excercise


function CreateAddress1(stName,cityName,pin){ //remember pascal notation for constructor fns
    this.street = stName,
    this.city = cityName,
    this.zipcode = pin 
}

const myaddress1 = new CreateAddress1('kungfustreet','beijing',897654);
showAddress(myaddress1);

/////////////////////////////////////////////////////////////////////////////////////////////
const myaddress2 = new CreateAddress1('lotusstreet','newyork',8);
const myaddress3 = new CreateAddress1('lotusstreet','newyork',8);

function areEqual(address1,address2){ //check if value of every property is same
     return address1.street === address2.street &&
      address1.city === address2.city && address1.zipcode === address2.zipcode;
     }


function areSame(address1,address2){ //check if both addresses refer to same memory location
    return address1 === address2;
}

console.log(areEqual(myaddress2,myaddress3)); //true
console.log(areSame(myaddress2,myaddress3)); //false --- coz both wont point same location

//to check if both objects have equal values ---- we have to check if each of its property is equal

let myaddress4 = myaddress3; //here both addresses will refer to same memory space
console.log(areSame(myaddress3,myaddress4));//true
/////////////////////////////////////////////////////////////////////////////////////////////////
//creating blogpost object

const post = //object creation using object literal
{
    title:'a',
    body:'b',
    author:'c',
    views:10,
    comments:[ //array declaration
        {commentAuthor:'d',body:'e'}, //object inside array
        {commentAuthor:'f',body:'g'},
    ],
    isLive: true

};

console.log(post);

//constructor function for above object , when post is not yet posted --- means views will be 0, no comments,not live

function Post(title,body,author){ //use pascal notation for function name as this is constructor fn
    this.title =title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const underDesign = new Post('a','b','c');
console.log(underDesign);
////////////////////////////////////////////////////////////////////////////////////////////////
