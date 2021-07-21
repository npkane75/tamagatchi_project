// setInterval() - Have a function run every set amount of time
// Call the provided function every 1000 milliseconds

// let count = 0;

// // Call the provided function every 1000 millisecods
// // Increase the count and then log it out every 1 second
// let interval = setInterval(function() {
//   count++; // increase the count by 1

//   console.log(count);
// }, 1000);

// // clearInterval will stop the interval that we pass to it
// clearInterval(interval);

////////////////////////////////////////////////////
const startEl = document.getElementById('btn-start');
const pauseEl = document.getElementById('btn-pause');
const resetEl = document.getElementById('btn-reset');
const countEl = document.getElementById('count');

let count = 0;
let interval = null;

function handleStartClick() {
interval = setInterval(function() {
    // increase the count by one
    count++;

    // display the new count on the page
    countEl.textContent = 'Count: ' + count;
}, 1000);
}

function handlePauseClick() {
  // Stop the provided interval from running
clearInterval(interval);
}

function handleResetClick() {
  // Set count back to 0
count = 0;

countEl.textContent = 'Count: ' + count;

  // Stop the interval from running
clearInterval(interval);
}

// When the start button is clicked, call the provided
// function
startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
resetEl.addEventListener('click', handleResetClick); 