import React ,{useState}from 'react'
import style from './NewTodo.module.css'

 const NewTodo = (props) => {

const [todo,setTodo]=useState({title:"",desc:""})
const {title,desc}=todo

const handelChange=(event)=>{
  const name=event.target.name;
  setTodo((oldTodo)=>{
    return {...oldTodo,[name]:event.target.value}
  })
}

const handdelSubmit=(event)=>{
  event.preventDefault();
  props.onAddTodo(todo)
  setTodo({title:"",desc:""})
}

  return (
    <form className={style.form} 
    onSubmit={handdelSubmit}>
      <div className={style["form-field"]}>
        <label >Title:</label>
        <input typr="text" id="title" name="title" value={title}
        onChange={handelChange}></input>
      </div>

      <div className={style["form-field"]}>
        <label>Description:</label>
        <textarea typr="text" id="desc" name="desc"value={desc} 
        onChange={handelChange}></textarea>
      </div >
      <div className={style.BTN }>
      <button  type="submit">Add Todo</button>
      </div>
    </form>
  )
}
export default NewTodo