/*
javaScript Object Notation (JSON)


JSON.stringify()
Purpose: Converts a JavaScript object or value to a JSON string.


JSON.parse()
Purpose: Converts a JSON string to a JavaScript object.

*/


const user = {id: 1, name: 'John', job: 'Programmer'};

const stringified =  JSON.stringify(user);

console.log(user)        //output: { id: 1, name: 'John', job: 'Programmer' } 
console.log(stringified) //output: {"id":1,"name":"John","job":"Programmer"}
//NOTE: property er value number and boolean na thakle " " double quote er moddhe rakhe. number and boolean na hole quote er moddhe rakhe na... value singel quote e thakleo seta double quote er moddhe rakhe....



//json string to againg js object e convert korar jonne Json.parse() use korte hobe
const userObj = JSON.parse(stringified);
console.log(userObj)// { id: 1, name: 'John', job: 'Programmer' }



console.log(typeof user)//output: object
console.log (typeof stringified)//output: string
console.log(typeof userObj)//output: object

console.log('----------------------------------------')

const shop = {
    owner: 'Jack',
    address:{
        street: 'Mirpur',
        city: 'Dhaka',
        country: 'BD'
    },
    product: ['laptop', 'mobile', 'watch'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop)

const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
/*

{"owner":"Jack","address":{"street":"Mirpur","city":"Dhaka","country":"BD"},"product":["laptop","mobile","watch"],"revenue":45000,"isOpen":true,"isNew":false}

*/

//json string to againg js object e convert korar jonne Json.parse() use korte hobe
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)



console.log(typeof shop)//object
console.log(typeof shopJSON)//string