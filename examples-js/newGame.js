"use strict";
var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
ctx.fillstyle = '#00BFFF';
ctx.font = '20px Verdana';

//var fire = new Image();
var tic = new Image();//  X
var toe = new Image();//  O
var bg = new Image();
var emp = new Image();
var bgWhite = new Image();

//fire.src = 'img/Salyut.gif';
tic.src = 'img/tic.png';
toe.src = 'img/toe.png';
bg.src = 'img/BKG.png';
emp.src  = 'img/emptyWin.png';
bgWhite.src = 'img/bgWhite.png'


function drawStatic() {
  ctx.drawImage(bgWhite, bg.width + 10, 0);
  ctx.drawImage(bg, 0, 0);
}

bgWhite.onload = drawStatic;
//fire.onload = drawStatic;

var counter = 1;
var isShowing = [];
var resultTable = [];
var result;
var scoreTic = 0,
  scoreToe = 0;

function init () { //обнуление массивов, счетчиков и графики
  for (var j = 0; j<9; j++) {
    isShowing[j] = 0;
    resultTable[j] = 'Z';
  }
  ctx.drawImage(bgWhite, bg.width + 10, 0);
  ctx.drawImage(bg, 0, 0);
  drawEmptyWInField();
  window.requestAnimationFrame(drawScore);
  //ctx.fillText('Счет: Х ' +  scoreTic + ':' + scoreToe + ' O', 200, 20);
  counter = 1;
}

init();

function drawElemet() {//возвращает наименование символа для отрисовки
  var turn;
  counter ++;
  if (counter % 2 === 0) {
    turn = tic;
    result = 'X';
    return turn;
  }
  else {
    turn = toe;
    result = 'O';
    return turn;
  }
}

function drawWin(whoWon) {
  ctx.fillText('Победили ' + "'" + whoWon + "'", 10, 220);
  //ctx.drawImage(fire, 0, 0);
}

function drawEmptyWInField() {
  ctx.drawImage(emp, 10, 180);
}

function scoreCalc(whoWon) {
  if (whoWon === 'X') {
    scoreTic++;
    drawScore();
  }
  else if (whoWon === 'O') {
    scoreToe++;
    drawScore();
  }
}

function drawScore() {
  ctx.drawImage(bgWhite, bg.width + 10, 0);
  ctx.fillText('Счет: Х ' +  scoreTic + ':' + scoreToe + ' O', 200, 70);
  window.requestAnimationFrame(drawScore);
}

var breakFlag = 0;
function check() {
  var i,
    j,
    k,
    z,
    w = 3;
  for (z = 1; z < 4;) {
    i = 0;
    j = 1 * z;
    k = 2 * z;
    for (k; k < 9;) {
      //console.log('i: ' + i);
      //console.log('j: ' + j);
      //console.log('k: ' + k+ '\n\n');
      if ((resultTable[i] === resultTable[j]) && (resultTable[j] === resultTable[k]) && (resultTable[j] !== 'Z')) {
        breakFlag = 1;
        drawWin(result);
        scoreCalc(result);
        //requestAnimationFrame(check);
        //alert('Победили: ' + result);
      } else if ((resultTable[2] === resultTable[4]) && (resultTable[4] === resultTable[6]) && (resultTable[4] !== 'Z')) {
        breakFlag = 1;
        drawWin(result);
        scoreCalc(result);
        //requestAnimationFrame(check);
      } else if ((resultTable[0] === resultTable[4]) && (resultTable[4] === resultTable[8]) && (resultTable[4] !== 'Z')) {
        breakFlag = 1;
        drawWin(result);
        scoreCalc(result);
        //requestAnimationFrame(check);
      } else {}
      if (breakFlag !== 0) break;
      i = i + w;
      j = j + w;
      k = k + w;
    }
    if (breakFlag !== 0) break;
    z = z + 2;
    w = w - 2;
  }
}


var keyName;

document.addEventListener('keypress', (event) => {
   keyName = event.key;

  if      ((keyName == 'q') && (breakFlag !== 1)) {
    if (isShowing[0] === 0) {
      ctx.drawImage(drawElemet(),10,11);
      resultTable[0] = result;
      isShowing[0] = 1;
      check();
    }
  }
  else if ((keyName == 'w')  && (breakFlag !== 1)){
    if (isShowing[1] === 0) {
      ctx.drawImage(drawElemet(),70,11);
      resultTable[1] = result;
      isShowing[1] = 1;
      check();
    }

  }
  else if ((keyName == 'e') && (breakFlag !== 1)) {
    if (isShowing[2] === 0) {
      ctx.drawImage(drawElemet(),127,11);
      resultTable[2] = result;
      isShowing[2] = 1;
      check();
    }
  }

  else if ((keyName == 'a') && (breakFlag !== 1)) {
    if (isShowing[3] === 0) {
      ctx.drawImage(drawElemet(),10,69);
      resultTable[3] = result;
      isShowing[3] = 1;
      check();
    }
  }
  else if ((keyName == 's') && (breakFlag !== 1)) {
    if (isShowing[4] === 0) {
      ctx.drawImage(drawElemet(),70,69);
      resultTable[4] = result;
      isShowing[4] = 1;
      check();
    }
  }
  else if ((keyName == 'd')  && (breakFlag !== 1)) {
    if (isShowing[5] === 0) {
      ctx.drawImage(drawElemet(),127,69);
      resultTable[5] = result;
      isShowing[5] = 1;
      check();
    }
  }

  else if ((keyName == 'z') && (breakFlag !==1)) {
    if (isShowing[6] === 0) {
      ctx.drawImage(drawElemet(),10,125);
      resultTable[6] = result;
      isShowing[6] = 1;
      check();
    }
  }
  else if ((keyName == 'x') && (breakFlag !==1)) {
    if (isShowing[7] === 0) {
      ctx.drawImage(drawElemet(),70,125);
      resultTable[7] = result;
      isShowing[7] = 1;
      check();
    }

  }
  else if ((keyName == 'c') && (breakFlag !==1)) {
    if (isShowing[8] === 0) {
      ctx.drawImage(drawElemet(),127,125);
      resultTable[8] = result;
      isShowing[8] = 1;
      check();
    }
  }

  else if (keyName == '5') {
    init();
  }
});
