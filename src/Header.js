import './styles/Header.css';
import lightBanner from './images/bg-mobile-light.jpg';
import darkBanner from './images/bg-mobile-dark.jpg';
import moonIcon from './images/icon-moon.svg';
import sunIcon from './images/icon-sun.svg';
import Form from './Form';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const Header = ( { addNewToDo, toggleTheme, themeSettings } ) => {
    const value = useContext(ThemeContext);
    const [ themeBtn, setThemeBtn ] = useState(moonIcon);
    const [ themeBackgroundImage, setThemeBackgroundImage ] = useState(lightBanner);

    useEffect(() => {
        if (value === 'light') {
            setThemeBtn(moonIcon);
            setThemeBackgroundImage(lightBanner)
        } else {
            setThemeBtn(sunIcon)
            setThemeBackgroundImage(darkBanner)
        }
    }, [value]);

    return (
    <header>
        <img src={themeBackgroundImage} alt="Banner for selected theme" className="banner"/>
        <div className="items-container">
        <div className="top-header">
            <h1>ToDo</h1>
            <img src={themeBtn} alt="Click to switch to theme mode" className="theme" onClick={toggleTheme}/>
        </div>
        <Form addNewToDo={addNewToDo}/>
        </div>
  </header>
    )
}

export default Header;