//object literals => it is use to store keyed collection and complex entities ;
//syntax =>property=(key,value)pair object are a collection of properties ;
let student = {
    name:"uttam maurya",
    age :20,
    marks:85,
    city:"Lakhimpur kheri",
};
console.log(student.name);// out put is uttam maurya

const item = {
    price: 100,
    discount: 10,
    color:["black","yellow"],
};
console.log(item.price);//output is 100
console.log(item.color[0]);// output is black



//get value 
let stu ={
    name:"Anuj maurya",
    marks:85,

};
console.log(stu.name);//out put is Anuj maurya
let ans = stu['name'];//out put is Anuj maurya
console.log(ans);

//Javascript automatically converts objects key to string 
//even if we made the number as a key the number will be converted to string 

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e",
};
let val = obj[1];
console.log(val);//output is a


//object of object=> storing information of multiple student 
let students={
    aman:{
        grade:"A+",
        city:"lakhimpur",
},
    anuj:{
        grade:"A",
        city:"Dhanbad",
},
};
let answer = students.aman.grade;
console.log(answer);// output is A+


//Array of objects => storing information of multiple students 

const classInfo = [{
    name : "Anuj Maurya",
    grade:"A+",
    city:"delhi",
},
{ 
    name:"uttam maurya",
    grade:"A",
    city:"bangalore",
},{
    name:"Nitin maurya",
    grade:"B+",
    city:"Noida",
}];
let a=classInfo[0].name;
let b=classInfo[1].name;
let c=classInfo[2].name;
console.log(a);//Anuj Maurya
console.log(b);//Uttam maurya
console.log(c);//Nitin maurya



//update
const update ={
    name:"rahul",
    city:"lucknow",
};
let ans1=update.city="gurgoan";
console.log(ans1);// output => gurgoan;