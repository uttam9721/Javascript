// forEach loop use to reach each index value 
let arr =[1,2,3,4];
arr.forEach(function(el){
    console.log(el);//output is 1 2 3 4     
});



// forEach use to object 
let students = [{
    name: "uttam",
    marks:94.7,
},
{
    name:"Nitin",
    marks:"85",

},
];
students.forEach((number)=>{
    console.log(number.marks);// output is 94.7 , 85;
});


//map function 
let  nums= [10,20,30];
let double = nums.map((el)=>{
    return el*2;
});
console.log(double);//[ 20, 40, 60 ]



//filter 
let newArray= [1,2,3,4,5,6,7];
let evenNum =newArray.filter((num)=>{
    return num%2==0;
});
console.log(evenNum);//[ 2, 4, 6 ]



//reduce method
let arr1=[1,2,3,4,5];
let ans= arr1.reduce((res,el)=>(res+el));
console.log(ans);//15