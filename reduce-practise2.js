/* Challenging Follow below array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'shucorita', age: 22}
]

// by for loop 
let total = 0;
for(let i = 0; i< people.length; i++){
    const element = people[i];
    total = total + element.age;
}
console.log(total);

// by map method 
const totalMap = people.reduce((previous, current) => previous + current.age, 0); //[previous value 0 tai oirar .age hobe na]
console.log(totalMap);