import './styles/ToDos.css';
import ListItem from './ListItem';
import ThemeContext from './ThemeContext';
import { useContext, useEffect, useState } from 'react';
import Filters from './Filters';

const ToDos = ({toDos, removeToDo}) => {
    const value = useContext(ThemeContext);
    const [filter, setFilter] = useState('all');
    const [ activeTasks, setActiveTasks ] = useState([]);
    const [ completedTasks, setCompletedTasks ] = useState([]);
    const [ tasks, setTasks ] = useState()

    const toggleTaskCompleted = (id) => {
        console.log('Toggle Class', id)

        const updatedTasks = toDos.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
              // use object spread to make a new object
              // whose `completed` prop has been inverted
              return {...task, completed: !task.completed}
            }
            return task;
          });
          setTasks(updatedTasks);
    }


    const displayTasks = (tasks) => {
        return tasks.map((task, index) => {
            return (
                <ListItem 
                    key={index}
                    id={task.id}
                    toDo={task.toDo}
                    removeToDo={removeToDo}
                    completed={false}
                    toggleTaskCompleted={toggleTaskCompleted}
                />     
            )
        })
    }
    

    const filterTasks = (filter) => {
        if (filter === 'active') {
            const activeToDos = toDos.filter(toDo => toDo.checked === false)
            activeTasks.concat(activeToDos)
            // setActiveTasks(activeToDos)
            // displayTasks(activeToDos)
            displayTasks(activeTasks)
        } else if (filter === 'completed') {
           const completedToDos =  toDos.filter(toDo => toDo.checked === true);
           completedToDos.forEach(task => {
            completedTasks.push(task)
           })
        //    displayTasks(completedToDos)
           displayTasks(completedTasks)
        } else {
            displayTasks(toDos)
        }
    }


    const handleChange = (event) => {
        setFilter(event.target.value)
        filterTasks(filter)
    }

    return (
        <>
            <section className={`todo-list ${value}`}>
                <ul>
                    {displayTasks(toDos)}
                    <div className="todo-list-bottom">
                        <p>5 items left</p>
                        <p>Clear Completed</p>
                    </div>
                </ul>
            </section>
            <section className={`filter ${value}`}>
                <div><input type="radio" value="all" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='all'>All</label></div>
                <div><input type="radio" value="active" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='active'>Active</label></div>
                <div><input type="radio" value="completed" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='completed'>Completed</label></div>
            </section>       
            {/* <Filters toDos={toDos} filterTasks={filterTasks}/> */}
        </>
    )
}

export default ToDos;