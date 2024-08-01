// const express = require('express')
// const app  = express();

// const { json } = require("express");

// app.listen(3002, () => {
//     console.log("Server started at port no. 3002");
// })

// app.get('/', (request, response) => {
//     response.send("hello jee , kese ho saare...")
// })

// let fs = require('fs')
// let os = require('os')

// create os
// let user = os.userInfo();
// console.log(user);
// user.username = "Harsh Khandelwal"
// console.log("user name :", user.username);

// create file
// fs.appendFile("greeting.txt","hello " + user.username + '\n', ()=>{
//     console.log("file created");
// })

// console.log("Functionality of os : " , os);
// console.log("Functionality of fs : ", fs);

// const notes = require("./notes")
// console.log("server file is available");

// age varible notes.js file me declare h
// var age = notes.age
// console.log("age: "+ age);  // 22 ( Here, value of age is coming from notes.js file )

// let result = notes.addNumber(age+10, 18)
// console.log(`Result of addNNumber function : ${result}`);

// var _ = require('lodash')

// let data = ["person", "person", 1, 2, 1, 2, 'name',false,  'age', '2']
// let filter = _.uniq(data);
// console.log(filter);                // [ 'person', 1, 2, 'name', false, 'age', '2' ]

// console.log(_.isString("Harsh"));   // true
// console.log(_.isString(123));       // false
// console.log(_.isString(false));     // false
// console.log(_.isString(true));      // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//  ** convert json to object: 
// const jsonString = '{"name": "abc", "age": 35, "city": "New York"}'
// const jsonObject = JSON.parse(jsonString)
// console.log("json to object: ");
// console.log(jsonObject);

//  ** convert object to json: 
// const object_hai = {name: "jhon", age: 25}
// const object_to_json = JSON.stringify(object_hai);
// console.log("object to json: ");
// console.log(object_to_json);

// console.log(typeof jsonString);         // string
// console.log(typeof JSON);               // object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

let express = require('express')
const { flatMap } = require('lodash')
let app = express()

app.get('/', function(request,response) {
    response.send("Welcome to home page")
})

app.get('/food', (request, response) => {
    let customer = {
        name: "idli",
        size: 10,
        is_Sambhar: true,
        is_Chutney: false
    }
    response.send(customer)         // print data in json formate ( once do check on server)
})
app.post("/person", (request, response) => {
    response.send("person data")
})

app.listen(3000,() => {
    console.log("server is created on port no.: 3000");
})

