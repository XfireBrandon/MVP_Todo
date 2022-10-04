import axios from "axios"
import { useEffect, useState } from "react"

const TodoInputBox = () => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        axios.post('http://localhost:3500/todo/post', {
            todo: text
        })
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className='EnterTodo'>
            <input type="text" value={text} onChange={handleChange} className='EnterTodo'/>
            <button type="submit">Enter</button>
        </form>
    )

}

export default TodoInputBox