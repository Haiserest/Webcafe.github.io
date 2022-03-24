let btn = document.querySelector("#btn_menu");
let sidebar = document.querySelector(".sidebar");
let search_btn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

search_btn.onclick = function(){
    sidebar.classList.toggle("active");
}

let greentea = document.querySelector("#Greentea");
let katsudon = document.querySelector("#Katsudon");
let purpletea = document.querySelector("#Purpletea");
let spaghetti = document.querySelector("#Spaghetti");
let mucha = document.querySelector("#Mucha");

greentea.onclick = function(){
    alert("Green tea : 0.011 eth");
}
katsudon.onclick = function(){
    alert("Katsudon : 0.025 eth");
}
purpletea.onclick = function(){
    alert("Purple tea : 0.014 eth");
}
spaghetti.onclick = function(){
    alert("Spaghetti : 0.03 eth");
}
mucha.onclick = function(){
    alert("Mucha : 0.015 eth");
}