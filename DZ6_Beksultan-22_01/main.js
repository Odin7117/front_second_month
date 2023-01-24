const button = document.querySelector('#create_todo')
const input = document.querySelector('#input')

const revers = () => {
    if (input.value.trim() === ''){
        return false
    } else {
        let arr = []
        arr.push(input.value)
        const p = document.createElement('p')
        p.setAttribute('class','p')
        document.body.append(p)
        arr.forEach((i)=>{
            p.append(i, ' - ', i.split('').reverse().join(''))
        })
        input.value = ''

    }
}
button.onclick = ()=> revers()


