const sumNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) ){
            reject('A hoặc b không phải số')
        } else {
            const sum = a+b
            resolve(sum)
        }
    })
}

let a = 5
let b = 7

sumNumber(a, b)
    .then(sum => {
        console.log(`Tổng của ${a} và ${b} là: ${sum}`)
    })
    .catch(error => {
        console.log('Đã có lỗi ' + error + " xảy ra")
    })
