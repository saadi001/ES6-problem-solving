/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

// with for loop 
const numbers1 = [ 1, 9, 17, 22 ];
let totalFor = 0;
for(let i= 0; i< numbers1.length; i++){
    const element = numbers1[i];
    totalFor = element +totalFor;
}
console.log(totalFor);


// with map  method
const numbers = [ 1, 9, 17, 22 ];
const total = numbers.reduce((p,c) => p+c ,0);
console.log(total);