// // setInterval() - Have a function run every set amount of time
// // Call the provided function every 1000 milliseconds

// // let count = 0;

// // // Call the provided function every 1000 millisecods
// // // Increase the count and then log it out every 1 second
// // let interval = setInterval(function() {
// //   count++; // increase the count by 1

// //   console.log(count);
// // }, 1000);

// // // clearInterval will stop the interval that we pass to it
// // clearInterval(interval);

// ////////////////////////////////////////////////////
// const startEl = document.getElementById('playbtn');
// const pauseEl = document.getElementById('lightsbtn');
// const resetEl = document.getElementById('playbtn');
// const countEl = document.getElementById('count');

// let count = 0;
// let interval = null;

// function handleStartClick() {
// interval = setInterval(function() {
//     // increase the count by one
//     count++;

//     // display the new count on the page
//     countEl.textContent = 'Count: ' + count;
// }, 1000);
// }

// function handlePauseClick() {
//   // Stop the provided interval from running
// clearInterval(interval);
// }

// function handleResetClick() {
//   // Set count back to 0
// count = 0;

// countEl.textContent = 'Count: ' + count;

//   // Stop the interval from running
// clearInterval(interval);
// }

// // When the start button is clicked, call the provided
// // function
// startEl.addEventListener('click', handleStartClick);
// pauseEl.addEventListener('click', handlePauseClick);
// resetEl.addEventListener('click', handleResetClick); 

//set up class

class Pet {
    //below is the instance of the class you are creating
    constructor(name) {
console.log ('new pet class ready');
this.name = name;
this.hunger = 0;
this.sleep = 0;
this.boredom = 0;
    }
}

const feedEl = document.getElementById('feedbtn');
const playEl = document.getElementById('playbtn');
const sleepEl = document.getElementById('sleepbtn');
const startEl= document.getElementById('startbtn');


//this will be start game function which will take user input and will put that input into the new instance. Specifically into name variable. Then you can call call the function using the button which will be an event.

function startGame() {
    //the user input is being put into const name variable.
    const name = prompt('What is your pets name')
    const myPet = new Pet(name);
    //this is creating a new class? or renameing the class with user given input 'name'
}

startEl.addEventListener('click', startGame);
// pauseEl.addEventListener('click', handlePauseClick);
// resetEl.addEventListener('click', handleResetClick); 
