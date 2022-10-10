import './styles/ToDos.css';
import ListItem from './ListItem';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';

const ToDos = ({toDos, removeToDo}) => {
    const value = useContext(ThemeContext)

    const displayTasks = toDos.map((toDo, index) => {
        return (
                <ListItem 
                    key={index}
                    id={toDo.id}
                    toDo={toDo.toDo}
                    removeToDo={removeToDo}
                />     
        )
    })

    return (
        <section className={`todo-list ${value}`}>
            <ul>
                {displayTasks}
                <div className="todo-list-bottom">
                    <p>5 items left</p>
                    <p>Clear Completed</p>
                </div>
            </ul>
        </section>
    )
}

export default ToDos;