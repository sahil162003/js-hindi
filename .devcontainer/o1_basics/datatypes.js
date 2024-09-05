
//brower event(*) is main to master javascript and objects ,javascript is dyanamic type of language
//datatypes are classified by how data is store in memory and access it ,call by  value or reference

//Primitive(calls by values when we call it it gaves copy of it and changes is made in their copies)

// 7 types :String ,numberl,null(empty),undefined,symbol(it is used for making unique),Bigint

const score =100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3173941743900984899n


//Reference(non primitive)
//array,object(*),functions
const heros = ["shaktiman","naaraj","dogs"];
let myobj = {
    name :"hitesh",
    age :22,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof heros)
//**** stack(primitive(copies)),heap(non-primitive(reference))
let myname = "sahil"
let me = myname
me = "chalke"
console.log(myname)
let userone ={
    email:"sahi;@gmail.com",
    id:501,
}

let usertwo = {
    email:"aniket@gmail.com",
    id:501,
}
usertwo.email = "sudhir@gmail.com"
usertwo.email = userone.email
userone.email = "xyz@gmail.com"
usertwo.email = userone.email

console.log(usertwo.email)

