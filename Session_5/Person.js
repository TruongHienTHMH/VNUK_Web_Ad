class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Way #3: Xin chào tôi là: ${this.name}`)
    }
}

// Cách 3: Mình đang thể hiện tính đa hình ở cách 3 và kế thừa hành vi greet từ lớp Person
class Student extends Person {
    constructor(name, age, idStudent){
        super(name, age)
        this.idStudent = idStudent
    }

    study() {
        console.log(this.greet() + ` và tôi đang học`)
    }
}

class Teacher extends Person {
    constructor(name, age, idTeacher){
        super(name, age)
        this.idTeacher = idTeacher
    }

    teach() {
        console.log(`${this.greet()} và tôi đang dạy`)
    }
}

const sv1 = new Student('Hải', 22, 'SV_01')
const gv1 = new Teacher('Thuỷ', 33, 'GV_A1')

sv1.study()
gv1.teach()