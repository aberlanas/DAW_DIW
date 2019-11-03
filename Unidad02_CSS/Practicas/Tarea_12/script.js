function resize(e){
    e.target.classList.add("todo");
}

function evolve(e){
    console.log("evolve");
    e.target.classList.add("evoluciona");
    e.target.addEventListener("click",desevolve);
}

function desevolve(e){
    e.target.classList.remove("evoluciona");
    e.target.addEventListener("click",ultimate);
}

function ultimate(e){
    e.target.classList.add("ultimate");
}

function createBox(){
    const newBox = document.createElement("box");
    newBox.addEventListener("click",evolve);
    newBox.addEventListener("mouseOver",resize);
    document.querySelector("container").appendChild(newBox);
}


function init(){
    document.querySelector("button").addEventListener("click",createBox);
}


window.onload=init;
