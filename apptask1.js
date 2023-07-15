/************************************************************************************* Task 1  **************************************************************************/



// create object
const person = {
    fname: "Ahmed",
    lname: "hossam",
    age: "20",
    city: "Alex"
}

// change object to json 

const person1json = JSON.stringify(person)

// store in file
const fs = require("fs")
fs.writeFileSync("Task1.json", person1json)

// read file json
console.log(fs.readFileSync("Task1.json").toString())

// convert to object
const person1boj = JSON.parse(person1json)
console.log(person1boj)

// update data
person1boj.fname = "Adel "
person1boj.lname = "Ahmed"
person1boj.age = "40"
person1boj.city = "cairo"

console.log(person1boj)


//store update object in file
const updatdata = JSON.stringify(person1boj)
console.log(JSON.stringify(person1boj))
fs.writeFileSync("Task1.json", updatdata)




