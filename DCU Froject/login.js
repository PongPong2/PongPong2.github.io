const FORM = document.querySelector('.form');
const INPUT = document.querySelector('.input');

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

FORM.addEventListener("submit", login);