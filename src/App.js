import axios from "axios";
import { useEffect, useState } from "react";

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
     <TodoInputBox  />
    <Todo todoProp={todo} />
   
    </>
 
  )

  // if(!loading) {
  //   return <Todo todoProp={todo}/>

  // } else {
  //   return <Loading />
  // }

  

}

export default App;
