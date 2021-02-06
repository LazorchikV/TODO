import React, { useContext } from 'react';
import Context from './context';


 

const Todo = ({ onClick, completed, text }) => {
const {removeTodoid} = useContext(Context)

  return(
  <li type='checkbox'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  {text}   
    <button className="btn" onClick={() => removeTodoid(text.id)}>&times;</button>
  </li>
 
)
  }

export default Todo;
