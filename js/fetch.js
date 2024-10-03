//API: Application Programming Interface


/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())// .json is not similar but close to JSON.parse
  //.then(abc => console.log(abc));
  //OR
  .then((json) => console.log(json));
  
*/






/*

  const url = 'https://jsonplaceholder.typicode.com/todos/1' //1) Define a URL to fetch data from.
  fetch(url)                                                 //2) Use the fetch function to send a request to the URL.
  .then(response => response.json())                         //3) Converts the data to JavaScript object.
  // .then(abc => console.log(abc))
  //OR
  .then(json => console.log(json))                           //4) Log the JSON data to the console.


  1) The URL is the endpoint where a request is sent to fetch data. In this case, it's an API that returns a sample "to-do" item in JSON format from jsonplaceholder.typicode.com, a free fake API often used for testing.

  2) The fetch() function is used to send a request to the given url. It returns a Promise, which represents the eventual completion (or failure) of the request. In this case, it's a GET request by default, meaning it retrieves data from the specified endpoint.

  3) The first .then() handles the response from the server. The response object contains various properties, including the body of the HTTP response. Here, response.json() is called, which is also a Promise that parses the response body (which is JSON) into a JavaScript object.

  4) The second .then() is used to handle the parsed JSON object. It takes the json object and logs it to the console using console.log(json).

*/



/*
fatch call
json convert
*/







function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(response => response.json())
        // .then(abc => console.log(abc))
        //OR
        // .then(data => console.log(data))
        //OR
        .then(json => console.log(json))
}