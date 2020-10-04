let textbox = document.querySelector('#textbox');
let roll = document.querySelector('#roll');
let rolltotal = document.querySelector('#roll-total');
let allRolls = document.querySelector('#allRolls');
let indyRolls = document.querySelector('#indyRolls');
let reset = document.querySelector('#reset');
let dieSides = document.querySelector('#dieSides');
let dieRoll = [];

function myFunc(a, b) {
    return a + b;
  }
  
roll.addEventListener('click', function() {
    let i = 0;
    let rollNums = (Number(textbox.value));
    let sided = (Number(dieSides.value))
    while (i < rollNums) {
        //let x = Math.random();
       dieRoll.push(Math.trunc(Math.random()*sided+1));
       i ++
    }
    let total = dieRoll.reduce(myFunc);
    console.log(dieRoll);
    rolltotal.innerHTML = total;
})

indyRolls.addEventListener('click', function(){
    i = 0;
    while (i < dieRoll.length) {
        let numberRolled = dieRoll[i];
        const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        allRolls.innerHTML += newDiceString;
        i ++
    }
})

reset.addEventListener('click', function() {
    dieRoll = [];
    textbox.value = "";
    dieSides.value = "";
    rolltotal.innerHTML = "";
    allRolls.innerHTML = "";
})