import TodoItems from "./TodoItems"

const Todo = ({todoProp}) => {
    return todoProp.map((todo) => (
        <TodoItems todoItemProp={todo} key={todo.id} />
    ))
}

export default Todo