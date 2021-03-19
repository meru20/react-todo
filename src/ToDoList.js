import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes} from '@fortawesome/free-solid-svg-icons'

const ToDoList = ({toDos, deleteTodo}) => {
    
    return (
      

            <ul className='list-group'>
                {
                    toDos.map((todo,index) => { 
                      return (
                         <li className='list-group-item list-group-item-dark d-flex justify-content-between'>
                             <p >{todo}</p>
                             
                             <button className='btn  mb-2' onClick={() => {deleteTodo(index)}} >
                             <FontAwesomeIcon icon={faTimes} />
                             </button>
                         </li>
                      )
                    })
                }
            </ul>
            
   
    )
}
export default ToDoList;