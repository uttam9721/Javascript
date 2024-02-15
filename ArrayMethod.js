//creating an array 
let marks = [99,85,75,68,98];
let val = marks[0];
console.log(val);

//Array are mutable linear collection of things 
// update array 
let fruit = ["apple","banana","orange"];
fruit[0] = "papaya";
console.log(fruit); // the out put is ['papaya' , 'banana','orange ']


// Now using array methods 
//using push method => add to end of the array
let fruit1 = ["apple","banana","orange"];
fruit1.push("papaya");
console.log(fruit1); // out put is [ 'apple', 'banana', 'orange', 'papaya' ]





//pop method => remove from end of array
let car = ["fortuner","ford","bmw" ];
car.pop();
console.log(car); // out put is [ 'fortuner', 'ford']





//unshift => add to start of the array
let fruit3 = ["apple","banana","orange"];
fruit3.unshift("mango"); //add at beginning of array
console.log(fruit3); //[ 'mango', 'apple', 'banana', 'orange' ]




// shift => delete from  starting of array and return it .
let fruits = ["apple","banana","orange"];
fruits.shift();
console.log(fruits); //out put is [ 'banana','orange']





// splice()=> used for adding or removing element in array
/* syntax : arr.splice(start,deleteCount,item1,.....,itemX*/
let color = ["red", "blue", "green", "yellow"];
color.splice(2);
console.log(color); //[ 'red', 'blue' ]




//slice => copies and portion of an array 
let color1 = ["red", "blue", "green", "yellow"];
let newColor= color1.slice(1,3) ;
console.log(newColor); // ['blue', 'green']







// reverse => use to reverse the given array 
let nums = [5,6,78];
nums.reverse();
console.log(nums); // [78, 6, 5]  it change the original array 



// concat => merge to arrays 
let nums1=[4,5,6];
let nums2=[7,8,9];
let ans =nums1.concat(nums2);
console.log(ans);




// indexOf use to return index of something
let  frts = ["apple","banana","cherry","orange"];
let ans1 =frts.indexOf("cherry");
console.log(ans1); // returns 2 it is index value of cherry 





// includes => search of a value 
frts.includes("mango") ? console.log("yes"): console.log("no");//no it match the value of the array if value is present output will be yes other wise no will be print 

