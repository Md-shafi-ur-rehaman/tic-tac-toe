let boxes = document.querySelectorAll(".box");
let reset_game = document.querySelector('#resetGame');
let new_Game = document.querySelector('#newGame');

let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=> {
    box.addEventListener('click',()=>{
        if(turnO)
        {
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X'
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for(pattern of winPatterns){       
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if( pos1val === pos2val && pos2val === pos3val){
                msg_container.classList.remove("hide");
                msg.innerText = 'winer is ' + pos1val;
                disableBoxes();
            }
        }
    }

}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabaleBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const resetGame = () => {
    turnO = true;
    enabaleBoxes();
    msg_container.classList.add("hide");
}

new_Game.addEventListener('click', resetGame);
reset_game.addEventListener('click', resetGame);