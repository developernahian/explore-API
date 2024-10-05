//TODO: Fetch er poriborte Async Await use kora jai. B10 M33-9
//NOTE: Fetch pormise diye chole jai samne. wait kore na. ejonne await use kore. ar await must async function er moddhe likhte hoy

//---------------Fetch----------------
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))



    .catch(error => console.log('errorrrrr happenedddd', error))//Catch (custom error)
    //Catch
    // with custom error jodi api na pai ba error thake // ei line na likhel default error dekhai. chaile evabe custom error lekha jai....
}




//TODO:---------------Async Await----------------

// const loadComments2= async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/comments')
//     const data = await res.json();
//     console.log(data)
// }
//OR //OR //OR //with Catch (custom error showing when api not found for error)
const loadComments2= async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data)
    }
    catch(error){
        // console.log('errorrrrr happenedddd', error)
        //OR 
        console.error('errorrrrr happenedddd', error) 
    }

}




/*
fetch:
---------
Purpose: It is a method to perform HTTP requests.
Usage: Returns a Promise, which is then handled using .then() and .catch() for success and error scenarios.
Best for: Simple use cases where you want to make one or two requests and don't mind working with .then() chains.



async/await:
-----------
Purpose: It simplifies handling asynchronous code by allowing you to use Promises in a more readable, synchronous-like way.
Usage: You can use await to "wait" for a Promise (like a fetch request) to resolve, avoiding .then() chains.
Best for: When you're dealing with multiple asynchronous operations or want a cleaner and more readable code structure.




So, while fetch isn't "worse," async/await is generally preferred for better code structure and easier maintenance in more complex projects.
*/