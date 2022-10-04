import axios from "axios"
import { useState } from "react"

const PatchInputBox = ({patchProp}) => {
    
        const [text, setText] = useState('')
    
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(patchProp)
            axios.patch(`http://localhost:3500/todo/patch/${patchProp}`, {
                todo: text
            })
            setText('')
        }
    
        const handleChange = (e) => {
            setText(e.target.value)
        }
    
        return(
            <form onSubmit={handleSubmit} className="UpdateTodo">
                <input type="text" value={text} onChange={handleChange} className="UpdateTodo"/>
                <button type="submit">Change</button>
            </form>
        )
    
        
}

export default PatchInputBox