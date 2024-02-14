//toUpperCase(); use to all string convert to upper case 
let str = "ILoveCoding";
let val =str.toUpperCase();
console.log(val);

//toLowerCase(); use to all string convert to lower case 
let val1 = str.toLowerCase();
console.log(val1);

//method chaining use to perform multiple task in the cose 
let val2 = str.toUpperCase().trim();//trim() use to reduce the white space left or right in the string except to the middle  
console.log(val2);


//use another method 
//slice to cut in the part of the string
let val4 = str.slice(1,5);
console.log(val4); //Love 


//  replace(); it replace the string in to another string 
let val6 =str.replace("Love","Do");
console.log(val6);



  //repeat() use to repeat again and again string 
  let str7 = str.repeat(3);
  console.log(str7);//ILoveCodingILoveCodingILoveCoding