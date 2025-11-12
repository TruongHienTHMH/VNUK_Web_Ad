const area = (w, h) => {
    return new Promise((resolve, reject) => {
        if(typeof w !== 'number' || typeof h !== 'number' ){
            reject('Chiều dài hoặc rộng phải là số')
        } else {
            const s = w*h
            resolve(s)
        }
    })
}

const perimeter = (w, h) => {
    return new Promise((resolve, reject) => {
        if(typeof w !== 'number' || typeof h !== 'number' ){
            reject('Chiều dài hoặc rộng phải là số')
        } else {
            const p = (w + h) * 2
            resolve(p)
        }
    })
}

let a = 5
let b = '20'

area(a,b)
    // resolve
    .then(s => {
        console.log(`Diện tích hình chữ nhật của ${a} và ${b} là: ${s}`)
    })
    // reject
    .catch (err => {
        console.error(err);
    })

perimeter(a,b)
    // resolve
    .then(p => {
        console.log(`Chu vi hình chữ nhật của ${a} và ${b} là: ${p}`)
    })
    // reject
    .catch (err => {
        console.error(err);
    })