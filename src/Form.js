import { useState, useContext } from 'react';
import './styles/Form.css';
import ThemeContext from './ThemeContext';

const Form = ({addNewToDo}) => {

    const [ newToDo, setNewToDo ] = useState('');
    const value = useContext(ThemeContext);


    const handleChange = (e) => {
        setNewToDo(e.target.value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()

        addNewToDo(newToDo)
        setNewToDo('')
    }

    return (
         <form onSubmit={e => handleSubmission(e)}>
            <label 
                htmlFor="newTask" 
                style={{ display: 'none'}}
                >Add New Item
            </label>
            <input 
                id="newTask" 
                type="text" 
                placeholder="Create New Task" 
                value={newToDo}
                onChange={(e) => handleChange(e)}
                className={`${value}`}
            />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;