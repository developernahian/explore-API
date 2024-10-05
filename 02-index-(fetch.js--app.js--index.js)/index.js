function loadUsers3(){
    fetch('https://jsonplaceholder.typicode.com/users')// ei api ta array er moddhe 10 ta object niye banano
    .then(res => res.json())
    .then(datA => displayUsers3(datA))
}



function displayUsers3(datAA){

    const ul = document.getElementById('users-list')
    for(const useR of datAA){
        // console.log(useR.name)
        const li = document.createElement('li')
        li.innerText = useR.email
        ul.appendChild(li)
    }

}