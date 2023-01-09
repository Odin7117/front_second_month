//Задача 1
let arr = [10,20,30,50,235,3000]
for (i in arr) {
    let num = Math.abs(arr[i]).toString()[0];
    if (num === '1' || num === '2' || num === '5')
        console.log(arr[i])
}

//Задача 2
for (i = 20;i > -1;i--) {
    console.log(i)
}

//Задача 3
var obj = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый'
}
var hgp = prompt('Вводите цвет:')

if (hgp === obj.red) {
    alert('Стоп')
} else if (hgp === obj.yellow) {
    alert('Ждите')
} else if (hgp === obj.green) {
    alert('Идите')
} else {
    alert('Вводите цвет!!!')
}
