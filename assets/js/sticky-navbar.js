const header = document.querySelector("header");
const hero = document.querySelector("#hero");
let heroOffSet = hero.offsetTop;
console.log(heroOffSet);

window.onscroll = function(){
    addBgHeader();
}

function addBgHeader(){
    if(window.pageYOffset > heroOffSet){
        console.log("haha");
        header.classList.add("bg-header");

    }else{
        header.classList.remove("bg-header");
    }
}