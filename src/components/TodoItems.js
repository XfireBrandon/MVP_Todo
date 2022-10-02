import axios from "axios"

const TodoItems = ({todoItemProp}) => {

    const handleClick = async (e) => {
        const data = await axios.get(`http://localhost:3500/todo/${e.target.id}`)
        console.log(data.data[0].id)
    }

    return(
        <h1 onClick={handleClick} id={todoItemProp.id}>{todoItemProp.todo}</h1>
    )
}

export default TodoItems