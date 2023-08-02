let result = 0;

function  refresh(){
  location.reload();  
}

let sqrtRoot = document.getElementById('rooticon');

let score = 9;
let defeat = 0;
let chance = 4;

// All mathematical functions

function addition(){

  let randomNum1 = Math.round(Math.random() * 20);
  let randomNum2 = Math.round(Math.random() * 20);

  result = randomNum1 + randomNum2;
  console.log(result)

  const result1 = `${randomNum1} + ${randomNum2} = `;

  document.getElementById('display').innerHTML = result1;

  sqrtRoot.style.display = "none"
  
  return result;
}


function subtract(){
  let randomNum1 = Math.round(Math.random() * 20);
  let randomNum2 = Math.round(Math.random() * 20);

  result = randomNum1 - randomNum2;
  console.log(result)

  const result1 = `${randomNum1} - ${randomNum2} = `

  document.getElementById('display').innerHTML = result1;

  sqrtRoot.style.display = "none"

  return result;
}

function multiply(){
  let randomNum1 = Math.round(Math.random() * 20);
  let randomNum2 = Math.round(Math.random() * 20);

  result = randomNum1 * randomNum2;
  console.log(result)

  const result1 = `${randomNum1} x ${randomNum2} = `

  sqrtRoot.style.display = "none"

  document.getElementById('display').innerHTML = result1;

  return result;
}

function divide(){
  let randomNum1 = Math.round(Math.random() * 50);
  let randomNum2 = Math.round(Math.random() * 10);

  let result2 = randomNum1 / randomNum2;
  result = Math.floor(result2); 
  console.log(result)

  const result1 = `${randomNum1} / ${randomNum2} = `

  document.getElementById('display').innerHTML = result1;

  sqrtRoot.style.display = "none"

  return result;
}

function root(){
  let randomNum1 = Math.round(Math.random() * 100);
  result = Math.round(Math.sqrt(randomNum1))
  console.log(result)

  
  sqrtRoot.style.display = "block"

  const result1 = `${randomNum1} = `;
  document.getElementById('display').innerHTML = result1;

  
}

//creating a new array to loop functions

let easyFunctionLoop = [addition,subtract,multiply];

let intermidiateFunctionLoop = [root,divide];

let indexValue = 0;


let dropdown = document.querySelector('.dropdown');
let inputBox = document.querySelector('input')


function easysubmit(){
  let randomFuction = easyFunctionLoop.slice();
  randomFuction.sort(() => Math.random() - 0.5);

  randomFuction[indexValue]();
  indexValue = (indexValue + 1) % randomFuction.length;

  
}
// On clicking start looping the functions
function start(){

  if (outsideOption === 1){

    let value = parseFloat(document.getElementById('input-box').value );
    console.log(value)


    if (result === value){
      score++
    }else{
      defeat++;
      chance--;
      if(defeat === 4){
        endgamelose()
      }
    }

    endGamewin()

    document.getElementById('score').innerHTML = `Score = ${score}`
    document.getElementById('chance').innerHTML = `Chance remaining = ${chance}`
    document.getElementById('input-box').value = '';

    let randomFuction = easyFunctionLoop.slice();
    randomFuction.sort(() => Math.random() - 0.5);

    randomFuction[indexValue]();
    indexValue = (indexValue + 1) % randomFuction.length;
    displayAll()
    

  }else if(outsideOption === 2){

    let value = parseFloat(document.getElementById('input-box').value );
  
    if (result === value){
      score++
    }else{
      defeat++;
      chance--;
      if(defeat === 4){
        endgamelose()
      }
    }

    endGamewin()

    document.getElementById('score').innerHTML = `Score = ${score}`
    document.getElementById('chance').innerHTML = `Chance remaining = ${chance}`
    document.getElementById('input-box').value = '';

    let randomFuction = intermidiateFunctionLoop.slice();
    randomFuction.sort(() => Math.random() - 0.5);

    randomFuction[indexValue]();
    indexValue = (indexValue + 1) % randomFuction.length;
    displayAll()

    

  }else{
    console.log('yes')
  }
  
}
  // this below is responsible for displaying and and nonedisplaying elements
function displayAll(){
  let inputContainer = document.getElementById('input-box');
  inputContainer.style.display = 'block';

  let containerElement = document.getElementById('container');
  containerElement.style.display = 'block'

  document.getElementById('score').innerHTML = `Score = ${score}`

  
  dropdown.style.display = 'none'

  let nextbutton = document.getElementById('nextbutton');
  nextbutton.style.display = 'none'

  let submitbutton = document.getElementById('submitbutton');
  submitbutton.style.marginLeft = '3px'

  let info = document.getElementById('info');
  info.style.display = 'none'

  let container = document.getElementById('container');
  container.style.marginTop = '180px'

  let chanceElement = document.getElementById('chance');
  chanceElement.style.display = 'block'
  document.getElementById('chance').innerHTML = `Chance reamining = ${chance}`
}


//create variables for storage




// on winning this will show

function endGamewin(){

  if (score === 10){
    let containerall = document.getElementById('containerall');
    containerall.style.display = 'none'
    
    let endgame = document.getElementById('endgamewin');
    endgame.style.display = 'block'
  }
}

// on losing this will show

function endgamelose(){
  let containerall = document.getElementById('containerall');
  containerall.style.display = 'none'

  let endgame = document.getElementById('endgamelose');
    endgame.style.display = 'block'  
}

//restart function

function restartGAme(){
  refresh()
}

//audio controls

let audio = document.getElementById('myaudio')
let pausebtn = document.getElementById('pausebtn')
let playbtn = document.getElementById('playbtn')


function playaudio(){
  playbtn.style.display = 'none'
  audio.play();
  pausebtn.style.justifyContent = 'right'
  pausebtn.style.display = 'flex'
}

function pauseaudio(){
  pausebtn.style.display = 'none'
  audio.pause();
  playbtn.style.justifyContent = 'right'
  playbtn.style.display = 'flex'
}



let outsideOption = 0



function show(option){
  inputBox.value = option;
  if(option === 'Easy'){
    
    outsideOption = 1;
    console.log(outsideOption);

  }else if(option === 'intermidiate'){
    
    outsideOption = 2;
    console.log(outsideOption);

  }else if(option === 'Expert'){
    
    outsideOption = 3;
    console.log(outsideOption);

  }
}

dropdown.onclick = function(){
  dropdown.classList.toggle('active');
}