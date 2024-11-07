let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    let h1=document.querySelector("h1");
    let randomColor = getRanCol();
    h1.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor; 
    console.log("color updated");
});

function getRanCol() {
    let red = Math.floor(Math.random()*255)+1; 
    let green = Math.floor(Math.random()*255)+1; 
    let blue = Math.floor(Math.random()*255)+1; 

    let RanCol =`rgb(${red} , ${green} , ${blue})`;
    return RanCol;
}
