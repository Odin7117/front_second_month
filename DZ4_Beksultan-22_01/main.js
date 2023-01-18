const numb = document.querySelector(".num")
const increment = document.querySelector('.inc')
const decrement = document.querySelector('.dec')
const reset = document.querySelector(".res")


let count = 0


increment.addEventListener("click", () => {
    count = count + 1
    numb.innerHTML = count
    document.body.style.color = "green"
})
decrement.addEventListener("click", () => {
    if(count <= 0){
        count = 0
    }else{
        count = count -1
    }
    numb.innerHTML = count
    document.body.style.color = "red"
})
reset.addEventListener("click", () => {
    count = 0
    numb.innerHTML = count
    document.body.style.color = "black"
})
numb.innerHTML = count

console.log(count);
console.log(numb);




// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
// const block = document.getElementById('block')
//
// block.addEventListener('mousemove', event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })
