
//additional assignment to create a decrement & reset button as well
let incrementEl = document.getElementById("increment-btn")
let myCounterVarEL = document.getElementById("counter")
let welcomeUserEl = document.getElementById("welcomeUser")
let decrementEl = document.getElementById("decrement-btn")
let resetEl = document.getElementById("reset-btn")
let saveEl = document.getElementById('save-btn')
let welcomeUserMsgEl = document.getElementById('welcomeUserMsg')
let prevEntriesEl = document.getElementById("prevEntries")

//let username = prompt("Please enter your name");
let username = 'MICH'
let myCounter = 0;
welcomeUserMsgEl.innerText = `Welcome back ${username} baby`



prevEntriesEl.innerHTML = `Previous entries: ${myCounter} - `



incrementEl.onclick = function(){
  myIncrementFunc();
}

decrementEl.onclick = function(){
  myDecrementFunc();
}

resetEl.onclick = function(){
  myResetFunc();
}



function myIncrementFunc(){
  myCounter++;
  myCounterVarEL.innerHTML = myCounter;
}

function myDecrementFunc(){
  myCounter--;
  myCounterVarEL.innerHTML = myCounter;
}

function myResetFunc(){
  myCounter = 0;
  myCounterVarEL.innerHTML = myCounter;
  prevEntriesEl.innerHTML = myCounter;
}

function welcomeUserFunc(){
  let username = prompt("Please enter your name");
  welcomeUserEl.innerHTML = "Welcome " + username;
}


saveEl.onclick = function(){
  save();
}


function save() {
  console.log(`${myCounter} has been saved`)
  let countStr = myCounter + ' - '
  prevEntriesEl.innerHTML += countStr
}




