import {useState} from 'react';
const ToDo = ({save}) => {

    const[value, setValue]=useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        save(value);
        setValue('');

    }
    return (
        <div className='row mb-5'>
            <div className='col-6 offset-3 text-center'>
            <h1>To-Do List</h1>
            <form  onSubmit={handleSubmit}>
                
               
            <div className='input-group'>
            
            <input 
              type="text"
              placeholder='Add your todo list...'
              className='form-control'
              value={value}
              onChange={(event)=>{
                setValue(event.target.value);
              }}
              />
              
              <span class="input-group-btn">
              <button  className='btn btn-primary'>ADD</button>
              </span>
              
          
          </div>
            </form>

            </div>
            
         </div>
    )
}
export default ToDo;