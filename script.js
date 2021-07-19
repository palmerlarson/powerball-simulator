let playerBalls = [];
let playerMoney = 100;

//get a random number
const getBallNumber = () => {
    let n = Math.floor(Math.random() * 69 + 1);
    return n;
}

const getPowerBallNumber = () => {
    let n = Math.floor(Math.random() * 26 + 1);
    return n;
}

//get six balls
const getTheBalls = () => {
    const drawings = [];
    for (i=0; i < 5; i++) {
        drawings.push(getBallNumber());
    }
    drawings.push(getPowerBallNumber());
    return drawings;
}

//displaying the balls
const displayBalls = () => {
    checkNumber()
    const ballArray = getTheBalls();
    let prize = prizeChecker(ballArray, playerBalls);
    //rolled balls
    const ball1 = document.getElementById("num1");
    const ball2 = document.getElementById("num2");
    const ball3 = document.getElementById("num3");
    const ball4 = document.getElementById("num4");
    const ball5 = document.getElementById("num5");
    const ball6 = document.getElementById("num6");

    //player balls
    const pBall1 = document.getElementById("pnum1");
    const pBall2 = document.getElementById("pnum2");
    const pBall3 = document.getElementById("pnum3");
    const pBall4 = document.getElementById("pnum4");
    const pBall5 = document.getElementById("pnum5");
    const pBall6 = document.getElementById("pnum6");

    //assigning rolled balls to variables
    let pwrBall1 = ballArray[0];
    let pwrBall2 = ballArray[1];
    let pwrBall3 = ballArray[2];
    let pwrBall4 = ballArray[3];
    let pwrBall5 = ballArray[4];
    let pwrBall6 = ballArray[5];

    //assigning player balls to variables
    let playerBall1 = playerBalls[0];
    let playerBall2 = playerBalls[1];
    let playerBall3 = playerBalls[2];
    let playerBall4 = playerBalls[3];
    let playerBall5 = playerBalls[4];
    let playerBall6 = playerBalls[5];


    //displaying rolled balls
    ball1.innerHTML = `<p>${pwrBall1}</p>`;
    ball2.innerHTML = `<p>${pwrBall2}</p>`;
    ball3.innerHTML = `<p>${pwrBall3}</p>`;
    ball4.innerHTML = `<p>${pwrBall4}</p>`;
    ball5.innerHTML = `<p>${pwrBall5}</p>`;
    ball6.innerHTML = `<p>${pwrBall6}</p>`;

    //displaying player balls
    pBall1.innerHTML = `<p>${playerBall1}</p>`;
    pBall2.innerHTML = `<p>${playerBall2}</p>`;
    pBall3.innerHTML = `<p>${playerBall3}</p>`;
    pBall4.innerHTML = `<p>${playerBall4}</p>`;
    pBall5.innerHTML = `<p>${playerBall5}</p>`;
    pBall6.innerHTML = `<p>${playerBall6}</p>`;

    //player money
    const playerMoneyEl = document.getElementById("playMoney");
    playerMoney-=2;
    playerMoney+=prize;
    playerMoneyEl.innerHTML = `Player Money: ${playerMoney}`;
    
}

const playerInput = () => {
    const pball1 = document.getElementById("ball1Input");
    const pball2 = document.getElementById("ball2Input");
    const pball3 = document.getElementById("ball3Input");
    const pball4 = document.getElementById("ball4Input");
    const pball5 = document.getElementById("ball5Input");
    const pball6 = document.getElementById("ball6Input");

    playerBalls[0] = pball1.value;
    playerBalls[1] = pball2.value;
    playerBalls[2] = pball3.value;
    playerBalls[3] = pball4.value;
    playerBalls[4] = pball5.value;
    playerBalls[5] = pball6.value;

    pball1.disabled = true;
    pball2.disabled = true;
    pball3.disabled = true;
    pball4.disabled = true;
    pball5.disabled = true;
    pball6.disabled = true;
}

const reset = () => {
    const pball1 = document.getElementById("ball1Input");
    const pball2 = document.getElementById("ball2Input");
    const pball3 = document.getElementById("ball3Input");
    const pball4 = document.getElementById("ball4Input");
    const pball5 = document.getElementById("ball5Input");
    const pball6 = document.getElementById("ball6Input");

    pball1.disabled = false;
    pball2.disabled = false;
    pball3.disabled = false;
    pball4.disabled = false;
    pball5.disabled = false;
    pball6.disabled = false;

    pball1.value = '';
    pball2.value = '';
    pball3.value = '';
    pball4.value = '';
    pball5.value = '';
    pball6.value = '';

    playerBalls = [];
}

const checkNumber = () => {
    for(i=0; i < 5; i++) {
        if (playerBalls[i] < 1 || playerBalls[i] > 69) {
            alert("You can't have a number less than 1 or greater than 69 in your first 5 balls. READ THE RULES!");
            reset();
        }
    }

    if (playerBalls[i] < 1 || playerBalls[i] > 26) {
        alert("You can't have a number less than 1 or more than 26 for you powerball. READ THE RULES!");
        reset();
    }
  

}

const prizeChecker = (powerballArr, playerArr) => {
    let matches = 0;
    let powerball = false;
    let prize = 0;
    powerballArr = powerballArr.map(Number);
    playerArr = playerArr.map(Number);

    //checks normal balls
    for(i=0; i < 5; i++) {
        if (powerballArr[i] === playerArr[i]) {
            matches+=1;
        }
    }

    //checks power ball
    if (powerballArr[5] === playerArr[5]) {
        powerball = true;
    }

    //determining prize money
    if (matches === 0 && powerball === true) {
        prize = 4;
    } else if (matches === 1 && powerball === true) {
        prize = 4;
    } else if (matches === 2 && powerball === true) {
        prize = 7;
    } else if (matches === 3 && powerball === false) {
        prize = 7;
    } else if (matches === 3 && powerball === true) {
        prize = 100;
    } else if (matches === 4 && powerball === false) {
        prize = 100;
    } else if (matches === 4 && powerball === true) {
        prize = 50000;
    } else if (matches === 5 && powerball === false) {
        prize = 1000000;
    } else if (matches === 5 && powerball === true) {
        prize = 150000000;
    } else {
        prize = 0;
    }

    return prize;
}

const run = () => {
    displayBalls();
}

