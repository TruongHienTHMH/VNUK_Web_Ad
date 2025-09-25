function sum(...num){
    let sum = 0;
    for(let i = 0; i <= num.length - 1; i++){
        sum += num[i]
    }
    return sum
}

const s = [100,3,6,7,10]

const tinhTong = (numbers) => {
    let tong = 0;
    for(let i = 0; i <= numbers.length - 1; i++){
        tong += numbers[i]
    }
    return tong
}

console.log(sum(200,100,2));
console.log(tinhTong(s));

