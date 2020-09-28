import React, {useContext} from "react";
import ThemeContext from '../Context/themeContext';
import AppTheme from '../Color';
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
          textAlign: "center",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style ={{
          position : "relative",
          bottom : "25px"

        }} >To-Do List</h1>
        <div
          style={{
            display: "flex",
            height: "60vh",
            width: "45vh",
            backgroundColor: `${currentTheme.backgroundColor}`,
            border: "2px solid orangered",
            borderRadius: "5px",
            boxShadow: "2px 2px 2px 2px",
            marginTop: "10px",
            position: "relative",
            bottom: "50px",
          }}
        >
          <input
            type="text"
            style={{
              backgroundColor: `${currentTheme.backgroundColor}`,
              color: `${currentTheme.textColor}`, 
              height: "20px",
              padding: "5px",
              margin: "10px",
              border: "1.5px solid",
              borderRadius: "4px",
    
            }}
          />

          <button
            style={{
              display: "flex",
              height: "20px",
              margin: "13px",
              padding: "10px",
              fontSize: "16px",
              textAlign: "center",
              justifyItems: "center",
              alignItems: "center",
              border: "2px solid",
              borderRadius: "5px",
              backgroundColor: "coral",
            }}
          >
            Add Task
          </button>
        </div>

        <ThemeToggler />
      </div>
    );
}

export default HeroSection;