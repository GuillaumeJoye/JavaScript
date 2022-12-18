const scoreFR = 2;
const scoreEN = 1;

// condition 

if (scoreFR > scoreEN) {
    console.log ("La France a gagné")
}else if (scoreFR < scoreEN) {
    console.log ("L'Angleterre a gagné")
}else{
    console.log ("Egalité")
}



// Exercice 1

const button = document.querySelector("#btn")
const titre = document.querySelector("#titre")

function colorSwap(){
    if( titre.style.color == "red"){
        titre.style.color = "blue";
    }
    else {
        titre.style.color = "red";
    }

}
button.addEventListener("click",function(){
    colorSwap();
})



// Exercice 3

const image =document.querySelector("#denjiSwap")

image.addEventListener("click", function(){
    if(image.className == "js"){
        image.src ="image/download.jpg";
        image.classList.toggle("js");
    }
    else{
        image.src = "image/téléchargement.jpg";
        image.classList.toggle("js");
    }
})



// Liste

const btn = document.querySelector("#bt");
const list = document.querySelector("#list");
const bn = document.querySelector("#bn");


btn.addEventListener("click", function(){
    const li = document.createElement("li");
    const text = document.createTextNode("pain au chocolat");

    li.append(text);
    list.append(li);

})

bn.addEventListener("click", function(){
    const li = list.children;
    
    list.removeChild(list.lastChild);
})



// Exercice 4

document.addEventListener('keydown', (spacebar) => {
    if(spacebar.keyCode == 32){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }
})



// Exercice 5

window.onscroll = function() {
    const windowHeight = document.documentElement.scrollTop;
    const progressHeight = (windowHeight / (document.body.offsetHeight - window.innerHeight)) * 100;
    document.getElementById("progress").style.width = progressHeight + "%";
};


// Boucle 

const body = document.querySelector("body");

document.addEventListener('keydown', (touche) => {
    if(touche.keyCode ==13){
//      body.style.backgroundColor = "red";
            body.classList.add("color");
    }
})

document.addEventListener('keyup', (touche) => {
    if(touche.keyCode ==13){
//      body.style.backgroundColor = "white";
        body.classList.remove("color");
    }
})