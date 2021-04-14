// var list = [];
// //1~45는 배열에 들어가면 0~44번째로 세짐
// for (var i = 1; i <= 45; i++) {
//   list.push(i);
// }

// var result = [];
// for (var i = 0; i < 6; i++) {
//   //list.lenght의 길이는 45, index는 0부터 세기 때문에 0~44
//   var index = Math.floor(Math.random() * list.length);

//   // 랜덤으로 선택한 인덱스의 값
//   var num = list[index]; // list[0~44]

//   //배열에서 인덱스의 값 제거
//   list.splice(index, 1);

//     result.push(num);
// }
// for (var i = 0; i < 6; i++){
//   document.write("<span class='ball'>" + result[i] + "</span>");
//   result.sort(function (a, b) {
//     return a - b;
//   });
  
// }



// let list = [];
// for (let i = 1; i <= 45; i++) {
//   list.push(i);
// }

// let res = [];

// for (let i = 1; i <= 6; i++) {
//   let index = Math.floor(Math.random() * list.length);
//   let num = list[index];

//   //중복값 제외
//   list.splice(index, 1); //리스트1~45에서 인덱스6개값이 나올때마다 빼라
//   res.push(num);
// }
// document.write(res.join());

var comScore = 0;

var userScore = 0;

var isComputerTurn = true;

var shotsLeft = 15;

function onComputerShoot() {

  if (!isComputerTurn) 
    return;

  
  var comScoreElem = document.getElementById('computer-score');
  var shootType = Math.random() < 0.5 ? 2 : 3;
  var textElem = document.getElementById('text');


  if(shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다!';
      comScore += 2;
      comScoreElem.innerHTML = comScore;
    }else{
      textElem.innerHTML = '컴퓨터가 2점슛을 실패했습니다';
    } 
  }

  if(shootType === 3) {
    if(Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다!';
      comScore += 3;
      comScoreElem.innerHTML = comScore;
    }else {
      textElem.innerHTML = '컴퓨터가 3점슛을 실패했습니다.';
    }
  }

  isComputerTurn = false; // 슛을 쏜 후 false로 돌리겠다

  var computerButtons = document.getElementsByClassName('btn-computer');
  var userButtons = document.getElementsByClassName('btn-user');

  for (var i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = true;
  }
  for (var i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType) {

  if (isComputerTurn)
    return;

 

  var textElem = document.getElementById('text');
  var userScoreElem = document.getElementById('user-score');

 
  if(shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '사용자가 2점슛을 성공시켰습니다!';
      userScore += 2;
      userScoreElem.innerHTML = userScore;
    }else{
      textElem.innerHTML = '사용자가 2점슛을 실패했습니다';
    } 
  }

  if(shootType === 3) {
    if(Math.random() < 0.33) {
      textElem.innerHTML = '사용자가 3점슛을 성공시켰습니다!';
      userScore += 3;
      userScoreElem.innerHTML = userScore;
    }else{
      textElem.innerHTML = '사용자가 3점슛을 실패했습니다';
    } 
  }

  isComputerTurn = true;

  var computerButtons = document.getElementsByClassName('btn-computer');
  var userButtons = document.getElementsByClassName('btn-user');

  for (var i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = false;
  }
  for (var i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = true;
  }


   
  shotsLeft--;

  var shotsLeftElem = document.getElementById('shots-left');
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) {
      textElem.innerHTML = "사용자 승";
    } else if (userScore < comScore) {
      textElem.innerHTML = "사용자 패";
    } else {
      textElem.innerHTML = "무승부";
    }
    for (var i = 0; i < computerButtons.length; i++) {
      computerButtons[i].disabled = true;
    }
    for (var i = 0; i < userButtons.length; i++) {
      userButtons[i].disabled = true;
    }
  }
}