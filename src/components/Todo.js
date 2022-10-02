import TodoItems from "./TodoItems"

const Todo = ({todoProp}) => {
    return todoProp.map((todos) => (
        <TodoItems todoItemProp={todos} key={todos.id} />
        
    ))
    
}

export default Todo