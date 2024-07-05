import "./style/index.css";
import { useState } from "react";
function App() {
  const [toDos,setTodos]= useState([])
  const [toDo,setTodo]= useState('')
  function handleDeleteClick(id) {
    const removeItem = toDos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleAddTodo() {
    if (toDo.trim()) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo('');
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }


  return (
    <div className="App">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input onChange={(e)=>setTodo(e.target.value)} onKeyDown={handleKeyDown} vakue={toDo} type="text" placeholder="Add items" />
        <i onClick={()=>setTodos([...toDos,{ id:Date.now(), text:toDo , status:false}])} className="fas fa-plus"></i>
      </div>
    
  <div className="todos">
  { toDos.map((obj)=>{
      return (
        <div className="todo" key={obj.id}>
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodo(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} 
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>handleDeleteClick(obj.id)} className="fas fa-times"></i>
          </div>
          
        </div> )
  }) }  
 
 {toDos.some((obj) => obj.status) && (
          <div>
            <br/><br/><br/><h2>Completed Tasks</h2><br/>
 
  { toDos.map((obj)=>{
    if(obj.status){
      return(<h3 className="h3" key={obj.id} >{obj.text}</h3>)
    }
    return null
  })}
        </div>
        
      )}
      </div>
 </div>    
 );
}

export default App;
