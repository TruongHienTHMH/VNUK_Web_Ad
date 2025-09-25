// let a_glo =2;

// function func1(){
//     let func1_local = "Hello";
//     return func1_local
// }

// function func2(){
//     let func2_local = 2;
// }

// console.log(a_glo)
// console.log(func1())

//  Cách viết hàm mới: 
const funcSayHi = (name, message) => {
    console.log("Chào " + name + ", message: " + message)
}

// funcSayHi("Hien", "handsome")


const is_odd = (number) => {
    return number % 2 == 0 ? console.log(number + " là số chẵn"): console.log(number + " là số lẻ") 
}

is_odd(2)

