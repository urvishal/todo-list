import React from 'react'

const Todoitems = ({todo, onDelete}) => {
  if (!todo) return null;
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className ="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todoitems
