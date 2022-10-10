import { useContext, useState } from 'react';
import './styles/Filters.css';
import ThemeContext from './ThemeContext';


const Filters = ({toDos}) => {

    const value = useContext(ThemeContext);

    const [ activeFilter, setActiveFilter ] = useState([]);
    const [ completedFilter, setCompletedFilter ] = useState([]);

    const handleCompletedFilters = () => {
        const completedTasks = toDos.filter(toDo => toDo.checked === true);
        setCompletedFilter(completedTasks)
    }

    const handleActiveFilter = () => {
        const activeTasks = toDos.filter(toDo => toDo.checked === false);
        setActiveFilter(activeTasks)
    }
    return (
        <section className={`filter ${value}`}>
            {/* {console.log("Compelted Filter:", completedFilter)} */}
            {/* {console.log("Active Filter:", activeFilter)} */}
            <h5>All</h5>
            <h5>Active</h5>
            <h5>Completed</h5>
      </section>       
    )
}

export default Filters;