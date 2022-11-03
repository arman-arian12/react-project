import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './Todos'
import NewTodo from './NewTodo'



import style from './Home.module.css'


// const dunnyToods=[
//     {
//         id:1,
//         title:"todo title 1",
//         desc:"todo description is here.."
//     },
//     {
//         id:2,
//         title:"todo title 2",
//         desc:"todo description is here.."
//     }
// ]


 const Home = () => {
  const [todos,setTodos]=useState([])

const handelAddTodos =(todo)=>{
  setTodos((prevTodos)=>{
    return [...prevTodos,{id:uuidv4(),todo}]
  })
  console.log(todos)
}
const handelRemovedTodo=(id)=>{
 
  setTodos((prevTodos)=>{
    const filterTodos=todos.filter((todo)=>todo.id !=id)
    return filterTodos
  })
}

  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <NewTodo onAddTodo={handelAddTodos}/>
      <Todos todos={todos} onRemiveTodo={handelRemovedTodo}/>
    </div>
  )
}
export default Home