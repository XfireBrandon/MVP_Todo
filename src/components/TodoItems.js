import axios from "axios"

const TodoItems = ({todoItemProp}) => {

    const handleClick = async (e) => {
        const data = await axios.get(`http://localhost:3500/todo/${e.target.id}`)
        console.log(data.data[0].id)
        if (e.target.style.textDecoration) {
            e.target.style.removeProperty('text-decoration');
          } else {
            e.target.style.setProperty('text-decoration', 'line-through');
          }
    }

    const deleteTodo = async (e) => {  
       
        const id = e.target.id
       const data = await axios.delete(`http://localhost:3500/todo/${id}`)
    }

    return(
        <>
        <h1 onClick={handleClick} id={todoItemProp.id}>{todoItemProp.todo}</h1>
        <button onClick={deleteTodo} id={todoItemProp.id}>DELETE</button>
        </>
    )
}

export default TodoItems