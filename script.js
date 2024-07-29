let boxes = document.querySelectorAll('.box')
let resetBtn = document.getElementById('resetBtn')
let winnerMsg = document.getElementById('winner-msg')
let newGameBtn = document.getElementById('newGameBtn')

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
]

const resetGame = () =>{
    turnO = true
    enabledBoxex()
    winnerMsg.classList.add('hide')
}

boxes.forEach((box)=>{
    box.addEventListener('click',() =>{
        console.log('box was cliked')
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X'
            turnO = true
            
        }
        box.disabled = true;

        checkWinner();
    })
})

const gameWinner = (winner) => {
    winnerMsg.innerText = `Congratulation The winner is ${winner}`
    winnerMsg.classList.remove('hide');
    disabledBoxex()
} 

const disabledBoxex = () =>{
    for (let box of boxes){
        box.disabled = true
    }
}

const enabledBoxex = () =>{
    for (let box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}

const checkWinner = () =>{
    for(let patterns of winPatterns){
        let pos1 = boxes[patterns[0]].innerText
        let pos2 = boxes[patterns[1]].innerText
        let pos3 = boxes[patterns[2]].innerText

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                gameWinner(pos1)
            }
        }
    }
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)