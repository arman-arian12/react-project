import React from 'react'
// 
import style from './Todo.module.css'


 const Todo = (props) => {
    const {title,desc}=props.todo
    const {id}=props
const handelClick=(id)=>{
  props.onRemiveTodo(id)
}

  return (
  <article className={style.todo}>
        <div>
          
        <h1>{title}</h1>
        {/* console.log(title) */}
        <p key={id}>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handelClick(id)}}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}
export default Todo