const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('.yourScore');
const compScore = document.querySelector('.compScore');
const winner = document.querySelector('.winner');
const reset = document.querySelector('input')
let cScore = 0;
let yScore = 0;

function computerRandomSelection(){
    let output = Math.floor(Math.random() * 3);
    return output;
}

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let userInput = button.getAttribute('id');
        let computerInput = computerRandomSelection();

        console.log('Y:'+ userInput);
        console.log('C:'+ computerInput);

        if(userInput == computerInput){
            winner.textContent = "Tie.";
        }
        else if(userInput == 0 && computerInput == 1 ||
            userInput == 1 && computerInput == 2 ||
            userInput == 2 && computerInput == 0
            ){
            cScore++;
            sessionStorage.setItem('Computer Score:',cScore);
            winner.textContent = "Computer Won.";
            compScore.textContent = cScore;
        } else {
            yScore++;
            sessionStorage.setItem('Your Score:',yScore);
            winner.textContent = "You Won.";
            yourScore.textContent = yScore;
        }
    })
    
})

reset.addEventListener('click', ()=>{
    location.reload();
    sessionStorage.clear();
})