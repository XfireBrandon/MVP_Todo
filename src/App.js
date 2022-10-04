import axios from "axios";
import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Todo from './components/Todo'
import TodoInputBox from "./components/TodoInputBox";



function App() {


  const url = 'http://localhost:3500/todo'
  
  const [todo, setTodos] = useState([])
  

  useEffect(() => {
    async function getTodos() {
      const response = await axios.get(url)

      setTodos(response.data)
    }
    getTodos()
  }, [todo])

  return (
    <>
    <TopBar />
     <TodoInputBox  />
    <Todo todoProp={todo} />
   
    </>
 
  )
  

}

export default App;
