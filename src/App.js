import "./style/index.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const toggleMode = () => {
    setIsSearchMode(!isSearchMode);
    setTodo(''); // Clear input field when toggling mode
  };

  const handleSearch = () => {
   
  };

  function handleDeleteClick(id) {
    const removeItem = toDos.filter((todo) => todo.id !== id);
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
      if (isSearchMode) {
        handleSearch();
      } else {
           handleAddTodo();
           }
    }    
  }


  const filteredTodos = toDos.filter((obj) => {
    if (filter === 'completed') return obj.status;
    if (filter === 'active') return !obj.status;
    return true; 
  }).filter((obj) => {
    return obj.text.toLowerCase().includes(toDo.toLowerCase());
  });


  return (
    <div className="App">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          value={toDo}
          type="text"
          placeholder={isSearchMode ? "Search todos" : "Add items"}
        />
        <i onClick={isSearchMode ? handleSearch : handleAddTodo} className="fas fa-plus"></i>
      </div><br /><br />
      <div className="section">
        <i onClick={toggleMode} className="fa-solid fa-magnifying-glass"></i>
        <button className="btn" onClick={() => handleFilterChange('all')}>ALL</button>
        <button className="btn" onClick={() => handleFilterChange('active')}>ACTIVE</button>
        <button className="btn" onClick={() => handleFilterChange('completed')}>COMPLETED</button>
      </div>

      <div className="todos">
        {filteredTodos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos(toDos.map((obj2) => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked;
                    }
                    return obj2;
                  }));
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p className={obj.status ? 'complete' : ''}>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteClick(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
}

export default App;
