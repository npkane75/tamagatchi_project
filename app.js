




////MY CODE!
// When the start button is clicked, call the provided
// function
// startEl.addEventListener('click', handleStartClick);
// pauseEl.addEventListener('click', handlePauseClick);
// resetEl.addEventListener('click', handleResetClick); 

//set up class
let myPet = null

class Pet {
    //below is the instance of the class you are creating
    constructor(name) {
console.log ('new pet class ready');
this.name = name;
this.hunger = 0;
this.sleep = 0;
this.boredom = 0;
this.age = 0;
    }
}

const hungerEl = document.getElementById('hunger');
const playEl = document.getElementById('boredom');
const sleepEl = document.getElementById('sleep');
const startEl= document.getElementById('startbtn');
const hungerbtn = document.getElementById('hungerbtn')
const sleepbtn = document.getElementById('sleepbtn')
const countEl = document.getElementById('count');
const playbtn =  document.getElementById ('playbtn')

//this will be start game function which will take user input and will put that input into the new instance. Specifically into name variable. Then you can call call the function using the button which will be an event.



function startGame() {
    //the user input is being put into const name variable.
    const name = prompt('What is your pets name')
     myPet = new Pet(name);
    healthCounter()
    //this is creating an instance or 
}


//These are the individual button specfic timer functions
let count = 0;
let interval = null;  // the function healthCounter is stored here so we can call it later to stop function.


//if the hunger, sleep or play button are pressed before the counters for either reaches 10 the pet lives. if not then dies. so each event will subtract else if any of the conditions reach 10.  

function healthCounter() {
interval = setInterval(function() {
    // increase the count by one
    count++;
    myPet.hunger++;
    myPet.sleep++;
    myPet.boredom++;
    // display the new count on the page
    countEl.textContent = "we are going to start you off real healthy   " + count;
    hungerEl.textContent = "I need some food   " + myPet.hunger;
    sleepEl.textContent = "I'm so sleepy   " + myPet.sleep;
    playEl.textContent = "play with me   " + myPet.boredom;
// if (myPet.hunger === 0 || myPet.sleep === 0 || myPet.boredom === 0)
    // add element in HTML to display numerals interval.
}, 3000);
}//if also conditional if = 10

function hungerFunc() {
    myPet.hunger -= 2;
    hungerEl.textContent = "I need some food " + myPet.hunger;
    //update hunger in HTML need function action to connect to html.
}


function sleepFunc() {
myPet.sleep--;
sleepEl.textContent = "I'm so sleepy " + myPet.sleep;
}



function playFunc(){
    myPet.boredom--;
    playEl.textContent = "play with me " + myPet.hunger;
}

//   // feed button need to subtract timer (--_)
//function
// }




//   // Stop the interval from running
// clearInterval(interval);
//}
//The add event listners are
startEl.addEventListener('click', startGame);
hungerbtn.addEventListener('click', hungerFunc);
sleepbtn.addEventListener('click', sleepFunc); 
playbtn.addEventListener('click', playFunc);

