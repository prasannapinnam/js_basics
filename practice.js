//swap programme

let a=2 , b=3;

let c=b;
b=a;
a=c;

console.log('a = '+a+' b = '+b);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//max of 2 nums

function max(a,b){
    let maxValue = a>b? a : b;
    return maxValue;
}

console.log(max(13,4));
////////////////////////////////////////////////////////////////////////////////////////////
//check if paper is landscape or not [width>height]

function isLandscape(width,height){
    return width>height;
}

console.log(isLandscape(500,10));
///////////////////////////////////////////////////////////////////////////////////////////
//retrun Fizz if num is div by 3
// Buzz if divisible by 5; 
//fizzbuzz if div by both 
//NaN if it is not a number
//return input if not divisible 3 or 5

function fizzBuzzy(value){
    if(typeof value !== 'number')
        return NaN;
    else if(value%5===0 && value%3 ===0)
        return 'fizzBuzz';
    else if(value%3 === 0)
        return 'fizz';
    else if(value%5 === 0)
        return 'Buzz';
    else 
        return value;

}

console.log(fizzBuzzy(4));

////////////////////////////////////////////////////////////////////////////////////////////////////
//speedlimit < = 70
// above 70 for every 5kms --- 1 point addition --- so 70+5 =75-- gets 1 point--- till 74 no charge
// on reaching 12 points ------ license cancelled
//use Math.floor()

let speedLimit = 70;
let pointAdditionRange = 5;

function  licenseStatus(speed){
    if(speed <speedLimit+pointAdditionRange)
        return 'OK';
    let points = Math.floor((speed-speedLimit)/pointAdditionRange);
    if(points>12)
        return 'license cancelled'
    else
        return points;
}

console.log(licenseStatus(75));

////////////////////////////////////////////////////////////////////////////////////////////
//print numbers from 0 to count and tell if it is even or odd

let count=9;
for(let i=0;i<=count;i++){
    let typo = i%2===0? 'even':'odd';
    console.log(i , typo);
}

//////////////////////////////////////////////////////////////////////////////////////////
//counting truthy in an array

const arr = [1,2,NaN,undefined,null,10,'peshie',0];

function trythyCount(arr){
    let count =0;
    for(let element of arr)
        if(element)
            count++;

    return count;

}

console.log(trythyCount(arr));

////////////////////////////////////////////////////////////////////////////////////////////////
