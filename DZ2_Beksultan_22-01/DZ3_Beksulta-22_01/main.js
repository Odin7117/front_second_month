
//Задача 1
let a = Number(prompt('Ввести 1 число'))
let b = Number(prompt('Ввести 2 число'))
const sayHi = (a,b) => {
    if (a > b) {
        console.log(a)
    } else if (a < b) {
        console.log(b)
    } else {
        console.log('=')
    }
}
console.log(Math.min(a,b))


//Задача 2
// function init() {
//     var str = String(prompt('Введите слова '))
//         console.log(str.length)
//     }
//     init()


//Задача 3
// let numA = Number(prompt('Ввести 1 число:'))
// let numC = (prompt('Ввести знак:'))
// let numB = Number(prompt('Ввести 2 число:'))
//
// const calc = (a,c,b) => {
//         if (c === '+') {
//             console.log(a + b)
//         } else if (c === '-') {
//             console.log(a - b)
//         } else if (c === '/') {
//             console.log(a / b)
//         } else if (c === '*') {
//             console.log(a * b)
//         } else {
//             alert('Введи знак!!!')
//         }
// }
//
// calc(numA,numC,numB)