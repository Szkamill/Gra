'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `currect number`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);
let secretNumebr = Math.trunc(Math.random()*20)+1;
let highscore = 0;
let scoreNumber = 20;
document.querySelector('.score').textContent = scoreNumber;
const displaymessage = function (message){ 
    document.querySelector('.message').textContent =message;

};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    

    if(!guess){
        // document.querySelector('.message').textContent = " no number";
        displaymessage('no number')
    }
else if(guess === secretNumebr){
    // document.querySelector('.message').textContent = " great! You choose is corect";
    displaymessage('great! You choose is corect')
    document.querySelector('.number').textContent = secretNumebr;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '34rem';
    if(scoreNumber> highscore){
        highscore = scoreNumber;
        document.querySelector('.highscore').textContent = highscore;
    } 
   
    
}else if ( guess !==secretNumebr){
    if(scoreNumber >1){
        // document.querySelector('.message').textContent = guess > secretNumebr? 'too hight': ' too low';
        displaymessage(guess > secretNumebr? 'too hight': ' too low');
        scoreNumber--
    document.querySelector('.score').textContent = scoreNumber;
    } else{ 
        // document.querySelector('.message').textContent=" you lose game";
    displaymessage(" you lose game")
    document.querySelector('.score').textContent= 0;}
    

}
});
    


// else if ( guess > secretNumebr){
//     if( scoreNumber > 1){
//         document.querySelector('.message').textContent = " your choose is to hight";
//         scoreNumber--
//     document.querySelector('.score').textContent = scoreNumber;
//     } else{ document.querySelector('.message').textContent=" you lose game";
// document.querySelector('.score').textContent=0;};
    
// }
// else if ( guess < secretNumebr){
//     if(scoreNumber > 1){
//         document.querySelector('.message').textContent = " your choose is to low";
//         scoreNumber--;
//         document.querySelector('.score').textContent = scoreNumber;
//     } else{ document.querySelector('.message').textContent=" you lose game";
//     document.querySelector('.score').textContent=0;}
    




// resetujemy przez wciśniecie again 

document.querySelector('.again').addEventListener('click',function(){
    secretNumebr = Math.trunc(Math.random()*20)+1;

 scoreNumber = 20;
 document.querySelector('.number').textContent= secretNumebr
document.querySelector('.score').textContent = scoreNumber;
// document.querySelector('.message').textContent=" start guessing";
displaymessage("start guessing")
document.querySelector('.number').textContent="?";
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


})