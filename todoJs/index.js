const addBtn = document.getElementById('addBtn')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const checkInput = (document.getElementsByClassName('check-input'))

let todoArr = []
let localTodoArr = JSON.parse(localStorage.getItem('todos'))
if(localTodoArr){
    todoArr = localTodoArr
}
const grabValidTodo =()=>{    
    if(todoInput.value!= '' ){
        todoArr =[...todoArr,{inputValue:todoInput.value, isDone: false} ]
        localStorage.setItem("todos", JSON.stringify(todoArr))
        todoInput.value =''
        renderTodos()        
     }
}

addBtn.addEventListener('click',()=>{
    grabValidTodo()
    renderTodos()
}
)
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        grabValidTodo()
    }
});

const checkForDone = () =>{    
    for(let i = 0;  i < localTodoArr.length; i++){
        checkInput[i].addEventListener('click',()=>{
            checkInput[i].classList.add('done')
            checkInput[i].children[0].checked = true
        })
    }
}


const renderTodos = ()=>{
    todoList.innerHTML=''
    if(localTodoArr){
        // inputValue, isDone
        let todoListHtml = localTodoArr.map( todo => todo.isDone ? `
        <li class='check-input'> <input type="checkBox" checked > <label > ${todo.inputValue}</label></li>` : `<li class='check-input'> <input type="checkBox" > <label > ${todo.inputValue}</label></li>`)
        todoList.innerHTML += todoListHtml.join('')
    checkForDone()
    }else{
        todoList.innerHTML= 'add here something cool todo'
    }

}
renderTodos()
