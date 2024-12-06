 //logging hello world in console
       console.log('hello world'); //;--semicolon is must at end of statements
       let firstName = 'prasanna', secondName = 'pinnam';
               //declaring each variable in different lines is best  

       //variable cant be reserved keywords , they has to be meaningful
       //variable cant start with number, cant contain space or hyphen
       //variables are case sensitive in JS


       const interestRate = 3;
       // here if we use const we cant reassign other value to same variable later -- if we assign it will be an error

       // in javascript we use '' single quote to declare strings
        
       //primitive/value types
       let name = 'prasanna'; //string literal type
       let age = 23;//number literal type
       let isApproved = true //boolean literal type

       let carName  // undefined type
       console.log('carName: '+ carName);

       let bikeName = undefined ; //so even if we assign undefined to a variable its type will be undefined
       console.log('typeof bikename:' + typeof bikeName);


       let selectedColour = 'red';
       selectedColour = null; //null is used to clear value of a variable
       console.log('selectedColour type: '+ typeof selectedColour); 
       //here after setting selectedColor to null typeof selectedColour will be object
       //if we set a variable as null ---type of that variable will be [object] ------ imp

//////////////////////////////////////////////////////////////////////////////////////////////
       // object will have properties ---- iam a person[object] i will have name,age[my properties]
       //properties are key-value pairs
       let person = {
           name:'prasanna', 
           age:23
       };// see this semicolon is must for objects; no need for functions
         //dot notation to access object with target properties
         console.log('name of person :' + person.name);
       
         //bracket notation to access object with target properties --- always prefer this
         let selector = 'name';
         person[selector] ='lakshmi'; // or person['name'] = 'lakshmi';
         person.selector = 'pinnam'; // see this wont work coz person object dont have a property called selector --- but we can use bracket notation for this coz bracket notation checks what is inside selector
         console.log(person.name);

         //if a propertyname of object has specialcharacters/space etc... we cant access that property with dot method,then we can use bracket notation
//////////////////////////////////////////////////////////////////////////////////////////////////
         //array --- each element in an array has index to detect its position in array 
         let shoplist = ['surf','soaps',1];
         shoplist[3] = true;
         console.log(shoplist);
         //we can add new elements to array at anytime,anywhere
        console.log(typeof shoplist);  // it shows object --- coz array is of object type in JS
    /////////////////////////////////////////////////////////////////////////////////////////
    //function

    function greet(nameyou,namehubby){ //this nameyou and namehubby will be known only by this function and cant be accessed by anyone out of function
        console.log('hello'+' '+ nameyou +' '+ namehubby);
    }
    greet('prasanna');//argument given to funtion --- we get undefined in husband's place
    greet('prasanna','lakshmi');

    //parametres are given while defining function ---- arguments are given while calling functions


    function square(number){// see for function no return type required
        return number*number;
    }
    console.log("babies= " + square(2)); //here 2 function calls coz console.log() is also a function
////////////////////////////////////////////////////////////////////////////////////////////////
//arithmetic operators 
// +,-,*,/ --------- we know already

let a = 2 , b = 3;
console.log(a%b); // remainder
console.log(a ** b); // a power b
console.log(++a); // displays 3 coz adding is done and then value is printed ;same with --a
console.log(a++); // displays 2 ,after displaying a will be incremented ;same with a--

//assignment operator
a = a+5; //this stmt and below statement are same in functioning
a += 5; //addition using assignment operator


//comparision operators --- gives boolean ansr
console.log(a>1);
console.log(a>=1);//even if one condition satisfies it gives true
console.log(a<1);
console.log(a<=1);

//equality operators
    //strict equality ---- type and value match
console.log(a===9); //checks if a = 9 ; see 3 equal signs  [type,value check]
console.log(a!== 2); //checks if a is not equal to 2
console.log(a === '2'); // gives false coz a is a number 2
   
    //loose equality ------- only value match
console.log(a =='2'); // == gives true even given 2 is a number type 
console.log(true == 1); //gives true coz only value match no type match

//ternary/conditional operator ------- use this frequently
        //say if customer has more than 100 points he is gold, else he is silver
    let points = 90;
    let check = points > 100 ? 'gold' : 'silver' ;
    console.log ("customer = " + check);
    points = 100 ;
    let check1 = points > 100 ? 'gold' : 'silver' ;
    console.log ("customer = " + check1);
    points = 150;
    let check2 = points > 100 ? 'gold' : 'silver' ;
    console.log ("customer = " + check2);

///////////////////////////////////////////////////////////////////////////////////////////////
//logical and ; logical or
let moreIncome = true;
let goodCreditScore = true;
let loanEligibility = moreIncome && goodCreditScore; //&& will be true only if both are true

let loanrefused = !loanEligibility // not operator[!] --- this gives opposite value of loaneligibility
console.log('eligibility :',loanEligibility);
console.log("loan refused :", loanrefused);

//logical or || will be true even if one among both is true.

//////////////////////////////////////////////////////////////////////////////////////////////////
// in JS logical operators ||, && wont just compare true and false ,they compare any thing
console.log( false || 'prasanna'," is the reply for false||prasanna"); //output is prasanna

//in JS there is falsy and truthy concept
//falsy elements: undefined, null, 0, false,'',NaN --- everything other than falsy are truthy
//red || green --- ansr will be red --- coz JS gives first truthy as output in case of logical or
//false || 1 || 2 || 3 --------- ansr will be 1[1st truthy]---- this is short circuiting [imp]
//true && 1 && 'pras' && 3 ------- ansr will be 3 --- logical-and returns last truthy; logical-or returns 1st truthy
//falsy -- treated as false ; truthy --- treated as true

//NaN --- not a number --- if mathematical calculation is not returning correct value this will be returned

//////////////////////////////////////////////////////////////////////////////////////////////
//bitwise operators
// 2 -- 0000 0010 --- binary value
// 4 -- 0000 0100 --- binary value
//2|4 - 0000 0110 --- ansr in console -- 6 --- or bitwise
//2&4 - 0000 0000 ----ansr in console -- 0 --- and bitwise

//real life app using bitwise
// lets say for reading we on ---- 6th bit --- 0000 0100 [4]
// lets say for writing we on --- 7th bit ---  0000 0010 [2]
// lets say for executing we on - 8th bit ---  0000 0001 [1]

    let readop = 4;
    let writeop = 2;
    let executeop = 1;

    let myaccess = readop | writeop | executeop;
    console.log(myaccess); 
    // in console it prints 7 means  --- 0000 0111 --- means 3 are permitted for me read,write,execute

    //checking if i  have read permission
    let checkAccessStatus = (myaccess & writeop)? 'yes' : 'no';
    console.log ('your access to writeop is '+ checkAccessStatus ); 


//even JS uses BODMAS rule while solving complex calculations
    
//swap 2 nums using extra variable -- easy code --- recall logic ---- 
//c=a
//a=b
//b=c
