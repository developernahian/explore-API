console.log('--------------Normal Fucnction-----------------')
/*
console.log(1)
console.log(2)

doSomething()

console.log(4)
console.log(5)

function doSomething() {
    console.log(33333)
}


OUTPUT:
1
2
33333
4
5


*/

console.log('--------------Fetch-----------------')
/*
console.log(1)
console.log(2)
// console.log(3)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

console.log(4)
console.log(5)

Output:
1
2
4
5
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/


console.log('--------------setTimeout-----------------')
/*
console.log(1)
console.log(2)

setTimeout(doSomething)

console.log(4)
console.log(5)

function doSomething() {
    console.log(33333)
}


OUTPUT:
1
2
4
5
33333
*/





/*
console.log(1)
console.log(2)

setTimeout(doSomething, 4000)

console.log(4)
console.log(5)

function doSomething() {
    console.log(33333)
}


1
2
4
5
33333  // after 4 seconds eta print hobe
*/



console.log(1)
console.log(2)

setTimeout(() => {
    console.log(33333)
},4000)

console.log(4)
console.log(5)

/*
1
2
4
5
33333  // after 4 seconds eta print hobe
*/