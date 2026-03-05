// ici nos constants



let win = true;
let score = 0;
//le etat d jeu
let gameRun = false;
let statusButton = 0;


//notre logique 
function startGame() {

    let gameRun = true;
    alert("Jeux commencee");

    for (i = 0; i < 11; i++) {

        if(i===9){
            win;
            statusButton = 1;
            alert("tu as gagnee");

        }else{
            win= false;
            alert("tu as perdue");
        }
    }
 
    return gameRun, alert;
}


// function startGame() {
//     for(i= 0; i < 10; i++){
        
//         console.log("test", i);
//     }
// }

//les id 


start.addEventListener("click", startGame);