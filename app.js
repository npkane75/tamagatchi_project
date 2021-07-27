




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
const ageEl = document.getElementById ('age')
const restartEl=document.getElementById ('restartbtn')
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
        if(count % 2 === 0){     // remainder operator modulus.
            myPet.age ++;
        }
        count++;
        myPet.hunger++;
        myPet.sleep++;
        myPet.boredom++;
        // display the new count on the page
        countEl.textContent = "Health:   " + count;
        hungerEl.textContent =  "I'm getting hungry   " + myPet.hunger;
        sleepEl.textContent = "I'm a bit tired  " + myPet.sleep;
        playEl.textContent = "I'm starting to get bored  " + myPet.boredom;
        ageEl.textContent = "Age:  " + myPet.age;
        if (myPet.hunger === 10 || myPet.sleep === 10 || myPet.boredom === 10) {
            clearInterval(interval);
            interval = null;
            alert ("You just killed the Skull Tree");
            //reset counters to 0 including "count"  
        }
        // else if(myPet.hunger >= 5 || myPet.sleep >= 5 || myPet.boredom >= 5 ){
        //     hungerEl.textContent = "IM STARVING OVER HERE   " + myPet.hunger;
        // sleepEl.textContent = " IM GONNA PASS OUT " + myPet.sleep;
        // playEl.textContent ="IM GETTIN BORED  " + myPet.boredom
        // }
        // add element in HTML to display numerals interval.
    }, 3000);
}//if also conditional if = 10

function hungerFunc() {
    if(myPet.hunger === 0){
        hungerEl.textContent = "stop i'm to full!" + myPet.hunger;
    }
    
    
    else{
        myPet.hunger --;
        hungerEl.textContent = "I need some food " + myPet.hunger;
    }
    
    //update hunger in HTML need function action to connect to html.
}


function sleepFunc() {
    if(myPet.sleep === 0) {
        sleepEl.textContent = "I'm so sleepy " + myPet.sleep;
    }


    else {
        myPet.sleep --;
        sleepEl.textcontent = "please put me to bed! " + myPet.sleep;
        }
    }



function playFunc() {
    if(myPet.boredom === 0) {
        playEl.textCotent = "play with me   " +myPet.boredom;
    }
    else {
        myPet.boredom-- ;
        playEl.textContent = "play with me " + myPet.hunger;
    } 
    
}

function restartGame (){
location.reload();
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
restartEl.addEventListener('click', restartGame)

