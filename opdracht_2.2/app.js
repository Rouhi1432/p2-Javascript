let block = document.getElementById("div");
let position = 0;

function move() {
    if (position >= window.innerWidth) {
        position = 0;
        block.style.left = position + "px";
    } else {
        position += 50;
        block.style.left = position + "px";
    } 
}

let colors = ["red", "green", "blue", "purple", "pink", "black", "white", "yellow"];

block.addEventListener("click", function(){
    let random_number = Math.floor(Math.random() * 8);
    block.style.backgroundColor = colors[random_number];
})

setInterval(move, 100);

