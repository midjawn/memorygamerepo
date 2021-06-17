//const cards = document.querySelectorAll('div')
//cards.addEventListener('click',function(e){
//if( e.target.tagName === 'div'){
  //  e.target.classList.toggle('game')
//}
///else{
   // alert("you must click on a card to select")
//}
//})
const cards = document.querySelectorAll('div');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
const startGame = document.getElementById('start');
startGame.addEventListener('click',beginGame);

const restartGame = document.getElementById('restart');
restartGame.addEventListener('click',resetBoard);

function beginGame(event){
   event.preventDefault();
    alert("the click is working");
}




function flipCard(){

    if(lockBoard) return ;
    if(this === firstCard) return;    
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    
        return;
    }
        hasFlippedCard = false;
        secondCard = this;
        

       checkMatch();
    }

function checkMatch(){
    let isMatch = firstCard.dataset.img === secondCard.dataset.img;
        isMatch ? disableCards() : unflipCards()
}
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
        resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    lockBoard = false;
        resetBoard();
      }, 1500);
    }





    function resetBoard(event) {
        event.preventDefault();
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
        
       
      }
      (function shuffle() {
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 20);
          card.style.order = randomPos;
        });
      })();

cards.forEach(card => card.addEventListener('click',flipCard))
