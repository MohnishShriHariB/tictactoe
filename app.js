let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winbox = document.querySelector(".winner");

let turn = true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText=="" && !winner()){
            if(turn){
                box.innerText="X";
            }
            else{
                box.innerText="O";
            }
            turn=!turn;
            if (winner()) {
                winbox.innerText="Player " + (turn ? "O" : "X") + " wins!";
            }
        }
    })
});

resetbtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.classList.remove("winning-box");
    });
    winbox.innerText="";
    turn = true;
});

function winner() {
    for (let p of patterns) {
        const [a, b, c] = p;
        if (boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            boxes[a].classList.add("winning-box");
            boxes[b].classList.add("winning-box");
            boxes[c].classList.add("winning-box");
            return true;
        }
    }
    return false;
}
