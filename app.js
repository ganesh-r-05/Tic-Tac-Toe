let msgbox = document.querySelector("#msgbox")

let msg = document.querySelector("#msg")

let blocks = document.querySelectorAll(".block")

let reset = document.querySelector("#reset-btn")

let turnO = true

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const disableBlocks = ( ) =>{
    for(let block of blocks){
        block.disabled = true
    }
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1 = blocks[pattern[0]].innerText
        let pos2 = blocks[pattern[1]].innerText
        let pos3 = blocks[pattern[2]].innerText

        if(pos1 != ""  && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                msg.innerText = `Congratulations, Winner is ${pos1}`
                msgbox.classList.remove("hide")
                disableBlocks()
            }
        }
    }
}

blocks.forEach((block)=>{
    block.addEventListener("click", ()=>{
        if(turnO){
            block.innerText = "O"
            turnO = false
        }
        else{
            block.innerText = "X"
            turnO = true
        }

        block.disabled = true

        checkWinner()
    })
})

const resetGame = () =>{
    for(let block of blocks){
        turnO = true
        block.innerText = ""
        block.disabled = false
        msgbox.classList.add("hide")
    }
}

reset.addEventListener("click", resetGame)