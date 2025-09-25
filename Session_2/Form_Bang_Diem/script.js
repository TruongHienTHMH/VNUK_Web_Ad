function cal(){
    let a = parseFloat(document.getElementById("score_1").value);
    let b = parseFloat(document.getElementById("score_2").value);
    let year = parseInt(document.getElementById("valYear").value);
    let sum = 0;
    let rank = "";

    if(isNaN(a) || isNaN(b)) {
        alert("Hãy nhập đủ")
        exit()
    } else if(year == 1){
        sum = (a + b) / 2;
    } else if (year == 2){
        sum = (a+b*2)/3;
    }

    if(sum >= 9){
        rank = "Giỏi"
    } else if(sum < 9 && sum >= 7){
        rank = "Khá"
    } else {
        rank = "Trung bình"
    }

    document.getElementById("medVal").value = sum;
    document.getElementById("result").innerHTML = rank;
}

function cancel() {
    document.getElementById("score_1").innerHTML("")
    document.getElementById("score_2").innerHTML("")
}