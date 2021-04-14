//컴퓨터,사용자 슛버튼
const comTutn = document.querySelector('.comShot');
const userTurn = document.querySelector('.userShot');
let comScore = 0;
let userScore = 0;
//트루값
let isComputerTurn = true;


comTutn.addEventListener('click', function () {

    if (!isComputerTurn)
        return;
    
   
    //컴퓨터 점수
    const comScr = document.querySelector('.comScore');
    // 차례 부분
    let text = document.querySelector('.turn');
    // 랜덤 함수
    let value = Math.random();
    if (value < 0.33) {
    value = 2;
    } else if (value < 0.66){
    value = 3;
    } else {
    value = 0;
    }


    if (value === 2) {
        text.innerHTML = "컴퓨터가 2점슛을 성공했습니다!";
        comScore += 2;
        comScr.innerHTML = comScore;
    } else if(value === 3){
        text.innerHTML = "컴퓨터가 3점슛을 성공했습니다!";
        comScore += 3;
        comScr.innerHTML = comScore;
    } else {
        text.innerHTML = "컴퓨터가 득점에 실패했습니다";
    }
    
    isComputerTurn = false;

    let discom = document.getElementsByClassName('comShot');
    let disuser = document.getElementsByClassName('userShot');

    for (let i = 0; i < discom.length; i++) {
        discom[i].disabled = true;
    }
    for (let j = 0; j < disuser.length; j++) {
        disuser[j].disabled = false;
    }

   
})


//남은 슛 횟수
let shotCnt = document.querySelector('#shots-cnt');
let shotCntCnt = 10;

userTurn.addEventListener('click', function () {

    


    if (isComputerTurn)//트루면 못누름
        return;

const userScr = document.querySelector('.userScore');
    let text = document.querySelector('.turn');
let value = Math.random();
if (value < 0.33) {
    value = 2;
} else if (value < 0.66){
    value = 3;
} else {
    value = 0;
}


    if (value === 2) {
        text.innerHTML = "사용자가 2점슛을 성공했습니다!";
        userScore += 2;
        userScr.innerHTML = userScore;
    } else if(value === 3){
        text.innerHTML = "사용자가 3점슛을 성공했습니다!";
        userScore += 3;
        userScr.innerHTML = userScore;
    } else {
        text.innerHTML = "사용자가 득점에 실패했습니다";
    }

    isComputerTurn = true;
    
    let discom = document.getElementsByClassName('comShot');
    let disuser = document.getElementsByClassName('userShot');

    for (let i = 0; i < discom.length; i++) {
        discom[i].disabled = false;
    }
    for (let j = 0; j < disuser.length; j++) {
        disuser[j].disabled = true;
    }

    shotCntCnt--;
    shotCnt.innerHTML = shotCntCnt;

    if (shotCntCnt === 0) {
        userTurn.disabled = true
        comTutn.disabled = true
        if (userScore === comScore) {
            text.innerHTML = "결과 : 무승부";
            text.style.color = "#fff";
        } else if (userScore > comScore) {
            text.innerHTML = "결과 : 사용자 승";
            text.style.color = "#fff";
        } else {
            text.innerHTML = "결과 : 컴퓨터 승";
            text.style.color = "#fff";
        }
    }
    
   
})





