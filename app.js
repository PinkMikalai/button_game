// ici nos constants
const startButton = document.getElementById("start-button");
const btns = document.querySelectorAll(".game-btn");

let win = true;
let score = 0;
//le etat d jeu
let gameRun = false;
let statusButton = 0;


//notre logique 
function startGame() {

    let gameRun = true;
    alert("Jeux commencee");

   
 
    return gameRun, alert;
}

function game(event){

    for (let i = 0; i < 11; i++) {
        
     
        if(btn===9){
            win;
            statusButton = 1;
            alert("tu as gagnee");

        }else{
            win= false;
            
        }
    }
   
    return btnGame, alert;
}


// function startGame() {
//     for(i= 0; i < 10; i++){
        
//         console.log("test", i);
//     }
// }

//les id 


startButton.addEventListener("click", startGame);
btnGame.addEventListener("click", game);
