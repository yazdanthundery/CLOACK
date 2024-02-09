const cloak = document.getElementById("colors");
const cost = document.getElementById("cost")
const whiteCloak = document.getElementById("white");
const blackCloak = document.getElementById("black");


whiteCloak.addEventListener("click", function(){
    cloak.setAttribute("src","./../assets/img/white.jpg")
    cost.innerText = "49.99$";
});
blackCloak.addEventListener("click", function(){
    cloak.setAttribute("src","./../assets/img/black.jpg")
    cost.innerText = "59.99$"
});

const purchase = () =>{
    window.open('./../pages/login.html')
}