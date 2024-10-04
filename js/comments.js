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

