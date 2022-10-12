import './styles/ListItem.css';
import { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ReactComponent as DeleteBtn } from './images/icon-cross.svg';

const ListItem = ({toDo, id, removeToDo}) => {
    const [ checked, setChecked ] = useState(false);
    const value = useContext(ThemeContext);

    return (
        <li className={`list-item ${value}`}>
            <input 
                className="checkbox" 
                type="checkbox" 
                onChange={() => setChecked(!checked)}
            />
            <label>{toDo}</label>
            <button onClick={() => removeToDo(id)}>
                <DeleteBtn />
            </button>
        </li>
    )
}

export default ListItem;