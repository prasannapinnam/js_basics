//functions are objects in javascript
//function can be written in 2 ways in JS

//function declaration
function walk(){
    console.log('walk');
};

//function expression --- here just like we assign a object to variable we assigned fuction to a variable
 let walkFunction = function(){   //as this function has no name this is anonymous function expression
     console.log('walk');
 }

 walkFunction();


 //named function expression
 let walkFunction2 = function walk(){ 
    console.log('walk');
};


let walkFunction3 = walkFunction2; //means reference will be copied , both will point same memory
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//hoisting --- all function declarations will be moved to top of file in runtime by JS engine

//so we can call a function even before declaring it as as function declaration

//we cant call a function before writing it  as function expression

walker();

function walker(){
    console.log('walker');
};

/////////////////////////////////////////////////////////////////////////////////////////////////
//we know javascript is a dynamic language
//if we declare a function with 2 parametres --- no matter how many arguments we give function takes only 2 parametres
//if we declare a function with 2 parametres ---if we give only 1 argument,the other argument will be undefined

//if we want our function to take any num of params
//every function in JS has a inbuilt object called arguments so even if we didnot define function with parametres still it takes all arguments we give while calling that function

function sum (a,b){ //even if we did not mention a,b this will work  
    let summer = 0;
    for(let element of arguments){ //arguments is an object ; in arguments object keys will be indexes 0,1,2,3... ; values will be parametres passed
        summer = summer+element;
    }
    return summer;
}

console.log(sum(1,2,3,4,5));



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//rest operator --- we can keep n num of parametres before rest operator but no parametre can be placed after rest operator

function discounter(discount,...args){  //here if we use 3 dots as parametre in function it is rest operator it can accept n numer of arguments and it is an array
    let sum = args.reduce((a,b) => a+b); //as args is an array we can use reduce method on it
    return sum *(1-discount);
}

console.log(discounter(0.2,10,20,30,40,50)); // 150 * 0.8 = 120 is ansr

//with spread operator -- we can spread an array --- that is different from this
////////////////////////////////////////////////////////////////////////////////////////////////////
//if we declare a funtion with 2 parametres ---- but if we give only 1 argument while calling the function other argument will be undefined
//to handle this we have default parametes

function principleCalculator(principal, rate = 3.5, years =2){
    return principal*years*rate/100 ;
}

console.log(principleCalculator(1000)); // here even if we didnot pass rate,value -- computer took default values

//always define default valued params at last in the function

/////////////////////////////////////////////////////////////////////////////////////////////////

//getters ------- to access properties of an object
// setters -------- to change properties of an object

const person = {
    firstName : 'lakshmi',
    lastName : 'prasanna',
    get fullname(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullname(value){
        const parts = value.split(' '); // parts will be an array
        person.firstName = parts[0];
        person.lastName = parts[1];
    }
}


person.fullname = 'sri rama';
console.log(person);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//error handling ----- try catch

//what if setter gets a empty string it has to throw an exception

const person2 = {
    firstName : 'lakshmi',
    lastName : 'prasanna',
    get fullname(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullname(value){
        if(typeof value !== 'string'){
            throw new Error("enter a string"); // creating error object and throwing an exception
        }
        if(value.length !== 2){
            throw new Error("enter first name and last name");
         }
        const parts = value.split(' '); // parts will be an array
        person.firstName = parts[0];
        person.lastName = parts[1];
    }
}
try{ 
person2.fullname = true; // here we get exception if we give wrong values ---so wrap it in try block
}
catch(e){
    console.log(e.message); // catching error -- e is error object which was thrown 
}

console.log(person2);

//always use let or const to create variables --- please dont use var
//when code throws a exception code below that wont be executed and control goes to catch block
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//[this] refers to the object that is executing current function

//if [this] is in method/function of an object --- [this] refers to that object

const video = {
    title :'a',
    play(){ //function in object
        console.log(this);
    },
}

video.play(); // see [this] displayed video as its object

video.stop = function(){ console.log(this);}; ////creating a new function as property in video object
video.stop();

//////////

//if [this] is in a regular function which is not in object---- [this] refers to window object/ global object ---- we should not use window object coz everything inside in window object becomes global and any one can access window object if they modify our properties and methods it results in bugs
function lovely(value){
    console.log(this); // here this returns window object
}
lovely('prasanna');



function Lovely2(value){
    this.value = value;
    console.log(this);
};
const love = new Lovely2('prasanna'); //here we used [new] keyword which make [this] refer to this new object
console.log(love);


const lovely3 ={
    name:'peshie',
    tags: [1,2,3,4],
    tagsDisplay() {
        this.tags.forEach(function(tag){ //function inside foreach is a callback fn ---- it is not considered as a part of lovely3 object
            console.log(this.name,tag);
        },this) // here [this] at last ---- says this.name to refer to lovely3 object not to global object --- if we did not use [this] here at last then this.name refers to window object as it is inside a normal function which is not a method of lovely3 object
    },
};
lovely3.tagsDisplay();

//but some functions wont have second parametre to use [this], as we used in forEach tag
//here instead of funtion(tag) --- if we use arrow function --- [tag =>] ------- no need to put this at end, as arrow function inherit [this] from containing function

///////////////////////////////////////////////////////////////////////////////////////////////////
//methods to set this object of given function --- call,apply,bind

function playVideo(a,b){
    console.log(this);
    console.log(a+b);
}

const ids = {
    id1:1,
    id2:2,
    id3:3
};


playVideo.call(ids,1,2); //here call means [this] inside playVideo function refers to object inside call function --- here others params are written seperated by commas 
playVideo.apply(ids,[1,2]); //here call means [this] inside playVideo function refers to object inside call function -- here other params will be written as array

function playVideo2(){
    console.log(this);
}

playVideo2.bind(ids) (); //bind returns a function who's [this] always points to ids object --- //here other () is for calling new created function

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//summing exercise

function summer(...elements){ // used rest operator , here elements is array of arrays
    if (elements.length === 1 && Array.isArray(elements[0])){ //Array.isArray() --- inbuilt function --- returns true if argument given to it is an array, else returns false
    elements = [...elements[0]]; // using spread operator
    let sum = elements.reduce((a,b) => a+b);
    return sum;
    }

}

console.log(summer([1,2,3,4,5])); //accepting array and summing elements of array

///////////////////////////////////////////////////////////////////////////////////////////////////
//make a circle object whose area value will be read-only

const circle ={
    radius:1,
    get area(){
        return Math.PI * this.radius * this.radius
    }
};

console.log(circle.area);
circle.area = 20;
console.log(circle.area); // see it wont change

//////////////////////////////////////////////////////////////////////////////////////////////////

