// Cách 1: Cơ Bản.
const person = {
    name : 'Nam',
    age : 23,
    greet : function( ) {
        console.log(`Way #1: Xin chào ${this.name}`)
    }
} 

person.greet()

// Cách 2 - thể hiện tính kế thừa. Với prototype greet.
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Way #2: Xin chào ${this.name}`)
}

const person01 = new Person('Trí', 22)
const person02 = new Person('Hoàng', 20)

person01.greet()
person02.greet()


