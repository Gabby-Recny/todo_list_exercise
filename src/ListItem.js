import './styles/ListItem.css';
import { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ReactComponent as DeleteBtn } from './images/icon-cross.svg';

const ListItem = ({toDo, id, removeToDo, completed, toggleTaskCompleted}) => {
    const [ checked, setChecked ] = useState(false);
    const value = useContext(ThemeContext);

    const handleChange = () => {
        setChecked(!checked)
        toggleTaskCompleted(id)
    }

    return (
        <li className={`list-item ${value}`}>
            <input 
                className="checkbox" 
                type="checkbox" 
                onChange={() => handleChange()}
                defaultChecked={completed}
            />
            <label>{toDo}</label>
            <button onClick={() => removeToDo(id)}>
                <DeleteBtn />
            </button>
        </li>
    )
}

export default ListItem;