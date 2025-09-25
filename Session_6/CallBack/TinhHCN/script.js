const calA_Retangle = (w, h , callBack) => {
    let area = w*h;
    // let p = (w+h) * 2;
    callBack(area);
}

const calP_Retangle = (w, h , callBack) => {
    

    // let area = w*h;
    let p = (w+h) * 2;
    callBack(p);

}

const displayA = (result) => {
    document.getElementById('area').innerText = `Diện tích hình chữ nhật là: ${result}`;
    console.log(result);
}

const displayP = (result) => {
    document.getElementById('p').innerText = `Chu vi hình chữ nhật là: ${result}`;
    console.log(result);
}

const handleRectangle = (e) => {
    e.preventDefault;

    let w = parseFloat(document.getElementById('inputWidth'));
    let h = parseFloat(document.getElementById('inputHeight'));

    calA_Retangle(w, h, displayA);
    calP_Retangle(w, h, displayP);
}


