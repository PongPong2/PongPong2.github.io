const FORM = document.querySelector('.form');
const INPUT = document.querySelector('.input');
const CLOCK = document.querySelector('.clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    CLOCK.innerText = `${hours}:${minutes}`;
}

function login(event){
    event.preventDefault();
    if(INPUT.value === ""){
        alert("입력하세요.");
    }
    else if(INPUT.value === "서울"){
        window.location.href = 'https://pongpong2.github.io/DCU%20Froject/home.html';
    }
    else{
        alert("틀렸습니다.");
    }
}

getClock();
setInterval(getClock, 1000);
FORM.addEventListener("submit", login);