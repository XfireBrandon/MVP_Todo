import axios from "axios"
import PatchInputBox from "./PatchInputBox"

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
        <div className="Todos">
        <li onClick={handleClick} id={todoItemProp.id}>{todoItemProp.todo}</li>
        <button2 onClick={deleteTodo} id={todoItemProp.id}>X</button2>
        <PatchInputBox patchProp={todoItemProp.id}/>
        </div>
    )
}

export default TodoItems