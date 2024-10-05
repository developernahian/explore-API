//Load Data 2 button start+++++++++++++++++++++++++++++++++++++++++++++++
function loadData2(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))
}
//Load Data 2 button end+++++++++++++++++++++++++++++++++++++++++++++++





//Load Users button start-------------------------------------------------------------
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}
//Load Users button end-------------------------------------------------------------






//Load User 2 Button start*********************************************
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))//ekhane displayUsers namer function call korechi. value pass korechi. and function call korar por displayUsers e data console.log korechi.. NOTE: parameter hisebe data nam er jaigai abc ba onno kono nam dewa jabe....
}
//ekhane data holo argument.. so data na likeh abc ba je kono nam dewa jabe
function displayUsers(data){
    console.log(data)
}
//Load User 2 Button end************************************************
