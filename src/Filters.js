import { useContext, useState } from 'react';
import './styles/Filters.css';
import ThemeContext from './ThemeContext';


const Filters = ({toDos, filterTasks}) => {
    const value = useContext(ThemeContext);
    const [ filter, setFilter ] = useState('all');

    const handleChange = (event) => {
        setFilter(event.target.value)
        filterTasks(filter)
    }

    return (
        <section className={`filter ${value}`}>
            <div><input type="radio" value="all" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='all'>All</label></div>
            <div><input type="radio" value="active" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='active'>Active</label></div>
            <div><input type="radio" value="completed" name="filter" onChange={(e) => handleChange(e)} /> <label htmlFor='completed'>Completed</label></div>
        </section>        
    )
}

export default Filters;