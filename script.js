let container=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
playerx=true;
let msgContainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#new-game-btn");
let msg=document.querySelector("#msg");
let count=0;

let winPatterns=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const enableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    });
}

const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! \n Player ${winner} wins.`; 
    disableboxes();
    // resetBtn.classList.add("hide");
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
}

const drawGame=()=>{
    msg.innerText="oops! Its a Draw.";
    disableboxes();
    // resetBtn.classList.add("hide");
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
    
}

const newGame=()=>{
    playerx=true;
    count=0;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
    })};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                showWinner(pos1);
                return true;
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(playerx==true){
            box.innerText="X";
            playerx=false;
        }
        else{
            box.innerText="O";
            playerx=true;
        }
        box.disabled=true;
        count++;
        
        let isWinner=checkWinner();
        console.log(isWinner);
        if(count===9 && !isWinner){
            drawGame();
        };
    });
})

resetBtn.addEventListener("click",newGame);
newGameBtn.addEventListener("click",newGame);