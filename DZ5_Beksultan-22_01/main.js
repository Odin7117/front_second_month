const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === ''){
        input.value = ""
        return false
    }else{
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')

        div.setAttribute('class','block_text')
        text.setAttribute('class','text')
        button1.setAttribute('class','delete_button')
        button1.textContent = 'Delete';
        button1.addEventListener('click', () => {
            text.innerText = ""
        })
        button2.setAttribute('class','edit_button')
        button2.addEventListener('click', () => {
            // prompt('Введите слово:')
            text.innerText = prompt()
        })
        button2.textContent = 'Edit';



    text.innerText = input.value

    div.append(text)
    todoList.append(div)
        div.appendChild(button1)
        div.appendChild(button2)


}
    input.value = ""
}
createButton.addEventListener('click',createTodo)
input.addEventListener('keydown',() => {
    // console.log(input.value)

})
