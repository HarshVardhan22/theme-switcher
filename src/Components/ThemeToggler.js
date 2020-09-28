import React, { useContext } from 'react';
import ThemeContext from '../Context/themeContext';

const ThemeToggler = ()=>{
    const[themeMode, setThemeMode] = useContext(ThemeContext)
    return (
        <div onClick = {()=>{setThemeMode(themeMode === "light" ? "dark" : "light")}}>
        <span>{themeMode === 'light'? "Switch to Dark Theme": "Switch to Light theme"}</span>
        </div>
    );
}

export default ThemeToggler;