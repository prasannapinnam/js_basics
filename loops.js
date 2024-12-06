// conditional statements
// if else

let hour =10;

if (hour>=6 && hour<12){ //for multiple stmts brackets are required
    console.log('good morning');
    console.log('have bath');
    console.log('start the day');
}
else if(hour>=12 && hour<18) //for single stmt no need of brackets
    console.log('good afternoon');
else
    console.log('good evening');


//switch case

let role = 'guest';

switch (role){
    case 'guest':
        console.log("guestuser");
        console.log('please go to guestroom');
        break; // after this below case stmts wont be executed
    case 'owner':
        console.log("owner");
        break;
    default:
        console.log("not allowed");
    }

/////////////////////////////////////////////////////////////////////////////////////////////
//loops
//for, while, do-while, for-in, for-of

//for loop
//print oddnums till 5
for(let i=1;i<=5;i++){ //i variable here is only accessible inside forloop
    if(i%2 !== 0) console.log(i);
}
console.log("now reverse");
//print odd nums from 5 to 1
for(let i=5;i>=1;i--){
    if(i%2 !== 0) console.log(i);
}


//while loop
//print odd nums reverse
console.log("while loop reverse odd nums");
let i=5
while (i>=1){
    if(i%2 !==0) console.log(i);
    i--;
}

console.log("do while loop");
//do-while loop ---- this will be executed atleast once even if condition fails, but it wont happend in while loop
let j=9
do{
    if(j%2 !==0) console.log(j);
    j--;
}while (j>=1 && j<=5);
//see 9 is printed even if it did not satisfy our while condition ; this wont happend in while loop coz while condition is checked 1st


//infinitie loops ------ they crash our browser and computer
//eg : while(true) {console.log("hi");}
// eg2: for(let i=0;i>0;i++) {console.log ({hi");}


///////////////////////////////////////////////////////////////////////////////////////////////

//for-in loop --- used to iterate over object properties or elements of an array
let person = {
    name:'prasanna',
    age:23
};

for(let key in person){
    console.log(key, person.key); // see here person.key gives value as undefined coz we dont have a property named key in person object
}
console.log ("after using bracket notation");

for(let key in person){
    console.log(key, person[key]); //see here we used bracket notation -- bracket sees what property is stored in key ; not just key
}                                   

//for-in loop for arrays
console.log ("forin loop for  arrays");
let arr1 =['red','blue','green'];
for (let index in arr1){
    console.log(index, arr1[index]); //see here we used bracket notation --- if we use dot we wont get result here
}

////////////////////////////////////////////////////////////////////////////////////////////////
//for-of loop in arrays ---- cant be used for objects like this --- this is ideal for arrays
console.log('for of loop in arrays');
let arr2 = ['pink','green',1]
for(let index of arr2)
{
    console.log(index); //see here no need to even use bracket notation, the index directly fetches value
}
///////////////////////////////////////////////////////////////////////////////////////////////
//with break key word we completely come out of loop
//with continue keyword we can skip an iteration

//printing odd nums with continue
i=1;
console.log("printing odd nums using continue");
while(i<=9)
{
    if(i%2 ===0){
        i++;
        continue;
        
    }
    console.log(i);
    i++;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//exercises
//max of 2 nums code

let maxnum = max(26,39);
console.log("maxnum is " + maxnum);

function max(a,b){
    if(a>b) return a;
    return b; // this will be executed only when return a did not happend, so no need of else stmt for returning b
}

// we can use ternary operator also for this
// return (a>b) ? a : b ;
///////////////////////////////////////////////////////////////////////////////////////////////////
// check if paper is landscape or not


function isLandscape(width, height){
    return (width>height);  //see width>height gives boolean if width>height returns true else false ; so dont use if else or ternary operators like fools
}

console.log("statement paper is landscape is "+ isLandscape(200,400));
console.log("statement paper is landscape is "+ isLandscape(900,400));

////////////////////////////////////////////////////////////////////////////////////////////////////
//interview qn --- fizzbuz algo

//retrun Fizz if num is div by 3, Buzz if divisible by 5; fizzbuzz if div by both ;NaN if it is not a number;return input if not divisible 3 or 5
const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') // first check if given input is a number or not so that if it is not a num,no need to execute all divisibility checks
        return NaN; // special primitive type --- not a number
    if ((input % 5 === 0) && (input % 3 === 0)) // here we have to put this first ,if not even if num is divisible by anyone of them execution will stop there
        return 'FizzBuzz';
    if(input % 3 === 0)
        return 'Fizz';
    if(input % 5 === 0)
        return 'Buzz';
    return input;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//speedlimit < = 70
// above 70 for every 5kms --- 1 point addition --- so 70+5 =75-- gets 1 point--- till 74 no charge
// on reaching 12 points ------ license cancelled
//use Math.floor()

let statusi = checkSpeed(170);
console.log(statusi);

function checkSpeed(input){
    const speedLimit = 70;
    const numofkmsPerPoint = 5; // here i declared 5 in variable coz if i have to change kmsper point i can change it just here not in entire code,i used const coz by mistake if i assign other value to this in code it returns error
    if(input< speedLimit + numofkmsPerPoint)  return 'OK';
    let points = Math.floor((input-speedLimit)/5);
    if (points>12) return 'license cancelled'; //if this return did not happend bottom steps will be executed
    console.log('points :');
    return points;
}
////////////////////////////////////////////////////////////////////////////////////////////////////

//print numbers from 0 to count and tell if it is even or odd
showNumbers(10);

function showNumbers(count){
for(let i=0;i<=count;i++){
   const displayee = (i%2 === 0)? 'EVEN' : 'ODD';
   console.log (i+ ':'+displayee);
}
}
///////////////////////////////////////////////////////////////////////////////////////////////
// count total truthys in array

//falsy --- undefined,false,'',NaN,null,0 --- everything otherthan this are Truthy

console.log('counting truthys');
const arryee = ['',undefined,'peshie',4,9];
countTruthy(arryee);

function countTruthy(array){
    let count =0;
    for(let element of array){
        if(element){ //here no need of comparing element with all falsy's coz ; any element passes if condition only if it is true or truthy
            count ++;
        }
    }
    console.log(count);
    return count;
}

//////////////////////////////////////////////////////////////////////////////////////////////
const address = 
{
    street:'dwarakapuri-5',
    city:'sathupalli',
    zipcode:507303
}

//return entries of object which are strings 

function returnStringProps(obj){
    for(let key in obj)
        if(typeof obj[key]==='string')
            console.log(key,obj[key]);
}

returnStringProps(address);

///////////////////////////////////////////////////////////////////////////////////////////////
console.log(sumOf(10));

//return sum of multiples of 3 or 5 which are b/w 0 and given num

function sumOf(number){
    let summer = 0;
   for(let i=0;i<=number;i++)
       if(i%3 === 0 || i%5 === 0){
           console.log(i);
           summer += i;
       }
       
   return summer;
}
////////////////////////////////////////////////////////////////////////////////////////////////
 //if avg is b/w 1-59 --- F grade ;
 //60-70 ---- D
 //70-80 ------C
 //80-90 ------ B
 //90-100 ---- A

 const marks = [40,50,100]; // 190/3 = 63


 function calcAvg(marklist){
    let avg = 0;
    let sum = 0;
       
    for(let index in marklist)
           sum += marklist[index];
   
   avg = sum/marklist.length; // see how we used length property

return avg;
 }

 function calculateGrade(marklist){

   let avg = calcAvg(marklist);

    if(avg<60) return 'f';
    if(avg<70) return 'd'; // code will come to this case only when avg is atleast 60
    if(avg<80) return 'c';
    if(avg<90) return 'b';
    return 'a';  
 }
 console.log(calculateGrade(marks));

 /////////////////////////////////////////////////////////////////////////////////////////////
 function printStars(num){
     let str = '';
     for (let i = 1; i<=num; i++)
        str += '*';
    
    return str;
 }
 function showStars(count){
     for(let i=1; i<=count;i++)
         console.log(printStars(i));
 }

 showStars(5);

 //////////////////////////////////////////////////////////////////////////////////////////////
 showPrimes(10);

 function isPrime(number){
    for(i=2;i<number;i++) //if we did not given condition in middle and leave it blank ---- our for loop becomes infinite 
        if(number%i === 0)
           return false;
    
   return true;
}

 function showPrimes(limit){
     for(j=2; j<=limit; j++)
         if(isPrime(j)) 
            console.log(j); //even this if stmt has many lines for loops treats them as 1 line,no need of braces for for loop ;if there are >1 line in if stmt --- if requires bracket 
     
 }

  //please dont use nested loops ----make them as 2 seperate functions just like we did above

 
//see here even if we write them as 2 different functions finally in runtime execution they will be treated as nested loops by JS engine so use different variables i,j in both for loops --- else if we use i in both , code will crash
