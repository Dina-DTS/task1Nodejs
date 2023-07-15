
/********************************************************************************    Task2    ****************************************************************** */



const fs = require("fs")

const yargs = require("yargs")

const data10 = require("./data10")

//Command for add New Person
yargs.command({
    command: "add",
    describe: "Add Person",
    builder: {
        fname: {
            describe: "This is first name",
            demandOption: true,
            type: "string"
        },

        lname: {
            describe: "This is first name",
            demandOption: true,
            type: "string"
        },

        age: {
            describe: "This is An Age ",
            demandOption: true,
            type: "string"
        },

        city: {
            describe: "This is city name",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) => {
        data10.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})


//Command For Delete persons Whose id=4 and 6

yargs.command({
    command: "delete",
    describe: "Delete Persons whose id=4 or 6",
    handler: () => {
        data10.deleteDate()
    }
})


//Command for list Data about persons
yargs.command({
    command: "list",
    describe: "list data",
    handler: () => {
        data10.listData()
    }
})



//Command for read person whose id =5
yargs.command({
    command: "read",
    describe: "to read data",
    handler: () => {
        data10.readData()
    }
})
console.log(yargs.argv)
