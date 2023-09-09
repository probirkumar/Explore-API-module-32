function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))

}

function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        // console.log(todo);
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>todo title: ${todo.title}</h3>
            <p>user id: ${todo.userId}</p>
            <p>Is completed: ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();