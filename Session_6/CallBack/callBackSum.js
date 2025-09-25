const calSum = (a, b, callBack) => {
    const sum = a + b;
    callBack(sum);
}

const showTwoNumbers = (a, b, callBack) => {
    displayNumbers(a, b);
}

const displayResult = (result) => {
    console.log("Tổng 2 số là: " + result);
}

const displayNumbers = (a, b) => {
    console.log(`${a} và ${b}`);
}

calSum(5, 10, displayResult);
showTwoNumbers(5, 10, displayNumbers);

