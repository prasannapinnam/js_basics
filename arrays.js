//here const doesn't stop us from modifying existing arrays, it only prevents us from assigning new array to the variable

//adding elements to an array

const numbers = [3,4];

//adding elements at end
numbers.push(5,6);
console.log(numbers);

//adding elements at beginning
numbers.unshift(1,2);
console.log(numbers);

//adding elements in middle
numbers.splice(2,2,9,10,19); //params --- 1st 2 is saying from index 2 ; second 2 is delete 2 numbers from that index, last 3 numbers are values to be inserted from index 2
console.log(numbers);
numbers.splice(2,0,'a','b','c','d'); // 0 means no need to delete anything
console.log(numbers);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//finding primitive elements in an array

const numbers1 = [1,2,3,4,1,2];

console.log(numbers1.indexOf(3)); //fetches index of 3 from array ; if we pass 3 as string it wont return index of number 3
console.log(numbers1.indexOf(1,2)); //searching of array starts from index 2; searches 1 and gives it index

console.log(numbers1.lastIndexOf(1)); //if 1 is appearing many times in array,this returns what is the index of last 1 in the array
console.log(numbers1.includes(4)); //returns true if 4 is in array

///////////////////////////////////////////////////////////////////////////////////////////////////////
//finding reference type elements in an array
//objects are reference types, to check their equality we have to compare each of its element
//to check an array with objects we use find method


//array with 2 objects
const courses = [
    {num:1, name:'a'},
    {num:2, name:'b'}    
]; //semicoln here is imp

//finding course with certain property
const courseFinder = courses.find (function(course){ //find takes a function[callback function/predicate] as parametre --- checks if asked course is present in courses or not
    return course.name === 'a'; //when some index of array hits this conditions and returns true ,find method fetches value from that reference and places it in declared variable
}
);
console.log(courseFinder);
//if there is no element with course name 'a' --- we get undefined as ansr


//if we want to find index of an object with certain property use findIndex instead of find in above code
const courseFinder0 = courses.findIndex(function(course){ //returns 0
    return course.name === 'a';
}
);
console.log(courseFinder0);


//finding and object in an array with arrow function --- cleaner way 

const coursefinder2 = courses.find(course => course.name === 'b'); // here course iterates through all objects in the courses array; just like above function we are checking if that object's name is equal to b ;if true we return that whole object
console.log(coursefinder2);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//removing elements of an array
const arrnum = [1,2,3,4,5];

//removing last element and returning it --- done by pop()
const last = arrnum.pop();
console.log(arrnum);
console.log(last);

//removing 1st element and returning it --- done by shift()
const first = arrnum.shift();
console.log(arrnum);
console.log(first);

const arrnum1 = [1,2,5,9,10,11];
arrnum1.splice(2,2); //deleting 2 elements from index 2
console.log('spliced'+ arrnum1);


// emptying an array
arrnum1.length = 0; //by setting length of array to 0 we can empty that array
console.log(arrnum1);
//////////////////////////////////////////////////////////////////////////////////////////////////
//combining and slicing arrays

const arre1 = [1,2,3,4];
const arre2 = [5,6,7,8];

//combining

const combined = arre1.concat(arre2);
console.log(combined);

//slicing and displaying part of an array
 console.log(combined.slice(2,4)); // slicing array from 2nd index to 3rd index and returning those 2 elements, even if we give 4 num at index 4 wont be sliced
 console.log(combined.slice(2)); //returns elements from index 2
 console.log(combined.slice()); // returns entire combined array

 //combining reference type array
 const arre3 = [{id:20}]; //as this is object it can be copied only by reference

 const combined1 = arre3.concat(arre1);
 arre3[0].id = 40; //changing id of object in arre will also change object in combined1 as both refer to same memory space
 
 console.log(combined1);

 //combining arrays using spread operator will be cleaner 
 let combined3 = [...arre1,'a',...arre2,'b']; //see we can add other elements easily in our combined using ...
 console.log(combined3);

 //spread operator copies values of objects, not just reference

 const copy = [...combined3]; // copying values of combined3 into copy --- imp
combined3 = [...arre1,...arre2];
 console.log('copy',copy);
 console.log('combined3',combined3);//see both are different
 const copy1 = combined3; //copying reference of combined3 into copy1 there is a lot of difference
 console.log(combined3);

 ////////////////////////////////////////////////////////////////////////////////////////////////
//iterating an array
const numberso = [1,12,23,34,45];

numberso.forEach((value,index) => console.log(index,value));

///////////////////////////////////////////////////////////////////////////////////////////////
//joining an array

//join method returns a string

const numee1 = [1,2,3,4,5];
const joine = numee1.join('');
const joine1 = numee1.join(';'); //joining array elements using ;

console.log(joine);
console.log(joine1);

// for a string
const mydesc = 'hi this is prasanna'; //convert this to array
const splitter = mydesc.split(' ');  //converts string to array
console.log(splitter);

const joinaray = splitter.join('-'); // joining arrayelements using -
console.log(joinaray);

////////////////////////////////////////////////////////////////////////////////////////////////
//sorting an array
const toBeSorted = [3,1,2];

const sorted = toBeSorted.sort(); //sort converts elements in array to strings and compare them
console.log('aftersort');
console.log(sorted);

//reversing the array

console.log(sorted.reverse());

//sorting array with objects

const toBeSorted1 = [
    {id:1 , name:'Prasanna'},
    {id:2 , name:'lakshmi'},
    {id:0, name:'pinnam'}
];

//here if we want to sort toBeSorted1 based on name property ;  in .sort() we have to give a function as parametre which compares elements of objects and sort them

const sorted2 = toBeSorted1.sort(function(a,b){ //comparing object a and object b of a array
    //a>b --- 1
    //a<b ---- -1
    //a===b --- 0
    
    if(a.name.toUpperCase() < b.name.toUpperCase()) return -1; //we converted them to same case coz if there is comparision b/w uppercase letter and lower case letter as uppercase letters have less ASCII values compared to lower case it will be a pblm
    if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
})

console.log(sorted2); //now array will be sorted based on names not on id's

//////////////////////////////////////////////////////////////////////////////////////////////////////
//every() ---this method is used to check if all elements of our array follow a specific criteria --- stops iteration when it find any one element which doesnot follow our criteria 
//some()-- this method is used to check if atleast 1 element  of our array follow a specific criteria --- stops iteration when it finds one element which follows our criteria

const ara = [1,2,3,4,5,-1] // check if all elements of array are +ve

const allPositive = ara.every(function(element){
    return element>=0;
})

console.log(allPositive);

const somePositive = ara.some(function(element){
    return element>=0;
})

console.log(somePositive);
/////////////////////////////////////////////////////////////////////////////////////////////////
//filter()
//with filter we can get all elements from an array which matches a specific criteria --- output will be in array format

const ara2 = [1,-1,2,-3,-4,5];

const positives = ara2.filter(function(element){
    return element>0;
})

console.log(positives);

//above function using arrow function

const positives2 = ara2.filter(element => element>=0);  //return new array with numbers >=0

console.log(positives2 + ' second time');


//mapping an array --- maps element of an array to something else
//take above positives2

const htmlArray = positives2.map(element => '<li>' + element + '</li>'); //mapping element to strings
console.log(htmlArray);

const joinhtmlArray ='<ul>' + htmlArray.join('') + '</ul>';
console.log(joinhtmlArray);

//mapping element of an array to a object
console.log('mapping objects');
const maphtmlArrayToObjects = positives2.map(element => ({value:element})); //remember we have to enclose object in () coz by default curlybraces in arrow function represents codeblock
console.log(maphtmlArrayToObjects);

//imp: filter and map method creates new array and return it ; they wont modify given array

//chaining filter and map
//filtering positive nums from array and mapping them to li string
const ara3 = [1,-1,2,-3,-4,5,9,10];

let filteredMapped = ara3
                        .filter(element => element>=0)
                        .map(element => ({value:element}));

console.log('chained filtermap');
console.log(filteredMapped);

//furthur chaining

let filteredMapped1 = ara3
                        .filter(element => element>=0)
                        .map(element => ({value:element}))
                        .filter(element => element.value>3)
                        .map (element => element.value);
                        

console.log(filteredMapped1);

//like this we can apply multiple filters and maps

////////////////////////////////////////////////////////////////////////////////////////////////////

//reduce method --- reduces all elements in an array to a single element as per coded function

//sum elements of an array using reduce
let arr3 = [1,2,6,8,-1];

let sum1 = arr3.reduce((summer,arrayelement) => summer+arrayelement );

console.log(sum1);

//background steps
//summer = 1 [1st element of array] ; arrayelement = initialised to 2 [2nd element of array]

//stp1: summer =1 , arrayelement = 2 ; summer = 3
//stp2: summer=3 , arrayelement = 6; summer =9;
//stp3 : summer =9, arrayelement = 8; summer =17
//stp4: summer =17, arrayelement = -1; summer =16


//or we can initialise summer=0, arrayelement =first element in array and start iterating

let sumoe = arr3.reduce((summer,arrayelement) => summer+arrayelement,0); // here 0 initialises summer to 0
//stp1: summer =0 , arrayelement = 1 ; summer =1
//stp2: summer=1 , arrayelement = 2; summer =3;
//stp3 : summer =3, arrayelement = 6; summer =9
//stp4: summer =9, arrayelement = 8; summer =17
//stp5: summer =17, arrayelement = -1; summer =16
console.log('sumoe');
console.log(sumoe);

//////////////////////////////////////////////////////////////////////////////////////////////
//exercise 1

function arrayRange(min,max){
    let arro = [];
    for(let i=min; i<=max;i++){
        arro.push(i);
    } 
    return arro;
}

const rangePrint = arrayRange(-5,3);
console.log(rangePrint);

////////////////////////////////////////////////////////////////////////////////////////////////
//implement includes function manually

function includes1(array, searchElement){
    for(let i of array)
        if(i === searchElement) return true;
    
    return false;
}

const arr4 =[1,2,9,11];
console.log(includes1(arr4,9));

/////////////////////////////////////////////////////////////////////////////////////////////////
//exclude second array from 1st and print remaining array

function excluder(target,excludeArray){
    const output = [];
    for(let element of target)
        if(!excludeArray.includes(element))
            output.push(element);
    return output;
}

const numse = [1,2,3,4,1,1,2,2];
console.log(excluder(numse,[1,2]));

 //above function using filter method and arrow fn
function excluder2(target,excludeArray){
    const output1 = target.filter (element => !excludeArray.includes(element) );
    return output1;
}

console.log(excluder([1,2,3,4,5,6,7],[1,2]));

/////////////////////////////////////////////////////////////////////////////////////////////////
const numso = [1,2,3,4];
const outputo = move(numso,0,3); //[2,3,4,1] --- element at index 0 has to move 3 places forward
const outputoo = move(numso,2,-2); //[3,1,2,4] --- element at index 2 has to move 3 places back

console.log(outputo);
console.log(outputoo);
function move(array,srcindex,relativeTargetPlace){
    let output = [...array];
    let targetIndex = srcindex+relativeTargetPlace;
    if((srcindex<output.length) && (targetIndex<output.length) && (targetIndex>=0)){
        let splicedElement = output.splice(srcindex,1)[0];
        output.splice(targetIndex,0,splicedElement);   
        return output;
    } 
    return console.error('invalid relativeTargetPlace');
}

//check this code in video
//////////////////////////////////////////////////////////////////////////////////////////////////
function countOccurances(array,searchElement){
    let counter = 0;
    for(let element of array){
        if(element === searchElement){
            counter++;
        }
    }
    return counter;
}

console.log(countOccurances([1,2,3,4,1,1,1,1],1));


//using reduce method
let arrayu = [1,2,3,4,5,1,2,1,1,1];

function countOccurances2(array,searchElement){
let counter2 = arrayu.reduce ((accumulator,current) => { 
    let occurance = (current === searchElement) ? 1 : 0; //if current = search return 1 and add that 1 to accumulator
    return accumulator += occurance;
    },0 ); // here 0 initialises accumulator to 0
return counter2;
}
console.log(countOccurances2(arrayu,1));
//////////////////////////////////////////////////////////////////////////////////////////////////////
const arre4 = [1,2,-5,10];
console.log(maxArr2(arre4));

function maxArr(array){
    if(array.length === 0)  return undefined;
    let max = array[0];
    for(let element of array)
         if(max<element)
            max = element;
return max;
}

//reduce method
function maxArr2(array){
    if(array.length === 0)  return undefined;
    return array.reduce((maxvalue,current) => (maxvalue < current)? current: maxvalue); //if we did not intialise maxvalue[1st parametre] to 1st element of array automatically by default it will be set to 1st element of array
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const movies = [
    {movie:'a', year:2018 , rating:4.5},
    {movie:'b', year:2018 , rating:4.7},
    {movie:'c', year:2018 , rating:3},
    {movie:'d', year:2017 , rating:4.5},
]

//get movies in 2018 with rating >4
//sort them in descending order of ratings
//pick their titles
//final ansr should be b,a

console.log(challenge(movies));

//for sort method:
    //a>b --- 1
    //a<b ---- -1
    //a===b --- 0

    // generally sort method gives output in ascending order
function challenge(array){
    let final= array
                .filter(element => (element.year === 2018)&&(element.rating>4))
                .sort((object1,object2) => object1.rating - object2.rating)
                .reverse()
                .map(element => element.movie);
return final;
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////
