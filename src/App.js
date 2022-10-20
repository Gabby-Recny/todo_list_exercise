import './App.css';
import Header from './Header.js';
import ToDos from './ToDos.js';
import Filters from './Filters';
import ThemeContext from './ThemeContext';
import { useState, useContext } from 'react';

const App = () => {
  const [ toDos, setToDos ] = useState([]);
  const [theme, setTheme] = useState('light');
  const value = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const addNewToDo = (task) => {
    setToDos([...toDos, {toDo: task, id: Date.now()}])
  }

  const removeToDo = (id) => {
    const filteredIdeas = toDos.filter(toDo => toDo.id !== id)
    setToDos(filteredIdeas)
  }

  return (
    <section 
      style={{
        backgroundColor: theme === 'light' ? 'hsl(233, 11%, 84%)' : 'black',
        position: 'relative',
        zIndex: '0'
      }}
      className="app"
    >
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} addNewToDo={addNewToDo} />
        <main>
          <ToDos toDos={toDos} removeToDo={removeToDo} />
          {/* <Filters toDos={toDos}/> */}
        </main>
      </ThemeContext.Provider>
    </section>
  )
}

export default App;
