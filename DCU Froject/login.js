const FORM = document.querySelector('.form');
const INPUT = document.querySelector('.input');

function login(event){
    event.preventDefault();
    if(INPUT.value === ""){
        alert("입력하세요.");
    }
    else if(INPUT.value === "서울"){
        window.location.href = 'http://127.0.0.1:5501/DCU%20Froject/index.html';
    }
    else{
        alert("틀렸습니다.");
    }
}

FORM.addEventListener("submit", login);