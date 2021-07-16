const playerBalls = [];
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
    let playerBall1 = playerBallArr[0];
    let playerBall2 = playerBallArr[1];
    let playerBall3 = playerBallArr[2];
    let playerBall4 = playerBallArr[3];
    let playerBall5 = playerBallArr[4];
    let playerBall6 = playerBallArr[5];


    //displaying rolled balls
    ball1.innerHTML = `<p>${pwrBall1}</p>`;
    ball2.innerHTML = `<p>${pwrBall2}</p>`;
    ball3.innerHTML = `<p>${pwrBall3}</p>`;
    ball4.innerHTML = `<p>${pwrBall4}</p>`;
    ball5.innerHTML = `<p>${pwrBall5}</p>`;
    ball6.innerHTML = `<p>${pwrBall6}</p>`;

    //displaying player balls
    pball1.innerHTML = `<p>${playerBall1}</p>`;
    pball2.innerHTML = `<p>${playerBall2}</p>`;
    pball3.innerHTML = `<p>${playerBall3}</p>`;
    pball4.innerHTML = `<p>${playerBall4}</p>`;
    pball5.innerHTML = `<p>${playerBall5}</p>`;
    pball6.innerHTML = `<p>${playerBall6}</p>`;
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

const run = () => {
    console.log(playerBalls);
}
