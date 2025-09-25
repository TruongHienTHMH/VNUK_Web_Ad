class MyClass {
    #priX = 0 

    y = 2

    constructor(priX, y){
        this.priX = priX,
        this.y = y
    }


    #getX(){
        return `Private x: ${this.#priX}` 
    } 
    showX() {
        return this.#getX
    }
}

let demo1 = new MyClass(2,4)

console.log(demo1.showX());
console.log(demo1.y);



