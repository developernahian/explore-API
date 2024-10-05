//  JavaScript by default single-threaded. 


//Single-threaded: JavaScript runs one task at a time on a single thread.

//Synchronous: Code executes in sequence, one line after another, blocking the next task until the current one finishes.

//Asynchronous: Code can run in the background, allowing the program to continue without waiting for long tasks to complete, using techniques like callbacks, promises, or async/await.

console.log('----------Synchronous-----------------')
console.log('I')
console.log('Eat')
console.log('Ice Cream')

/*
Output:

I
Eat
Ice Cream

*/

console.log('-----------Asynchronous-----------------')

console.log('I')

setTimeout(() => {
    console.log('Eat')
}, 3000)

console.log('Ice Cream')

/*
Output:

I 
Ice Cream
Eat //3 seconds por eta print hobe

*/




/*
Single-threaded:
----------------
Single-threaded means that the program can execute only one operation at a time. JavaScript, for instance, is single-threaded by nature.

This means all tasks are run on a single thread (one piece of code being executed at any given time).

The call stack (which stores functions to be executed) and the event loop (which manages asynchronous tasks) help JavaScript manage this.


Synchronous:
------------
In synchronous programming, code is executed sequentially, one line at a time. A line of code will not execute until the previous line is finished.

This can lead to blocking behavior. If one operation takes a long time (e.g., reading a file, making a network request), everything else waits.

Asynchronous:
-------------

Asynchronous programming allows certain operations to occur in the background, without blocking the main thread.

In JavaScript, this is often handled with callbacks, promises, or the modern async/await syntax.

When an asynchronous task is called, it is offloaded to the browser's Web APIs (in the case of JavaScript in the browser) or to Node.js APIs (in the server), and the rest of the code continues executing.

Once the asynchronous task is done, a callback or promise is executed, ensuring that the program can continue without waiting for time-consuming operations.

*/