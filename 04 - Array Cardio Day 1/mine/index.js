const people = [
    { name: 'Amy', gender: 'female', age: 16 },
    { name: 'Mike', gender: 'male', age: 39 },
    { name: 'Anderson', gender: 'male', age: 25 },
    { name: 'Jessica', gender: 'female', age: 31 },
    { name: 'Yong', gender: 'female', age: 32 },
    { name: 'Alice', gender: 'female', age: 10 },
    { name: 'Jay', gender: 'male', age: 36 }
]

const job = [
    'student', 'singer', 'dancer', 'farmer', 'teacher', 'doctor', 'police officer', 'nurse', 'boss', 'worker', 'soldier'
]

// array.filter()
// const findAge = people.filter(function (x) {
//     return x.age >= 25 && x.gender === 'female'
// })
// es6 arror function as below
const findAge = people.filter(x => x.age >= 25 && x.gender === 'female');
// console.table(findAge);

// array.map()
const find = people.map(function (x) {
    return `${x.name} is ${x.age} years old.`;
})
// const find = people.map(x => x.name + ' ' + x.age);
// console.table(find);

// array.sort()
const toSort = people.sort(function (a, b) {
    return a.age - b.age;
})
// const toSort = people.sort((a, b) => a.age - b.age);
// console.table(toSort)

// array.reduce()
const ageReduce = people.reduce((total, current) => {
    return total + current.age;
}, 0)
// console.log(ageReduce);

const data = ['red', 'green', 'orange', 'red', 'blue', 'pink', 'pink', 'white', 'yellow', 'red'];
const color = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

// const color = new Set([...data]);
console.log(color);
