//IMPORTANT: B10 M35-5

//Structure of steTimeout and setInterval
//setTimeout(function,milliseconds) - executes a function once after a specified time
//setInterval(function,milliseconds) - executes a function repeatedly with a specified interval

/*
setTimeout
-----------
Purpose: Executes a function once after a specified delay. for clearing the timeout function, clearTimeout() is used

 setInterval
 -----------
Purpose: Executes a function repeatedly at a specified time interval. for clearing the timeout function, clearTimeout() is used


*/
console.log(1)
console.log(2)

// setTimeout(() => {
//     console.log(33333)
// })

// setTimeout(() => {
//     console.log(33333)
// }, 4000)

console.log(4)
console.log(5)


// setInterval( () =>{
//     console.log('I am Your')
// } , 2000)



// let num = 0
// setInterval( () =>{
//     num++
//     console.log('I am You', num)
// } , 2000)

// let num = 0
// const intervalId = setInterval( () =>{
//     num++
//     clearInterval(intervalId)
//     console.log(intervalId, 'I am You',  num)
// } , 2000)



//interval choltei thakbe jodi clearValue() diye break na kora hoy to....
//intervalID ba interval ba id ba abc je kono nam er variable lekha jabe. intervalId ei nam most of the developer use kore
let num = 0
const intervalId = setInterval( () =>{
    num++
    if(num>5){
        clearInterval(intervalId)//condition diye break kora hoyeche.
    }
    
    console.log(intervalId, 'I am You',  num)
} , 2000)