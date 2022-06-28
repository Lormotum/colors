const squares = document.querySelectorAll(".square");
const answerDisplay = document.querySelector(".correct");
const colorDisplay = document.querySelector("h1");
const button = document.querySelector("button");

let colors = []
GenerateRandomColor();
assign_colors();
CheckColor();
function GenerateRandomColor(){
    for(let i=0; i<squares.length; i++){
        colors.push(
           `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})` 
        )
    }
}

function assign_colors(){
    colors.forEach((color,index) =>{
        squares[index].style.background = color
        squares[index].setAttribute('data-color',color);
    })
}

function getRandomPickedColor(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = randomColor;
    return randomColor;
}


function CheckColor(){
    squares.forEach(square =>{
        square.addEventListener('click',(e) =>{
            if(e.target.dataset.color === pickedColor){
                answerDisplay.textContent = "correct";
            }
            else{
                answerDisplay.textContent = "wrong";
                e.target.classList.add("fade");
            }
        });
    });
}
let pickedColor = getRandomPickedColor();

function reset(){
    colors = [];

    GenerateRandomColor();
    squares.forEach((square) => square.classList.remove("fade"));
assign_colors();
CheckColor();
pickedColor = getRandomPickedColor();
}

button.addEventListener("click", reset);