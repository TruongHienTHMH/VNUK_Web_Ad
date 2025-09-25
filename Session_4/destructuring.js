let intro = ['hello', 'my', 'name is', 'H']
// let vn = intro[2]
// let us = intro[0]

var [sayhi,,,,name] = intro

var [greeting,...speak] = intro

console.log(greeting, speak);


//Obj
const student = {
    fullName : "TrgHien",
    age: 21
}

const {de_fullName, de_age} = student

console.log(de_fullName + " " + de_age );

const user = [
    {
        'name' : "A",
        'address' : "VN",
        'age' : 20
    },

    {
        'name' : "B",
        'address' : "USA",
        'age' : 18
    },

    {
        'name' : "C",
        'address' : "CN",
        'age' : 4
    }
]

for(person in user){
    console.log(user[person]);
}

const [user1, user2, user3] = user

console.log(user1);

const clone = {...user}
console.log(clone);

for(index in clone) {
    console.log(clone[index]);
}
