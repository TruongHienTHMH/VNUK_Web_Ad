const calArea = (a, b, callBack) => {
    var area = a * b;
    callBack(area)
}

const displayArea = (result) => {
    console.log("Diện tích hình vuông là: " + result)
}

calArea(5, 5, displayArea);