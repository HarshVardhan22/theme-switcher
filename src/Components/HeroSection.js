import React, {useContext} from "react";
import ThemeContext from '../Context/themeContext';
import AppTheme from '../Color';
import ThemeToggler from "./ThemeToggler";
import Form from './Form';

import './HeroSection.css';


const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    
    return (
      <div className= "container">
        <div
          className="header"
          style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
          }}
        >
          <h1 className="h1">To-Do List</h1>
          <Form />

          <ThemeToggler />
        </div>
      </div>
    );
}

export default HeroSection;