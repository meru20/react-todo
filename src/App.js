
import { useState } from 'react';
import './App.css';
import ToDo from './ToDo';
import ToDoList from './ToDoList';

const App = () => {
  const[toDos, setToDos]= useState([]);
  const [alert,setAlert]=useState(false);;
  const save = (value) => {
    setToDos([...toDos,value]);
    showAlert();

  }
  const deleteTodo = (i) => {
    if( window.confirm('Are you sure you want to delete it?')){
      const newToDo = toDos.filter((_, index) => index !== i)
      setToDos(newToDo)
    }
    
  }
  const showAlert = () => {
    setAlert(true);
   setTimeout(() => {
     setAlert(false);
   },2000);
  }
  return (
    <div className='container'>
       {alert ? (
        <div className='row'>
          <div className='col-6 offset-3'>
            <div class='alert alert-success text-center' role='alert'>
              You've successfully added your todo!
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
          
        <ToDo save={save} />
        <ToDoList toDos={toDos} deleteTodo={deleteTodo}/> 
        </div>
      
  );
}

export default App;
