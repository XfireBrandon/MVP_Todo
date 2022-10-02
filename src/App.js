import axios from "axios";
import { useEffect, useState } from "react";
import Loading from './components/Loading'
import Todo from './components/Todo'
import TodoInputBox from "./components/TodoInputBox";



function App() {


  const url = 'http://localhost:3500/todo'
  
  const [todo, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getTodos() {
      const response = await axios.get(url)

      setTodos(response.data)
      setLoading(false)
    }
    getTodos()
  }, [])

  return (
    <>
       <Todo todoProp={todo} />
    <TodoInputBox />
    </>
 
  )

  // if(!loading) {
  //   return <Todo todoProp={todo}/>

  // } else {
  //   return <Loading />
  // }

  

}

export default App;
